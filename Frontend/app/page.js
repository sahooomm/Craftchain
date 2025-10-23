'use client';

import Link from 'next/link';
import { ArrowRight, Package, FileText, Eye, Shield, Sparkles, Users, Lock, Globe, Zap, CheckCircle, TrendingUp, LogIn, UserPlus, LogOut, X, Loader2 } from 'lucide-react';
import { useWallet } from '@/hooks/usewallet';
import { formatAddress } from '@/lib/ethers';
import { useState, useEffect } from 'react';
import { useContract } from '@/hooks/usecontract';
import { uploadJSON, uploadFile } from '@/lib/ipfs';

export default function Home() {
  const { account, isConnected, connect, disconnect, loading } = useWallet();
  const { contract, contractWithSigner } = useContract();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState('login'); // 'login' or 'register'
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userData, setUserData] = useState(null);
  const [authLoading, setAuthLoading] = useState(false);
  
  // Registration form
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Token ID and step data for recording
  const [tokenId, setTokenId] = useState('');
  const [isOwner, setIsOwner] = useState(false);
  const [checking, setChecking] = useState(false);
  const [verified, setVerified] = useState(false);
  const [stepData, setStepData] = useState({
    stepType: '',
    description: '',
    location: '',
    notes: '',
  });
  const [photoFiles, setPhotoFiles] = useState([]);
  const [photoPreviews, setPhotoPreviews] = useState([]);
  const [loadingStep, setLoadingStep] = useState(false);
  const [status, setStatus] = useState('');
  const [errorStep, setErrorStep] = useState('');
  const [successStep, setSuccessStep] = useState(false);

  // Check if user is logged in on mount
  useEffect(() => {
    const storedUser = localStorage.getItem('userData');
    if (storedUser) {
      setUserData(JSON.parse(storedUser));
      setIsAuthenticated(true);
    }
  }, []);

  // Auto-connect wallet if user was authenticated
  useEffect(() => {
    const autoConnect = async () => {
      const storedUser = localStorage.getItem('userData');
      if (storedUser && !isConnected) {
        try {
          await connect();
        } catch (err) {
          console.error('Auto-connect failed:', err);
        }
      }
    };
    autoConnect();
  }, []);

  const handleLogin = async () => {
    setAuthLoading(true);
    setError('');
    setSuccess('');

    try {
      // First connect wallet
      if (!isConnected) {
        await connect();
      }

      // Wait a bit for account to be available
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Get the connected wallet address
      const walletAddress = account || window.ethereum?.selectedAddress;
      
      if (!walletAddress) {
        throw new Error('Wallet address not found. Please try again.');
      }

      // Call login API
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ walletAddress }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Login failed');
      }

      // Store user data
      localStorage.setItem('userData', JSON.stringify(data.user));
      setUserData(data.user);
      setIsAuthenticated(true);
      setSuccess('Login successful! Welcome back!');
      
      setTimeout(() => {
        setShowAuthModal(false);
        setSuccess('');
      }, 1500);

    } catch (err) {
      setError(err.message);
    } finally {
      setAuthLoading(false);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setAuthLoading(true);
    setError('');
    setSuccess('');

    try {
      // Validate password
      if (!formData.password || formData.password.length < 6) {
        throw new Error('Password must be at least 6 characters long');
      }

      // Call register API
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
        }),
      });

      // Check if response is JSON
      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        throw new Error('Server error: Invalid response format. Please check your API route.');
      }

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Registration failed');
      }

      // Store user data
      localStorage.setItem('userData', JSON.stringify(data.user));
      setUserData(data.user);
      setIsAuthenticated(true);
      setSuccess('Registration successful! Welcome aboard!');
      
      setTimeout(() => {
        setShowAuthModal(false);
        setFormData({ name: '', email: '', password: '' });
        setSuccess('');
      }, 1500);

    } catch (err) {
      console.error('Registration error:', err);
      setError(err.message);
    } finally {
      setAuthLoading(false);
    }
  };

  const handleLogout = async () => {
    localStorage.removeItem('userData');
    setUserData(null);
    setIsAuthenticated(false);
    await disconnect();
  };

  const openAuthModal = (mode) => {
    setAuthMode(mode);
    setShowAuthModal(true);
    setError('');
    setSuccess('');
  };

  const handleVerifyOwnership = async () => {
    if (!tokenId) {
      setError('Please enter a token ID');
      return;
    }

    if (!isConnected) {
      try {
        await connect();
      } catch (err) {
        setError('Please connect your wallet first');
        return;
      }
    }

    setChecking(true);
    setError('');
    setIsOwner(false);
    setVerified(false);

    try {
      const owner = await contract.ownerOf(tokenId);
      
      if (owner.toLowerCase() === account.toLowerCase()) {
        setIsOwner(true);
        setVerified(true);
      } else {
        setError(`You do not own token #${tokenId}. Current owner: ${owner.substring(0, 10)}...`);
      }
    } catch (err) {
      console.error('Error verifying ownership:', err);
      setError('Token not found or invalid token ID');
    } finally {
      setChecking(false);
    }
  };

  const handlePhotoChange = (e) => {
    const files = Array.from(e.target.files);
    setPhotoFiles(prev => [...prev, ...files]);
    
    files.forEach(file => {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreviews(prev => [...prev, reader.result]);
      };
      reader.readAsDataURL(file);
    });
  };

  const removePhoto = (index) => {
    setPhotoFiles(prev => prev.filter((_, i) => i !== index));
    setPhotoPreviews(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isOwner) {
      setError('Please verify ownership first');
      return;
    }

    setLoadingStep(true);
    setErrorStep('');
    setSuccessStep(false);
    setStatus('');

    try {
      let photoUris = [];
      if (photoFiles.length > 0) {
        setStatus(`📤 Uploading ${photoFiles.length} photo(s) to IPFS...`);
        photoUris = await Promise.all(
          photoFiles.map(file => uploadFile(file))
        );
      }

      const stepDataToUpload = {
        stepType: stepData.stepType,
        description: stepData.description,
        location: stepData.location,
        notes: stepData.notes,
        actor: account,
        timestamp: new Date().toISOString(),
        photos: photoUris,
      };

      setStatus('📤 Uploading step data to IPFS...');
      const stepDataUri = await uploadJSON(stepDataToUpload);

      setStatus('⛓️ Recording step on blockchain...');
      const tx = await contractWithSigner.recordStep(tokenId, stepDataUri);
      
      setStatus('⏳ Waiting for confirmation...');
      await tx.wait();

      setSuccessStep(true);
      setStatus('');
      
      setStepData({
        stepType: '',
        description: '',
        location: '',
        notes: '',
      });
      setPhotoFiles([]);
      setPhotoPreviews([]);
      
    } catch (err) {
      console.error('Error recording step:', err);
      setErrorStep(err.message || 'Failed to record step. Please try again.');
      setStatus('');
    } finally {
      setLoadingStep(false);
    }
  };

  const stepTypes = [
    { value: 'quality-check', label: 'Quality Check', icon: '✓' },
    { value: 'packaging', label: 'Packaging', icon: '📦' },
    { value: 'shipped', label: 'Shipped', icon: '🚚' },
    { value: 'received', label: 'Received', icon: '📥' },
    { value: 'inspection', label: 'Inspection', icon: '🔍' },
    { value: 'storage', label: 'Storage', icon: '🏭' },
    { value: 'custom', label: 'Custom', icon: '⚙️' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8 md:py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-lg rounded-full border border-white/20 mb-4">
              <Sparkles className="w-4 h-4 text-yellow-400" />
              <span className="text-sm font-medium text-white">Supply Chain Management</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
              Record New <span className="bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">Journey Step</span>
            </h1>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Track and verify every milestone in your product&apos;s supply chain with blockchain-powered transparency
            </p>
          </div>

          <div className="space-y-6">
            <div className="group bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-8 hover:bg-white/10 transition-all duration-300 shadow-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center font-bold text-white shadow-lg">
                  1
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                    <Shield className="w-6 h-6" />
                    Verify Ownership
                  </h2>
                  <p className="text-white/60 text-sm">Confirm your token ownership to proceed</p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <div className="flex-1 relative">
                  <input
                    type="number"
                    value={tokenId}
                    onChange={(e) => setTokenId(e.target.value)}
                    placeholder="Enter Token ID (e.g., 0, 1, 2...)"
                    disabled={verified}
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all disabled:opacity-50"
                  />
                  <Package className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                </div>
                <button
                  onClick={handleVerifyOwnership}
                  disabled={checking || verified}
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold rounded-2xl transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-2"
                >
                  {checking ? (
                    <Loader2 className="animate-spin w-5 h-5" />
                  ) : verified ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      Verified
                    </>
                  ) : (
                    <>
                      Verify
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>
              </div>

              {verified && (
                <div className="mt-6 flex items-center gap-3 p-4 bg-green-500/10 border border-green-500/30 rounded-2xl">
                  <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <p className="text-green-400 font-semibold">Ownership Confirmed</p>
                    <p className="text-white/60 text-sm">You own Token #{tokenId}</p>
                  </div>
                </div>
              )}

              {!isConnected && (
                <div className="mt-6 p-6 bg-orange-500/10 border border-orange-500/30 rounded-2xl">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <AlertCircle className="w-6 h-6 text-orange-400" />
                    </div>
                    <div className="flex-1">
                      <p className="text-white font-semibold mb-1">Wallet Connection Required</p>
                      <p className="text-white/60 text-sm mb-4">Connect your wallet to verify token ownership and continue</p>
                      <button 
                        onClick={connect} 
                        className="px-6 py-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold rounded-xl hover:shadow-lg transition-all"
                      >
                        Connect Wallet
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {error && (
              <div className="bg-red-500/10 backdrop-blur-xl border border-red-500/30 rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <AlertCircle className="w-6 h-6 text-red-400" />
                  </div>
                  <div>
                    <p className="text-red-400 font-semibold mb-1">Verification Failed</p>
                    <p className="text-white/80 text-sm">{error}</p>
                  </div>
                </div>
              </div>
            )}

            {success && (
              <div className="bg-green-500/10 backdrop-blur-xl border border-green-500/30 rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-7 h-7 text-green-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-white font-bold text-xl mb-2">Step Recorded Successfully!</p>
                    <p className="text-white/70 mb-4">Your update has been permanently recorded on the blockchain</p>
                    <a 
                      href={`/view/${tokenId}`}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-xl hover:shadow-lg transition-all"
                    >
                      View Timeline
                      <ArrowRight className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            )}

            {status && (
              <div className="bg-purple-500/10 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-6">
                <div className="flex items-center gap-4">
                  <Loader2 className="animate-spin w-6 h-6 text-purple-400" />
                  <p className="text-white font-medium">{status}</p>
                </div>
              </div>
            )}

            {verified && (
              <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-8 space-y-8 shadow-2xl">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center font-bold text-white shadow-lg">
                    2
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                      <FileText className="w-6 h-6" />
                      Add Step Details
                    </h2>
                    <p className="text-white/60 text-sm">Provide comprehensive information about this milestone</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="block text-sm font-semibold text-white/90 flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    Step Type *
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {stepTypes.map((type) => (
                      <button
                        key={type.value}
                        type="button"
                        onClick={() => setStepData({...stepData, stepType: type.value})}
                        className={`p-4 rounded-2xl border-2 transition-all text-center ${
                          stepData.stepType === type.value
                            ? 'bg-purple-500/20 border-purple-500 shadow-lg scale-105'
                            : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                        }`}
                      >
                        <div className="text-2xl mb-2">{type.icon}</div>
                        <div className="text-xs font-medium text-white">{type.label}</div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="block text-sm font-semibold text-white/90">
                    Description *
                  </label>
                  <textarea
                    value={stepData.description}
                    onChange={(e) => setStepData({...stepData, description: e.target.value})}
                    placeholder="Provide detailed information about this step in the supply chain..."
                    rows={4}
                    required
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
                  />
                </div>

                <div className="space-y-3">
                  <label className="block text-sm font-semibold text-white/90 flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    Location *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={stepData.location}
                      onChange={(e) => setStepData({...stepData, location: e.target.value})}
                      placeholder="e.g., Mumbai Warehouse, Delhi Distribution Center"
                      required
                      className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    />
                    <MapPin className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="block text-sm font-semibold text-white/90">
                    Additional Notes (Optional)
                  </label>
                  <textarea
                    value={stepData.notes}
                    onChange={(e) => setStepData({...stepData, notes: e.target.value})}
                    placeholder="Any additional information or special remarks..."
                    rows={3}
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
                  />
                </div>

                <div className="space-y-3">
                  <label className="block text-sm font-semibold text-white/90 flex items-center gap-2">
                    <Camera className="w-4 h-4" />
                    Supporting Photos (Optional)
                  </label>
                  <label className="block cursor-pointer group">
                    <div className="border-2 border-dashed border-white/20 rounded-2xl p-8 text-center hover:border-purple-500 hover:bg-white/5 transition-all">
                      <Upload className="w-12 h-12 mx-auto mb-3 text-purple-400 group-hover:scale-110 transition-transform" />
                      <p className="text-white/80 font-medium mb-1">Click to upload photos</p>
                      <p className="text-xs text-white/50">Multiple files supported &bull; PNG, JPG, JPEG</p>
                      <input
                        type="file"
                        accept="image/*"
                        multiple
                        onChange={handlePhotoChange}
                        className="hidden"
                      />
                    </div>
                  </label>

                  {photoPreviews.length > 0 && (
                    <div className="grid grid-cols-3 md:grid-cols-4 gap-4 mt-4">
                      {photoPreviews.map((preview, index) => (
                        <div key={index} className="relative group">
                          <img
                            src={preview}
                            alt={`Preview ${index + 1}`}
                            className="w-full h-32 object-cover rounded-2xl border border-white/10"
                          />
                          <button
                            type="button"
                            onClick={() => removePhoto(index)}
                            className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:scale-110 shadow-lg"
                          >
                            <X className="w-5 h-5" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={loadingStep}
                  className="w-full py-5 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 text-white font-bold text-lg rounded-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-2xl hover:shadow-purple-500/50 hover:scale-105 flex items-center justify-center gap-3"
                >
                  {loadingStep ? (
                    <>
                      <Loader2 className="animate-spin w-6 h-6" />
                      {status || 'Recording...'}
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-6 h-6" />
                      Record Step on Blockchain
                      <ArrowRight className="w-6 h-6" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
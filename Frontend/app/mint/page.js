// 'use client';

// import { useState } from 'react';
// import { useWallet } from '@/hooks/usewallet';
// import { useContract } from '@/hooks/usecontract';
// import { uploadFile, uploadJSON } from '@/lib/ipfs';
// import { Upload, Loader2, CheckCircle, AlertCircle, Image as ImageIcon } from 'lucide-react';
// import Image from 'next/image';
// // ...existing code...

// export default function MintPage() {
//   const { account, isConnected, connect } = useWallet();
//   const { contractWithSigner } = useContract();
  
//   const [formData, setFormData] = useState({
//     name: '',
//     description: '',
//     origin: '',
//     material: '',
//     quantity: '',
//     category: 'textiles',
//   });
  
//   const [imageFile, setImageFile] = useState(null);
//   const [imagePreview, setImagePreview] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [status, setStatus] = useState('');
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState(false);
//   const [tokenId, setTokenId] = useState(null);

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setImageFile(file);
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setImagePreview(reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     if (!isConnected) {
//       try {
//         await connect();
//       } catch (err) {
//         setError('Please connect your wallet first');
//         return;
//       }
//     }

//     if (!contractWithSigner) {
//       setError('Contract not loaded. Please refresh the page.');
//       return;
//     }

//     if (!imageFile) {
//       setError('Please select an image');
//       return;
//     }

//     setLoading(true);
//     setError('');
//     setSuccess(false);
//     setStatus('');

//     try {
//       // Step 1: Upload image to IPFS
//       setStatus('📤 Uploading image to IPFS...');
//       const imageUri = await uploadFile(imageFile);
//       console.log('Image uploaded:', imageUri);

//       // Step 2: Create metadata
//       const metadata = {
//         name: formData.name,
//         description: formData.description,
//         image: imageUri,
//         attributes: [
//           { trait_type: 'Origin', value: formData.origin },
//           { trait_type: 'Material', value: formData.material },
//           { trait_type: 'Category', value: formData.category },
//           { trait_type: 'Quantity', value: formData.quantity },
//           { trait_type: 'Creator', value: account },
//           { trait_type: 'Production Date', value: new Date().toISOString().split('T')[0] },
//         ],
//       };

//       // Step 3: Upload metadata to IPFS
//       setStatus('📤 Uploading metadata to IPFS...');
//       const metadataUri = await uploadJSON(metadata);
//       console.log('Metadata uploaded:', metadataUri);

//       // Step 4: Mint NFT
//       setStatus('⛓️ Minting NFT on blockchain...');
//       const tx = await contractWithSigner.mintBatch(account, metadataUri);
//       setStatus('⏳ Waiting for confirmation...');
//       const receipt = await tx.wait();
      
//       // Get token ID from Transfer event
//       const transferEvent = receipt.logs.find(
//         log => log.topics[0] === '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef'
//       );
//       const newTokenId = parseInt(transferEvent.topics[3], 16);
      
//       setTokenId(newTokenId);
//       setSuccess(true);
//       setStatus('');
      
//       // Reset form
//       setFormData({
//         name: '',
//         description: '',
//         origin: '',
//         material: '',
//         quantity: '',
//         category: 'textiles',
//       });
//       setImageFile(null);
//       setImagePreview(null);
      
//     } catch (err) {
//       console.error('Error minting:', err);
//       setError(err.message || 'Failed to mint batch. Please try again.');
//       setStatus('');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="container mx-auto px-4 py-12">
//       <div className="max-w-2xl mx-auto">
//         <div className="text-center mb-8">
//           <h1 className="text-4xl md:text-5xl font-bold mb-4">
//             🎨 Mint New Batch
//           </h1>
//           <p className="text-xl text-white/70">
//             Create a new batch NFT with product details and images
//           </p>
//         </div>

//         {!isConnected && (
//           <div className="glass p-6 mb-6 border-primary/50">
//             <div className="flex items-center gap-3">
//               <AlertCircle className="text-primary" />
//               <div>
//                 <p className="font-medium">Wallet Not Connected</p>
//                 <p className="text-sm text-white/60">Please connect your wallet to mint batches</p>
//               </div>
//             </div>
//             <button onClick={connect} className="btn-primary w-full mt-4">
//               Connect Wallet
//             </button>
//           </div>
//         )}

//         {success && (
//           <div className="glass p-6 mb-6 border-primary/50 bg-primary/10">
//             <div className="flex items-start gap-3">
//               <CheckCircle className="text-primary flex-shrink-0 mt-1" />
//               <div className="flex-1">
//                 <p className="font-bold text-lg mb-2">✅ Batch Minted Successfully!</p>
//                 <p className="text-sm text-white/80 mb-3">Token ID: #{tokenId}</p>
//                 <div className="flex gap-2">
//                   <a 
//                     href={`/view/${tokenId}`}
//                     className="btn-primary text-sm"
//                   >
//                     View Batch
//                   </a>
//                   <a 
//                     href={`https://sepolia.etherscan.io/token/${process.env.NEXT_PUBLIC_CONTRACT_ADDRESS}?a=${tokenId}`}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="btn-secondary text-sm"
//                   >
//                     View on Etherscan
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}

//         {error && (
//           <div className="glass p-4 mb-6 border-red-500/50 bg-red-500/10">
//             <div className="flex items-start gap-3">
//               <AlertCircle className="text-red-500 flex-shrink-0" size={20} />
//               <p className="text-sm text-red-200">{error}</p>
//             </div>
//           </div>
//         )}

//         {status && (
//           <div className="glass p-4 mb-6 border-primary/50">
//             <div className="flex items-center gap-3">
//               <Loader2 className="animate-spin text-primary" size={20} />
//               <p className="text-sm">{status}</p>
//             </div>
//           </div>
//         )}

//         <form onSubmit={handleSubmit} className="glass p-8 space-y-6">
//           {/* Image Upload */}
//           <div>
//             <label className="block text-sm font-medium mb-2">Product Images *</label>
//             <div className="border-2 border-dashed border-primary/30 rounded-lg p-8 text-center hover:border-primary/50 transition-colors">
//               {imagePreview ? (
//                 <div className="space-y-4">
//                   <Image
//                     src={imagePreview}
//                     alt="Preview"
//                     width={600}
//                     height={384}
//                     unoptimized
//                     className="mx-auto rounded-lg object-contain max-h-64"
//                   />
//                   <button
//                     type="button"
//                     onClick={() => {
//                       setImageFile(null);
//                       setImagePreview(null);
//                     }}
//                     className="btn-secondary text-sm"
//                   >
//                     Change Image
//                   </button>
//                 </div>
//               ) : (
//                 <label className="cursor-pointer">
//                   <ImageIcon className="w-12 h-12 mx-auto mb-3 text-primary" />
//                   <p className="text-white/60 mb-2">Click to upload or drag and drop</p>
//                   <p className="text-sm text-white/40">PNG, JPG, GIF up to 10MB</p>
//                   <input
//                     type="file"
//                     accept="image/*"
//                     onChange={handleImageChange}
//                     className="hidden"
//                     required
//                   />
//                 </label>
//               )}
//             </div>
//           </div>

//           {/* Batch Name */}
//           <div>
//             <label className="block text-sm font-medium mb-2">Batch Name *</label>
//             <input
//               type="text"
//               value={formData.name}
//               onChange={(e) => setFormData({...formData, name: e.target.value})}
//               placeholder="e.g., Handwoven Silk Scarves - Batch #42"
//               required
//             />
//           </div>

//           {/* Description */}
//           <div>
//             <label className="block text-sm font-medium mb-2">Description *</label>
//             <textarea
//               value={formData.description}
//               onChange={(e) => setFormData({...formData, description: e.target.value})}
//               placeholder="Describe your product, craftsmanship, and story..."
//               rows={4}
//               required
//             />
//           </div>

//           {/* Category */}
//           <div>
//             <label className="block text-sm font-medium mb-2">Category *</label>
//             <select
//               value={formData.category}
//               onChange={(e) => setFormData({...formData, category: e.target.value})}
//               required
//             >
//               <option value="textiles">Textiles</option>
//               <option value="pottery">Pottery</option>
//               <option value="jewelry">Jewelry</option>
//               <option value="woodwork">Woodwork</option>
//               <option value="metalwork">Metalwork</option>
//               <option value="other">Other</option>
//             </select>
//           </div>

//           {/* Two Column Layout */}
//           <div className="grid md:grid-cols-2 gap-6">
//             {/* Origin */}
//             <div>
//               <label className="block text-sm font-medium mb-2">Origin Location *</label>
//               <input
//                 type="text"
//                 value={formData.origin}
//                 onChange={(e) => setFormData({...formData, origin: e.target.value})}
//                 placeholder="e.g., Varanasi, India"
//                 required
//               />
//             </div>

//             {/* Material */}
//             <div>
//               <label className="block text-sm font-medium mb-2">Materials Used *</label>
//               <input
//                 type="text"
//                 value={formData.material}
//                 onChange={(e) => setFormData({...formData, material: e.target.value})}
//                 placeholder="e.g., Pure Silk, Cotton"
//                 required
//               />
//             </div>
//           </div>

//           {/* Quantity */}
//           <div>
//             <label className="block text-sm font-medium mb-2">Quantity *</label>
//             <input
//               type="number"
//               value={formData.quantity}
//               onChange={(e) => setFormData({...formData, quantity: e.target.value})}
//               placeholder="e.g., 50"
//               min="1"
//               required
//             />
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             disabled={loading || !isConnected}
//             className="btn-primary w-full py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
//           >
//             {loading ? (
//               <>
//                 <Loader2 className="animate-spin" size={20} />
//                 {status || 'Minting...'}
//               </>
//             ) : (
//               <>
//                 <Upload size={20} />
//                 Mint Batch
//               </>
//             )}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// 'use client';

// import { useState } from 'react';
// import { useWallet } from '@/hooks/usewallet';
// import { useContract } from '@/hooks/usecontract';
// import { uploadFile, uploadJSON } from '@/lib/ipfs';
// import { Upload, Loader2, CheckCircle, AlertCircle, Image as ImageIcon, XCircle } from 'lucide-react';
// import Image from 'next/image';

// export default function MintPage() {
//   const { account, isConnected, connect } = useWallet();
//   const { contractWithSigner } = useContract();

//   const [formData, setFormData] = useState({
//     name: '',
//     description: '',
//     origin: '',
//     material: '',
//     quantity: '',
//     category: 'textiles',
//   });

//   const [imageFile, setImageFile] = useState(null);
//   const [imagePreview, setImagePreview] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [status, setStatus] = useState('');
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState(false);
//   const [tokenId, setTokenId] = useState(null);

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setImageFile(file);
//       const reader = new FileReader();
//       reader.onloadend = () => setImagePreview(reader.result);
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!isConnected) {
//       try {
//         await connect();
//       } catch (err) {
//         setError('Please connect your wallet first');
//         return;
//       }
//     }

//     if (!contractWithSigner) {
//       setError('Contract not loaded. Please refresh the page.');
//       return;
//     }

//     if (!imageFile) {
//       setError('Please select an image');
//       return;
//     }

//     setLoading(true);
//     setError('');
//     setSuccess(false);
//     setStatus('');

//     try {
//       setStatus('📤 Uploading image to IPFS...');
//       const imageUri = await uploadFile(imageFile);

//       const metadata = {
//         name: formData.name,
//         description: formData.description,
//         image: imageUri,
//         attributes: [
//           { trait_type: 'Origin', value: formData.origin },
//           { trait_type: 'Material', value: formData.material },
//           { trait_type: 'Category', value: formData.category },
//           { trait_type: 'Quantity', value: formData.quantity },
//           { trait_type: 'Creator', value: account },
//           { trait_type: 'Production Date', value: new Date().toISOString().split('T')[0] },
//         ],
//       };

//       setStatus('📤 Uploading metadata to IPFS...');
//       const metadataUri = await uploadJSON(metadata);

//       setStatus('⛓️ Minting NFT on blockchain...');
//       const tx = await contractWithSigner.mintBatch(account, metadataUri);
//       setStatus('⏳ Waiting for confirmation...');
//       const receipt = await tx.wait();

//       const transferEvent = receipt.logs.find(
//         log => log.topics[0] === '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef'
//       );
//       const newTokenId = parseInt(transferEvent.topics[3], 16);

//       setTokenId(newTokenId);
//       setSuccess(true);
//       setStatus('');

//       setFormData({
//         name: '',
//         description: '',
//         origin: '',
//         material: '',
//         quantity: '',
//         category: 'textiles',
//       });
//       setImageFile(null);
//       setImagePreview(null);

//     } catch (err) {
//       console.error('Error minting:', err);
//       setError(err.message || 'Failed to mint batch. Please try again.');
//       setStatus('');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="container mx-auto px-4 py-12">
//       <div className="max-w-3xl mx-auto">
//         <div className="text-center mb-10">
//           <h1 className="text-5xl font-extrabold mb-3 text-gradient bg-clip-text text-transparent from-purple-400 to-pink-500">
//             🎨 Mint Your NFT Batch
//           </h1>
//           <p className="text-lg text-white/70">
//             Showcase your products with beautiful metadata and images.
//           </p>
//         </div>

//         {/* Wallet Not Connected */}
//         {!isConnected && (
//           <div className="glass p-6 mb-6 border-primary/40 hover:border-primary/70 transition-all rounded-xl shadow-lg">
//             <div className="flex items-center gap-4">
//               <AlertCircle className="text-yellow-400" size={28} />
//               <div>
//                 <p className="font-semibold text-white">Wallet Not Connected</p>
//                 <p className="text-sm text-white/60">Connect your wallet to mint batches</p>
//               </div>
//             </div>
//             <button
//               onClick={connect}
//               className="mt-4 w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 text-white font-semibold py-3 rounded-xl shadow-lg transition-all"
//             >
//               Connect Wallet
//             </button>
//           </div>
//         )}

//         {/* Success Message */}
//         {success && (
//           <div className="glass p-6 mb-6 border-green-400/50 bg-green-500/10 rounded-xl shadow-lg">
//             <div className="flex items-start gap-3">
//               <CheckCircle className="text-green-400 mt-1" size={28} />
//               <div className="flex-1">
//                 <p className="font-bold text-lg mb-2">✅ Batch Minted Successfully!</p>
//                 <p className="text-sm text-white/80 mb-3">Token ID: #{tokenId}</p>
//                 <div className="flex gap-2">
//                   <a
//                     href={`/view/${tokenId}`}
//                     className="btn-primary text-sm px-4 py-2 rounded-lg shadow hover:shadow-lg transition"
//                   >
//                     View Batch
//                   </a>
//                   <a
//                     href={`https://sepolia.etherscan.io/token/${process.env.NEXT_PUBLIC_CONTRACT_ADDRESS}?a=${tokenId}`}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="btn-secondary text-sm px-4 py-2 rounded-lg shadow hover:shadow-lg transition"
//                   >
//                     View on Etherscan
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Error Message */}
//         {error && (
//           <div className="glass p-4 mb-6 border-red-500/50 bg-red-500/10 rounded-xl shadow-lg">
//             <div className="flex items-start gap-3">
//               <XCircle className="text-red-500" size={22} />
//               <p className="text-sm text-red-200">{error}</p>
//             </div>
//           </div>
//         )}

//         {/* Status Message */}
//         {status && (
//           <div className="glass p-4 mb-6 border-primary/50 rounded-xl shadow-lg">
//             <div className="flex items-center gap-3">
//               <Loader2 className="animate-spin text-primary" size={22} />
//               <p className="text-sm">{status}</p>
//             </div>
//           </div>
//         )}

//         {/* Form */}
//         <form onSubmit={handleSubmit} className="glass p-8 space-y-6 rounded-2xl shadow-xl">
          
//           {/* Image Upload */}
//           <div>
//             <label className="block text-sm font-medium mb-2">Product Image *</label>
//             <div className="border-2 border-dashed border-primary/30 rounded-xl p-6 text-center hover:border-primary/50 transition-all cursor-pointer relative">
//               {imagePreview ? (
//                 <div className="space-y-4">
//                   <Image
//                     src={imagePreview}
//                     alt="Preview"
//                     width={600}
//                     height={384}
//                     unoptimized
//                     className="mx-auto rounded-xl object-contain max-h-64"
//                   />
//                   <button
//                     type="button"
//                     onClick={() => { setImageFile(null); setImagePreview(null); }}
//                     className="btn-secondary text-sm px-4 py-2 rounded-lg shadow hover:shadow-lg transition"
//                   >
//                     Change Image
//                   </button>
//                 </div>
//               ) : (
//                 <>
//                   <ImageIcon className="w-14 h-14 mx-auto mb-3 text-primary transition-transform hover:scale-110" />
//                   <p className="text-white/60 mb-2">Click or Drag & Drop</p>
//                   <p className="text-sm text-white/40">PNG, JPG, GIF up to 10MB</p>
//                   <input
//                     type="file"
//                     accept="image/*"
//                     onChange={handleImageChange}
//                     className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
//                     required
//                   />
//                 </>
//               )}
//             </div>
//           </div>

//           {/* Batch Name & Description */}
//           <div className="grid md:grid-cols-2 gap-6">
//             <div>
//               <label className="block text-sm font-medium mb-2">Batch Name *</label>
//               <input
//                 type="text"
//                 value={formData.name}
//                 onChange={(e) => setFormData({...formData, name: e.target.value})}
//                 placeholder="Handwoven Silk Scarves - Batch #42"
//                 className="input-glass"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium mb-2">Quantity *</label>
//               <input
//                 type="number"
//                 value={formData.quantity}
//                 onChange={(e) => setFormData({...formData, quantity: e.target.value})}
//                 placeholder="50"
//                 min="1"
//                 className="input-glass"
//                 required
//               />
//             </div>
//           </div>

//           <div>
//             <label className="block text-sm font-medium mb-2">Description *</label>
//             <textarea
//               value={formData.description}
//               onChange={(e) => setFormData({...formData, description: e.target.value})}
//               placeholder="Describe your product, craftsmanship, and story..."
//               rows={4}
//               className="input-glass"
//               required
//             />
//           </div>

//           {/* Category, Origin, Material */}
//           <div className="grid md:grid-cols-3 gap-6">
//             <div>
//               <label className="block text-sm font-medium mb-2">Category *</label>
//               <select
//                 value={formData.category}
//                 onChange={(e) => setFormData({...formData, category: e.target.value})}
//                 className="input-glass"
//                 required
//               >
//                 <option value="textiles">Textiles</option>
//                 <option value="pottery">Pottery</option>
//                 <option value="jewelry">Jewelry</option>
//                 <option value="woodwork">Woodwork</option>
//                 <option value="metalwork">Metalwork</option>
//                 <option value="other">Other</option>
//               </select>
//             </div>

//             <div>
//               <label className="block text-sm font-medium mb-2">Origin *</label>
//               <input
//                 type="text"
//                 value={formData.origin}
//                 onChange={(e) => setFormData({...formData, origin: e.target.value})}
//                 placeholder="Varanasi, India"
//                 className="input-glass"
//                 required
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium mb-2">Materials *</label>
//               <input
//                 type="text"
//                 value={formData.material}
//                 onChange={(e) => setFormData({...formData, material: e.target.value})}
//                 placeholder="Pure Silk, Cotton"
//                 className="input-glass"
//                 required
//               />
//             </div>
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             disabled={loading || !isConnected}
//             className="w-full py-4 text-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 text-white font-bold rounded-xl shadow-lg flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
//           >
//             {loading ? (
//               <>
//                 <Loader2 className="animate-spin" size={22} />
//                 {status || 'Minting...'}
//               </>
//             ) : (
//               <>
//                 <Upload size={22} />
//                 Mint Batch
//               </>
//             )}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

'use client';

import { useState } from 'react';
import { useWallet } from '@/hooks/usewallet';
import { useContract } from '@/hooks/usecontract';
import { uploadFile, uploadJSON } from '@/lib/ipfs';
import { Upload, Loader2, CheckCircle, AlertCircle, Image as ImageIcon, XCircle, Sparkles, Package, MapPin, Layers } from 'lucide-react';
import Image from 'next/image';

export default function MintPage() {
  const { account, isConnected, connect } = useWallet();
  const { contractWithSigner } = useContract();

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    origin: '',
    material: '',
    quantity: '',
    category: 'textiles',
  });

  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [tokenId, setTokenId] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isConnected) {
      try {
        await connect();
      } catch (err) {
        setError('Please connect your wallet first');
        return;
      }
    }

    if (!contractWithSigner) {
      setError('Contract not loaded. Please refresh the page.');
      return;
    }

    if (!imageFile) {
      setError('Please select an image');
      return;
    }

    setLoading(true);
    setError('');
    setSuccess(false);
    setStatus('');

    try {
      setStatus('📤 Uploading image to IPFS...');
      const imageUri = await uploadFile(imageFile);

      const metadata = {
        name: formData.name,
        description: formData.description,
        image: imageUri,
        attributes: [
          { trait_type: 'Origin', value: formData.origin },
          { trait_type: 'Material', value: formData.material },
          { trait_type: 'Category', value: formData.category },
          { trait_type: 'Quantity', value: formData.quantity },
          { trait_type: 'Creator', value: account },
          { trait_type: 'Production Date', value: new Date().toISOString().split('T')[0] },
        ],
      };

      setStatus('📤 Uploading metadata to IPFS...');
      const metadataUri = await uploadJSON(metadata);

      setStatus('⛓️ Minting NFT on blockchain...');
      const tx = await contractWithSigner.mintBatch(account, metadataUri);
      setStatus('⏳ Waiting for confirmation...');
      const receipt = await tx.wait();

      const transferEvent = receipt.logs.find(
        log => log.topics[0] === '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef'
      );
      const newTokenId = parseInt(transferEvent.topics[3], 16);

      setTokenId(newTokenId);
      setSuccess(true);
      setStatus('');

      setFormData({
        name: '',
        description: '',
        origin: '',
        material: '',
        quantity: '',
        category: 'textiles',
      });
      setImageFile(null);
      setImagePreview(null);

    } catch (err) {
      console.error('Error minting:', err);
      setError(err.message || 'Failed to mint batch. Please try again.');
      setStatus('');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16 relative">
          <div className="absolute inset-0 blur-3xl opacity-30 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
          <div className="relative">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full mb-6 border border-white/20">
              <Sparkles className="w-4 h-4 text-yellow-400" />
              <span className="text-sm font-medium text-white/90">Advanced NFT Minting Platform</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-black mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Create Digital Assets
            </h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Transform your products into blockchain-verified digital certificates with immutable provenance tracking
            </p>
          </div>
        </div>

        {/* Wallet Connection Alert */}
        {!isConnected && (
          <div className="max-w-2xl mx-auto mb-8">
            <div className="bg-gradient-to-r from-amber-500/20 to-orange-500/20 backdrop-blur-xl border border-amber-500/30 rounded-2xl p-6 shadow-2xl">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-amber-500/20 rounded-xl">
                  <AlertCircle className="text-amber-400 w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-white text-lg mb-1">Authentication Required</h3>
                  <p className="text-white/70 text-sm mb-4">Please connect your Web3 wallet to access minting functionality</p>
                  <button
                    onClick={connect}
                    className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Connect Wallet
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Success Notification */}
        {success && (
          <div className="max-w-2xl mx-auto mb-8">
            <div className="bg-gradient-to-r from-emerald-500/20 to-green-500/20 backdrop-blur-xl border border-emerald-500/30 rounded-2xl p-6 shadow-2xl">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-500/20 rounded-xl">
                  <CheckCircle className="text-pink-400 w-7 h-7" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-white text-xl mb-2">Minting Successful! 🎉</h3>
                  <p className="text-white/70 mb-1">Your NFT has been created on the blockchain</p>
                  <p className="text-emerald-400 font-mono text-sm mb-4">Token ID: #{tokenId}</p>
                  <div className="flex flex-wrap gap-3">
                  
                    <a
                      href={`https://sepolia.etherscan.io/token/${process.env.NEXT_PUBLIC_CONTRACT_ADDRESS}?a=${tokenId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold py-2 px-5 rounded-lg backdrop-blur-sm transition-all duration-300 border border-white/20"
                    >
                      Etherscan ↗
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Error Alert */}
        {error && (
          <div className="max-w-2xl mx-auto mb-8">
            <div className="bg-gradient-to-r from-red-500/20 to-rose-500/20 backdrop-blur-xl border border-red-500/30 rounded-2xl p-5 shadow-2xl">
              <div className="flex items-start gap-3">
                <XCircle className="text-red-400 w-6 h-6 flex-shrink-0 mt-0.5" />
                <p className="text-white/90 text-sm">{error}</p>
              </div>
            </div>
          </div>
        )}

        {/* Status Loader */}
        {status && (
          <div className="max-w-2xl mx-auto mb-8">
            <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-xl border border-blue-500/30 rounded-2xl p-5 shadow-2xl">
              <div className="flex items-center gap-3">
                <Loader2 className="animate-spin text-blue-400 w-6 h-6" />
                <p className="text-white/90 font-medium">{status}</p>
              </div>
            </div>
          </div>
        )}

        {/* Main Form Container */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          
          {/* Left Column - Image Upload */}
          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-purple-500/20 rounded-lg">
                  <ImageIcon className="w-5 h-5 text-purple-400" />
                </div>
                <h2 className="text-2xl font-bold text-white">Asset Preview</h2>
              </div>
              
              <div className="relative">
                {imagePreview ? (
                  <div className="space-y-5">
                    <div className="relative rounded-2xl overflow-hidden border-2 border-purple-500/30 shadow-xl">
                      <Image
                        src={imagePreview}
                        alt="Preview"
                        width={600}
                        height={600}
                        unoptimized
                        className="w-full h-auto object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    </div>
                    <button
                      type="button"
                      onClick={() => { setImageFile(null); setImagePreview(null); }}
                      className="w-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300"
                    >
                      Replace Image
                    </button>
                  </div>
                ) : (
                  <label className="block cursor-pointer">
                    <div className="border-2 border-dashed border-purple-500/30 rounded-2xl p-12 text-center hover:border-purple-500/60 hover:bg-purple-500/5 transition-all duration-300 relative overflow-hidden group">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative">
                        <div className="w-20 h-20 mx-auto mb-4 bg-purple-500/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <ImageIcon className="w-10 h-10 text-purple-400" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Upload Product Image</h3>
                        <p className="text-white/60 mb-1">Click to browse or drag and drop</p>
                        <p className="text-sm text-white/40">Supports: PNG, JPG, GIF (Max 10MB)</p>
                      </div>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        required
                      />
                    </div>
                  </label>
                )}
              </div>
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-xl border border-blue-500/20 rounded-2xl p-5">
                <Package className="w-6 h-6 text-blue-400 mb-2" />
                <p className="text-xs text-white/60 mb-1">NFT Standard</p>
                <p className="text-white font-bold">ERC-721</p>
              </div>
              <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-5">
                <Layers className="w-6 h-6 text-purple-400 mb-2" />
                <p className="text-xs text-white/60 mb-1">Storage</p>
                <p className="text-white font-bold">IPFS</p>
              </div>
            </div>
          </div>

          {/* Right Column - Form Fields */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
              <h2 className="text-2xl font-bold text-white mb-6">Asset Information</h2>
              
              {/* Batch Name */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-white/80 mb-3">Batch Name *</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="e.g., Premium Silk Collection - Batch 2024"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/40 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all duration-300"
                  required
                />
              </div>

              {/* Description */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-white/80 mb-3">Description *</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  placeholder="Provide detailed information about your product's craftsmanship, heritage, and unique qualities..."
                  rows={5}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/40 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all duration-300 resize-none"
                  required
                />
              </div>

              {/* Category & Quantity */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-semibold text-white/80 mb-3">Category *</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({...formData, category: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all duration-300"
                    required
                  >
                    <option value="textiles">Textiles</option>
                    <option value="pottery">Pottery</option>
                    <option value="jewelry">Jewelry</option>
                    <option value="woodwork">Woodwork</option>
                    <option value="metalwork">Metalwork</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-white/80 mb-3">Quantity *</label>
                  <input
                    type="number"
                    value={formData.quantity}
                    onChange={(e) => setFormData({...formData, quantity: e.target.value})}
                    placeholder="100"
                    min="1"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/40 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all duration-300"
                    required
                  />
                </div>
              </div>

              {/* Origin & Materials */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-semibold text-white/80 mb-3">Origin *</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/40" />
                    <input
                      type="text"
                      value={formData.origin}
                      onChange={(e) => setFormData({...formData, origin: e.target.value})}
                      placeholder="e.g., Jaipur, India"
                      className="w-full bg-white/5 border border-white/10 rounded-xl pl-11 pr-4 py-3.5 text-white placeholder-white/40 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all duration-300"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-white/80 mb-3">Materials *</label>
                  <input
                    type="text"
                    value={formData.material}
                    onChange={(e) => setFormData({...formData, material: e.target.value})}
                    placeholder="e.g., Pure Silk, Cotton"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/40 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all duration-300"
                    required
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading || !isConnected}
                className="w-full relative overflow-hidden bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 hover:from-purple-700 hover:via-pink-700 hover:to-blue-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 shadow-lg hover:shadow-2xl group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <div className="relative flex items-center justify-center gap-3">
                  {loading ? (
                    <>
                      <Loader2 className="animate-spin w-6 h-6" />
                      <span className="text-lg">Processing...</span>
                    </>
                  ) : (
                    <>
                      <Upload className="w-6 h-6" />
                      <span className="text-lg">Mint NFT Batch</span>
                    </>
                  )}
                </div>
              </button>

              {isConnected && (
                <p className="text-center text-white/50 text-xs mt-4">
                  Connected: {account?.slice(0, 6)}...{account?.slice(-4)}
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
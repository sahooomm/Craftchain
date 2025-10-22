// 'use client';

// import { useState } from 'react';
// import { useContract } from '@/hooks/usecontract';
// import {
//   Search,
//   Loader2,
//   CheckCircle,
//   AlertCircle,
//   Clock,
//   MapPin,
//   Package,
//   User,
// } from 'lucide-react';

// export default function ViewPage() {
//   const { contract } = useContract();
//   const [tokenId, setTokenId] = useState('');
//   const [batchData, setBatchData] = useState(null);
//   const [history, setHistory] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   const fetchBatchData = async (id) => {
//     setLoading(true);
//     setError('');
//     try {
//       if (!contract) throw new Error('Contract not loaded. Please connect wallet.');

//       const tokenUri = await contract.tokenURI(id);
//       const ipfsHash = tokenUri.replace('ipfs://', '');
//       const response = await fetch(`https://gateway.pinata.cloud/ipfs/${ipfsHash}`);
//       if (!response.ok) throw new Error('Failed to fetch metadata.');
//       const metadata = await response.json();

//       setBatchData(metadata);
//       setHistory(metadata.history || []);
//     } catch (err) {
//       let msg = err.message;
//       if (msg.includes('nonexistent token')) msg = 'Token ID not found.';
//       else msg = 'An error occurred. Please try again.';
//       setError(msg);
//       setBatchData(null);
//       setHistory([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (tokenId) fetchBatchData(tokenId);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] text-white flex flex-col items-center px-4 py-8">
//       {/* Header */}
//       <header className="w-full max-w-5xl flex justify-between items-center mb-12 backdrop-blur-md bg-white/10 border border-white/10 rounded-2xl px-6 py-4 shadow-lg">
//         <h1 className="text-3xl font-bold tracking-wide bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
//           NFTMint Tracker
//         </h1>
//         <div className="flex items-center gap-3">
//           <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 shadow-lg"></div>
//         </div>
//       </header>

//       {/* Search Section */}
//       <div className="w-full max-w-3xl backdrop-blur-md bg-white/10 rounded-3xl border border-white/10 p-8 shadow-xl">
//         <h2 className="text-2xl font-bold text-center mb-3">Track Your Batch 🔍</h2>
//         <p className="text-center text-gray-300 mb-6">
//           Enter the <span className="font-semibold text-cyan-400">Token ID</span> to view its complete details.
//         </p>

//         <form onSubmit={handleSubmit} className="flex gap-3">
//           <input
//             type="number"
//             value={tokenId}
//             onChange={(e) => setTokenId(e.target.value)}
//             placeholder="Enter Token ID"
//             className="flex-1 px-4 py-3 rounded-xl bg-white/20 text-white placeholder-gray-300 border border-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-400"
//           />
//           <button
//             type="submit"
//             disabled={loading}
//             className="bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3 rounded-xl font-semibold flex items-center gap-2 hover:opacity-90 transition disabled:opacity-50"
//           >
//             {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Search size={18} />}
//             {loading ? 'Searching...' : 'Search'}
//           </button>
//         </form>
//       </div>

//       {/* Error */}
//       {error && (
//         <div className="mt-6 w-full max-w-3xl bg-red-500/20 border border-red-400/30 rounded-xl p-4 flex items-center gap-2">
//           <AlertCircle className="w-5 h-5 text-red-400" />
//           <p>{error}</p>
//         </div>
//       )}

//       {/* Batch Data */}
//       {batchData && (
//         <div className="mt-10 w-full max-w-5xl backdrop-blur-lg bg-white/10 rounded-3xl border border-white/10 shadow-xl p-8">
//           <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
//             <Package className="w-6 h-6 text-cyan-400" />
//             Batch Details
//           </h2>
//           <div className="grid md:grid-cols-2 gap-8">
//             <div>
//               <h3 className="text-xl font-semibold mb-2">{batchData.name}</h3>
//               <p className="text-gray-300 mb-4">{batchData.description}</p>
//               <div className="space-y-2 text-sm text-gray-200">
//                 {batchData.attributes?.map((attr, i) => (
//                   <p key={i}>
//                     <span className="text-cyan-400">{attr.trait_type}:</span> {attr.value}
//                   </p>
//                 ))}
//               </div>
//             </div>
//             {batchData.image && (
//               <div className="rounded-2xl overflow-hidden shadow-lg border border-white/10">
//                 <img
//                   src={`https://gateway.pinata.cloud/ipfs/${batchData.image.replace('ipfs://', '')}`}
//                   alt={batchData.name}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//             )}
//           </div>
//         </div>
//       )}

//       {/* History Section */}
//       {history.length > 0 && (
//         <div className="mt-10 w-full max-w-5xl backdrop-blur-lg bg-white/10 rounded-3xl border border-white/10 shadow-xl p-8">
//           <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
//             <Clock className="w-6 h-6 text-cyan-400" />
//             Batch History
//           </h2>
//           <div className="space-y-6">
//             {history.map((step, i) => (
//               <div
//                 key={i}
//                 className="bg-white/10 border border-white/10 rounded-2xl p-4 shadow-md hover:bg-white/20 transition"
//               >
//                 <div className="flex justify-between items-center mb-2">
//                   <div className="flex items-center gap-2">
//                     <CheckCircle className="text-green-400 w-5 h-5" />
//                     <span className="font-semibold text-lg">{step.stepType}</span>
//                   </div>
//                   <span className="text-gray-400 text-sm">
//                     {new Date(step.timestamp).toLocaleString()}
//                   </span>
//                 </div>
//                 <p className="text-gray-300 mb-3">{step.description}</p>
//                 <div className="grid sm:grid-cols-2 gap-3 text-sm text-gray-300">
//                   <div className="flex items-center gap-1">
//                     <MapPin className="w-4 h-4 text-cyan-400" /> {step.location}
//                   </div>
//                   <div className="flex items-center gap-1">
//                     <User className="w-4 h-4 text-cyan-400" /> {step.actor}
//                   </div>
//                 </div>
//                 {step.notes && <p className="mt-2 text-sm italic text-gray-400">“{step.notes}”</p>}
//                 {step.photos && step.photos.length > 0 && (
//                   <div className="flex mt-3 gap-2 overflow-x-auto">
//                     {step.photos.map((p, idx) => (
//                       <img
//                         key={idx}
//                         src={`https://gateway.pinata.cloud/ipfs/${p.replace('ipfs://', '')}`}
//                         alt={`Step ${i + 1} photo`}
//                         className="w-24 h-24 object-cover rounded-xl border border-white/10"
//                       />
//                     ))}
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// 'use client';

// import { useState } from 'react';
// import { useContract } from '@/hooks/usecontract';
// import {
//   Search,
//   Loader2,
//   CheckCircle,
//   AlertCircle,
//   Clock,
//   MapPin,
//   Package,
//   User,
//   Truck,
//   Box,
//   Eye,
//   Factory,
//   ShieldCheck,
//   Archive,
// } from 'lucide-react';

// export default function ViewPage() {
//   const { contract } = useContract();
//   const [tokenId, setTokenId] = useState('');
//   const [batchData, setBatchData] = useState(null);
//   const [history, setHistory] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   const fetchBatchData = async (id) => {
//     setLoading(true);
//     setError('');
//     try {
//       if (!contract) throw new Error('Contract not loaded. Please connect wallet.');

//       const tokenUri = await contract.tokenURI(id);
//       const ipfsHash = tokenUri.replace('ipfs://', '');
//       const response = await fetch(`https://gateway.pinata.cloud/ipfs/${ipfsHash}`);
//       if (!response.ok) throw new Error('Failed to fetch metadata.');
//       const metadata = await response.json();

//       setBatchData(metadata);
//       setHistory(metadata.history || []);
//     } catch (err) {
//       let msg = err.message;
//       if (msg.includes('nonexistent token')) msg = 'Token ID not found.';
//       else msg = 'An error occurred. Please try again.';
//       setError(msg);
//       setBatchData(null);
//       setHistory([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (tokenId) fetchBatchData(tokenId);
//   };

//   // Helper: Get last step (current location)
//   const currentStep = history.length > 0 ? history[history.length - 1] : null;

//   // Map icons for step types
//   const stepIcons = {
//     'Quality Check': <ShieldCheck className="text-green-400 w-6 h-6" />,
//     Packaging: <Box className="text-blue-400 w-6 h-6" />,
//     Shipped: <Truck className="text-cyan-400 w-6 h-6" />,
//     Received: <Archive className="text-purple-400 w-6 h-6" />,
//     Inspection: <Eye className="text-yellow-400 w-6 h-6" />,
//     Storage: <Factory className="text-pink-400 w-6 h-6" />,
//     Custom: <CheckCircle className="text-white w-6 h-6" />,
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] text-white flex flex-col items-center px-4 py-8">
//       {/* Header */}
//       <header className="w-full max-w-5xl flex justify-between items-center mb-12 backdrop-blur-md bg-white/10 border border-white/10 rounded-2xl px-6 py-4 shadow-lg">
//         <h1 className="text-3xl font-bold tracking-wide bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
//           NFTMint Tracker
//         </h1>
//         <div className="flex items-center gap-3">
//           <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 shadow-lg"></div>
//         </div>
//       </header>

//       {/* Search Section */}
//       <div className="w-full max-w-3xl backdrop-blur-md bg-white/10 rounded-3xl border border-white/10 p-8 shadow-xl">
//         <h2 className="text-2xl font-bold text-center mb-3">Track Your Batch 🔍</h2>
//         <p className="text-center text-gray-300 mb-6">
//           Enter the <span className="font-semibold text-cyan-400">Token ID</span> to view its journey.
//         </p>

//         <form onSubmit={handleSubmit} className="flex gap-3">
//           <input
//             type="number"
//             value={tokenId}
//             onChange={(e) => setTokenId(e.target.value)}
//             placeholder="Enter Token ID"
//             className="flex-1 px-4 py-3 rounded-xl bg-white/20 text-white placeholder-gray-300 border border-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-400"
//           />
//           <button
//             type="submit"
//             disabled={loading}
//             className="bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3 rounded-xl font-semibold flex items-center gap-2 hover:opacity-90 transition disabled:opacity-50"
//           >
//             {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Search size={18} />}
//             {loading ? 'Searching...' : 'Search'}
//           </button>
//         </form>
//       </div>

//       {/* Error */}
//       {error && (
//         <div className="mt-6 w-full max-w-3xl bg-red-500/20 border border-red-400/30 rounded-xl p-4 flex items-center gap-2">
//           <AlertCircle className="w-5 h-5 text-red-400" />
//           <p>{error}</p>
//         </div>
//       )}

//       {/* Batch Data */}
//       {batchData && (
//         <div className="mt-10 w-full max-w-5xl backdrop-blur-lg bg-white/10 rounded-3xl border border-white/10 shadow-xl p-8">
//           <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
//             <Package className="w-6 h-6 text-cyan-400" />
//             Batch Details
//           </h2>
//           <div className="grid md:grid-cols-2 gap-8">
//             <div>
//               <h3 className="text-xl font-semibold mb-2">{batchData.name}</h3>
//               <p className="text-gray-300 mb-4">{batchData.description}</p>
//               <div className="space-y-2 text-sm text-gray-200">
//                 {batchData.attributes?.map((attr, i) => (
//                   <p key={i}>
//                     <span className="text-cyan-400">{attr.trait_type}:</span> {attr.value}
//                   </p>
//                 ))}
//               </div>
//             </div>
//             {batchData.image && (
//               <div className="rounded-2xl overflow-hidden shadow-lg border border-white/10">
//                 <img
//                   src={`https://gateway.pinata.cloud/ipfs/${batchData.image.replace('ipfs://', '')}`}
//                   alt={batchData.name}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//             )}
//           </div>
//         </div>
//       )}

//       {/* ✅ Current Status Section */}
//       {currentStep && (
//         <div className="mt-10 w-full max-w-4xl backdrop-blur-lg bg-white/10 rounded-3xl border border-white/10 shadow-xl p-8">
//           <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
//             <Clock className="w-6 h-6 text-cyan-400" />
//             Current Batch Status
//           </h2>
//           <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
//             <div className="flex flex-col items-center sm:items-start gap-2">
//               <div className="flex items-center gap-3">
//                 {stepIcons[currentStep.stepType] || (
//                   <CheckCircle className="w-6 h-6 text-gray-300" />
//                 )}
//                 <span className="font-semibold text-xl">{currentStep.stepType}</span>
//               </div>
//               <p className="text-gray-300">{currentStep.description}</p>
//               <div className="text-sm text-gray-400 mt-3 space-y-1">
//                 <p>
//                   <MapPin className="inline w-4 h-4 text-cyan-400 mr-1" />
//                   {currentStep.location}
//                 </p>
//                 <p>
//                   <User className="inline w-4 h-4 text-cyan-400 mr-1" />
//                   {currentStep.actor}
//                 </p>
//                 <p>
//                   <Clock className="inline w-4 h-4 text-cyan-400 mr-1" />
//                   {new Date(currentStep.timestamp).toLocaleString()}
//                 </p>
//               </div>
//               {currentStep.notes && (
//                 <p className="mt-3 text-sm italic text-gray-400">“{currentStep.notes}”</p>
//               )}
//             </div>

//             {currentStep.photos && currentStep.photos.length > 0 && (
//               <div className="flex gap-2 overflow-x-auto sm:ml-auto">
//                 {currentStep.photos.map((p, idx) => (
//                   <img
//                     key={idx}
//                     src={`https://gateway.pinata.cloud/ipfs/${p.replace('ipfs://', '')}`}
//                     alt={`Current step photo ${idx + 1}`}
//                     className="w-24 h-24 object-cover rounded-xl border border-white/10"
//                   />
//                 ))}
//               </div>
//             )}
//           </div>
//         </div>
//       )}

//       {/* History Section */}
//       {history.length > 0 && (
//         <div className="mt-10 w-full max-w-5xl backdrop-blur-lg bg-white/10 rounded-3xl border border-white/10 shadow-xl p-8">
//           <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
//             <Clock className="w-6 h-6 text-cyan-400" />
//             Batch History
//           </h2>
//           <div className="space-y-6">
//             {history.map((step, i) => (
//               <div
//                 key={i}
//                 className="bg-white/10 border border-white/10 rounded-2xl p-4 shadow-md hover:bg-white/20 transition"
//               >
//                 <div className="flex justify-between items-center mb-2">
//                   <div className="flex items-center gap-2">
//                     {stepIcons[step.stepType] || <CheckCircle className="text-green-400 w-5 h-5" />}
//                     <span className="font-semibold text-lg">{step.stepType}</span>
//                   </div>
//                   <span className="text-gray-400 text-sm">
//                     {new Date(step.timestamp).toLocaleString()}
//                   </span>
//                 </div>
//                 <p className="text-gray-300 mb-3">{step.description}</p>
//                 <div className="grid sm:grid-cols-2 gap-3 text-sm text-gray-300">
//                   <div className="flex items-center gap-1">
//                     <MapPin className="w-4 h-4 text-cyan-400" /> {step.location}
//                   </div>
//                   <div className="flex items-center gap-1">
//                     <User className="w-4 h-4 text-cyan-400" /> {step.actor}
//                   </div>
//                 </div>
//                 {step.notes && <p className="mt-2 text-sm italic text-gray-400">“{step.notes}”</p>}
//                 {step.photos && step.photos.length > 0 && (
//                   <div className="flex mt-3 gap-2 overflow-x-auto">
//                     {step.photos.map((p, idx) => (
//                       <img
//                         key={idx}
//                         src={`https://gateway.pinata.cloud/ipfs/${p.replace('ipfs://', '')}`}
//                         alt={`Step ${i + 1} photo`}
//                         className="w-24 h-24 object-cover rounded-xl border border-white/10"
//                       />
//                     ))}
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
// 'use client';

// import { useState } from 'react';
// import { useContract } from '@/hooks/usecontract';
// import {
//   Search,
//   Loader2,
//   CheckCircle,
//   AlertCircle,
//   Clock,
//   MapPin,
//   Package,
//   User,
//   Truck,
//   Box,
//   Eye,
//   Factory,
//   ShieldCheck,
//   Archive,
// } from 'lucide-react';

// export default function ViewPage() {
//   const { contract } = useContract();
//   const [tokenId, setTokenId] = useState('');
//   const [batchData, setBatchData] = useState(null);
//   const [history, setHistory] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   const fetchBatchData = async (id) => {
//     setLoading(true);
//     setError('');
//     try {
//       if (!contract) throw new Error('Contract not loaded. Please connect wallet.');

//       const tokenUri = await contract.tokenURI(id);
//       const ipfsHash = tokenUri.replace('ipfs://', '');
//       const response = await fetch(`https://gateway.pinata.cloud/ipfs/${ipfsHash}`);
//       if (!response.ok) throw new Error('Failed to fetch metadata.');
//       const metadata = await response.json();

//       setBatchData(metadata);
//       setHistory(metadata.history || []);
//     } catch (err) {
//       let msg = err.message;
//       if (msg.includes('nonexistent token')) msg = 'Token ID not found.';
//       else msg = 'An error occurred. Please try again.';
//       setError(msg);
//       setBatchData(null);
//       setHistory([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (tokenId) fetchBatchData(tokenId);
//   };

//   // Helper: Get last step (current location)
//   const currentStep = history.length > 0 ? history[history.length - 1] : null;

//   // Map icons for step types
//   const stepIcons = {
//     'Quality Check': <ShieldCheck className="text-green-400 w-6 h-6" />,
//     Packaging: <Box className="text-blue-400 w-6 h-6" />,
//     Shipped: <Truck className="text-cyan-400 w-6 h-6" />,
//     Received: <Archive className="text-purple-400 w-6 h-6" />,
//     Inspection: <Eye className="text-yellow-400 w-6 h-6" />,
//     Storage: <Factory className="text-pink-400 w-6 h-6" />,
//     Custom: <CheckCircle className="text-white w-6 h-6" />,
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] text-white flex flex-col items-center px-4 py-8">
//       {/* Header */}
//       <header className="w-full max-w-5xl flex justify-between items-center mb-12 backdrop-blur-md bg-white/10 border border-white/10 rounded-2xl px-6 py-4 shadow-lg">
//         <h1 className="text-3xl font-bold tracking-wide bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
//           NFTMint Tracker
//         </h1>
//         <div className="flex items-center gap-3">
//           <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 shadow-lg"></div>
//         </div>
//       </header>

//       {/* Search Section */}
//       <div className="w-full max-w-3xl backdrop-blur-md bg-white/10 rounded-3xl border border-white/10 p-8 shadow-xl">
//         <h2 className="text-2xl font-bold text-center mb-3">Track Your Batch 🔍</h2>
//         <p className="text-center text-gray-300 mb-6">
//           Enter the <span className="font-semibold text-cyan-400">Token ID</span> to view its journey.
//         </p>

//         <form onSubmit={handleSubmit} className="flex gap-3">
//           <input
//             type="number"
//             value={tokenId}
//             onChange={(e) => setTokenId(e.target.value)}
//             placeholder="Enter Token ID"
//             className="flex-1 px-4 py-3 rounded-xl bg-white/20 text-white placeholder-gray-300 border border-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-400"
//           />
//           <button
//             type="submit"
//             disabled={loading}
//             className="bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3 rounded-xl font-semibold flex items-center gap-2 hover:opacity-90 transition disabled:opacity-50"
//           >
//             {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Search size={18} />}
//             {loading ? 'Searching...' : 'Search'}
//           </button>
//         </form>
//       </div>

//       {/* Error */}
//       {error && (
//         <div className="mt-6 w-full max-w-3xl bg-red-500/20 border border-red-400/30 rounded-xl p-4 flex items-center gap-2">
//           <AlertCircle className="w-5 h-5 text-red-400" />
//           <p>{error}</p>
//         </div>
//       )}

//       {/* Batch Data */}
//       {batchData && (
//         <div className="mt-10 w-full max-w-5xl backdrop-blur-lg bg-white/10 rounded-3xl border border-white/10 shadow-xl p-8">
//           <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
//             <Package className="w-6 h-6 text-cyan-400" />
//             Batch Details
//           </h2>
//           <div className="grid md:grid-cols-2 gap-8">
//             <div>
//               <h3 className="text-xl font-semibold mb-2">{batchData.name}</h3>
//               <p className="text-gray-300 mb-4">{batchData.description}</p>
//               <div className="space-y-2 text-sm text-gray-200">
//                 {batchData.attributes?.map((attr, i) => (
//                   <p key={i}>
//                     <span className="text-cyan-400">{attr.trait_type}:</span> {attr.value}
//                   </p>
//                 ))}
//               </div>
//             </div>
//             {batchData.image && (
//               <div className="rounded-2xl overflow-hidden shadow-lg border border-white/10">
//                 <img
//                   src={`https://gateway.pinata.cloud/ipfs/${batchData.image.replace('ipfs://', '')}`}
//                   alt={batchData.name}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//             )}
//           </div>
//         </div>
//       )}

//       {/* ✅ Current Status Section */}
//       {currentStep && (
//         <div className="mt-10 w-full max-w-4xl backdrop-blur-lg bg-white/10 rounded-3xl border border-white/10 shadow-xl p-8">
//           <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
//             <Clock className="w-6 h-6 text-cyan-400" />
//             Current Batch Status
//           </h2>
//           <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
//             <div className="flex flex-col items-center sm:items-start gap-2">
//               <div className="flex items-center gap-3">
//                 {stepIcons[currentStep.stepType] || (
//                   <CheckCircle className="w-6 h-6 text-gray-300" />
//                 )}
//                 <span className="font-semibold text-xl">{currentStep.stepType}</span>
//               </div>
//               <p className="text-gray-300">{currentStep.description}</p>
//               <div className="text-sm text-gray-400 mt-3 space-y-1">
//                 <p>
//                   <MapPin className="inline w-4 h-4 text-cyan-400 mr-1" />
//                   {currentStep.location}
//                 </p>
//                 <p>
//                   <User className="inline w-4 h-4 text-cyan-400 mr-1" />
//                   {currentStep.actor}
//                 </p>
//                 <p>
//                   <Clock className="inline w-4 h-4 text-cyan-400 mr-1" />
//                   {new Date(currentStep.timestamp).toLocaleString()}
//                 </p>
//               </div>
//               {currentStep.notes && (
//                 <p className="mt-3 text-sm italic text-gray-400">“{currentStep.notes}”</p>
//               )}
//             </div>

//             {currentStep.photos && currentStep.photos.length > 0 && (
//               <div className="flex gap-2 overflow-x-auto sm:ml-auto">
//                 {currentStep.photos.map((p, idx) => (
//                   <img
//                     key={idx}
//                     src={`https://gateway.pinata.cloud/ipfs/${p.replace('ipfs://', '')}`}
//                     alt={`Current step photo ${idx + 1}`}
//                     className="w-24 h-24 object-cover rounded-xl border border-white/10"
//                   />
//                 ))}
//               </div>
//             )}
//           </div>
//         </div>
//       )}

//       {/* 🧊 Updated History Section – Glassmorphism / Neo Timeline */}
//       {history.length > 0 && (
//         <div className="mt-10 w-full max-w-5xl relative">
//           <div className="absolute left-6 top-10 bottom-10 w-[2px] bg-gradient-to-b from-cyan-400 to-blue-500 opacity-60"></div>

//           <div className="backdrop-blur-xl bg-white/10 rounded-3xl border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.3)] p-8">
//             <h2 className="text-2xl font-semibold mb-10 flex items-center gap-2 justify-center">
//               <Clock className="w-6 h-6 text-cyan-400" />
//               Batch History Timeline
//             </h2>

//             <div className="space-y-10">
//               {history.map((step, i) => (
//                 <div
//                   key={i}
//                   className="relative flex items-start gap-6 group hover:scale-[1.02] transition-transform"
//                 >
//                   {/* Timeline dot */}
//                   <div className="relative z-10 flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center shadow-lg border border-white/20">
//                     {stepIcons[step.stepType] || <CheckCircle className="text-white w-5 h-5" />}
//                   </div>

//                   {/* Card */}
//                   <div className="flex-1 backdrop-blur-md bg-white/10 border border-white/10 rounded-2xl p-5 shadow-lg hover:bg-white/20 transition">
//                     <div className="flex justify-between items-center mb-2">
//                       <h3 className="font-semibold text-lg text-white flex items-center gap-2">
//                         {step.stepType}
//                       </h3>
//                       <span className="text-gray-400 text-sm">
//                         {new Date(step.timestamp).toLocaleString()}
//                       </span>
//                     </div>
//                     <p className="text-gray-300 mb-3">{step.description}</p>
//                     <div className="grid sm:grid-cols-2 gap-3 text-sm text-gray-300">
//                       <div className="flex items-center gap-1">
//                         <MapPin className="w-4 h-4 text-cyan-400" /> {step.location}
//                       </div>
//                       <div className="flex items-center gap-1">
//                         <User className="w-4 h-4 text-cyan-400" /> {step.actor}
//                       </div>
//                     </div>

//                     {step.notes && (
//                       <p className="mt-2 text-sm italic text-gray-400 border-l-2 border-cyan-400 pl-3">
//                         “{step.notes}”
//                       </p>
//                     )}

//                     {step.photos && step.photos.length > 0 && (
//                       <div className="flex mt-4 gap-3 overflow-x-auto">
//                         {step.photos.map((p, idx) => (
//                           <img
//                             key={idx}
//                             src={`https://gateway.pinata.cloud/ipfs/${p.replace('ipfs://', '')}`}
//                             alt={`Step ${i + 1} photo`}
//                             className="w-28 h-28 object-cover rounded-xl border border-white/10 shadow-md hover:scale-105 transition"
//                           />
//                         ))}
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
'use client';

import { useState } from 'react';
import { useContract } from '@/hooks/usecontract';
import {
  Search,
  Loader2,
  CheckCircle,
  AlertCircle,
  Clock,
  MapPin,
  Package,
  User,
  Truck,
  Box,
  Eye,
  Factory,
  ShieldCheck,
  Archive,
} from 'lucide-react';

export default function ViewPage() {
  const { contract } = useContract();
  const [tokenId, setTokenId] = useState('');
  const [batchData, setBatchData] = useState(null);
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchBatchData = async (id) => {
    setLoading(true);
    setError('');
    try {
      if (!contract) throw new Error('Contract not loaded. Please connect wallet.');

      const tokenUri = await contract.tokenURI(id);
      const ipfsHash = tokenUri.replace('ipfs://', '');
      const response = await fetch(`https://gateway.pinata.cloud/ipfs/${ipfsHash}`);
      if (!response.ok) throw new Error('Failed to fetch metadata.');
      const metadata = await response.json();

      setBatchData(metadata);
      setHistory(metadata.history || []);
    } catch (err) {
      let msg = err.message;
      if (msg.includes('nonexistent token')) msg = 'Token ID not found.';
      else msg = 'An error occurred. Please try again.';
      setError(msg);
      setBatchData(null);
      setHistory([]);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (tokenId) fetchBatchData(tokenId);
  };

  // Helper: Get last step (current location)
  const currentStep = history.length > 0 ? history[history.length - 1] : null;

  // Map icons for step types
  const stepIcons = {
    'Quality Check': <ShieldCheck className="text-green-400 w-6 h-6" />,
    Packaging: <Box className="text-blue-400 w-6 h-6" />,
    Shipped: <Truck className="text-cyan-400 w-6 h-6" />,
    Received: <Archive className="text-purple-400 w-6 h-6" />,
    Inspection: <Eye className="text-yellow-400 w-6 h-6" />,
    Storage: <Factory className="text-pink-400 w-6 h-6" />,
    Custom: <CheckCircle className="text-white w-6 h-6" />,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] text-white flex flex-col items-center px-4 py-8">
      {/* Header */}
      <header className="w-full max-w-5xl flex justify-between items-center mb-12 backdrop-blur-md bg-white/10 border border-white/10 rounded-2xl px-6 py-4 shadow-lg">
        <h1 className="text-3xl font-bold tracking-wide bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          NFTMint Tracker
        </h1>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 shadow-lg"></div>
        </div>
      </header>

      {/* Search Section */}
      <div className="w-full max-w-3xl backdrop-blur-md bg-white/10 rounded-3xl border border-white/10 p-8 shadow-xl">
        <h2 className="text-2xl font-bold text-center mb-3">Track Your Batch 🔍</h2>
        <p className="text-center text-gray-300 mb-6">
          Enter the <span className="font-semibold text-cyan-400">Token ID</span> to view its journey.
        </p>

        <form onSubmit={handleSubmit} className="flex gap-3">
          <input
            type="number"
            value={tokenId}
            onChange={(e) => setTokenId(e.target.value)}
            placeholder="Enter Token ID"
            className="flex-1 px-4 py-3 rounded-xl bg-white/20 text-white placeholder-gray-300 border border-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3 rounded-xl font-semibold flex items-center gap-2 hover:opacity-90 transition disabled:opacity-50"
          >
            {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Search size={18} />}
            {loading ? 'Searching...' : 'Search'}
          </button>
        </form>
      </div>

      {/* Error */}
      {error && (
        <div className="mt-6 w-full max-w-3xl bg-red-500/20 border border-red-400/30 rounded-xl p-4 flex items-center gap-2">
          <AlertCircle className="w-5 h-5 text-red-400" />
          <p>{error}</p>
        </div>
      )}

      {/* Batch Data */}
      {batchData && (
        <div className="mt-10 w-full max-w-5xl backdrop-blur-lg bg-white/10 rounded-3xl border border-white/10 shadow-xl p-8">
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <Package className="w-6 h-6 text-cyan-400" />
            Batch Details
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">{batchData.name}</h3>
              <p className="text-gray-300 mb-4">{batchData.description}</p>
              <div className="space-y-2 text-sm text-gray-200">
                {batchData.attributes?.map((attr, i) => (
                  <p key={i}>
                    <span className="text-cyan-400">{attr.trait_type}:</span> {attr.value}
                  </p>
                ))}
              </div>
            </div>
            {batchData.image && (
              <div className="rounded-2xl overflow-hidden shadow-lg border border-white/10">
                <img
                  src={`https://gateway.pinata.cloud/ipfs/${batchData.image.replace('ipfs://', '')}`}
                  alt={batchData.name}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>
        </div>
      )}

      {/* 🧊 Current Batch Status - Timeline Style */}
      {currentStep && (
        <div className="mt-14 w-full max-w-4xl relative">
          <div className="absolute left-6 top-10 bottom-10 w-[2px] bg-gradient-to-b from-cyan-400 to-blue-500 opacity-60"></div>

          <div className="backdrop-blur-xl bg-white/10 rounded-3xl border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.3)] p-8">
            <h2 className="text-2xl font-semibold mb-10 flex items-center gap-2 justify-center">
              <Clock className="w-6 h-6 text-cyan-400" />
              Current Batch Status
            </h2>

            <div className="relative flex items-start gap-6">
              {/* Timeline Dot */}
              <div className="relative z-10 flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center shadow-lg border border-white/20">
                {stepIcons[currentStep.stepType] || (
                  <CheckCircle className="text-white w-5 h-5" />
                )}
              </div>

              {/* Status Card */}
              <div className="flex-1 backdrop-blur-md bg-white/10 border border-white/10 rounded-2xl p-6 shadow-lg hover:bg-white/20 transition">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold text-xl text-white flex items-center gap-2">
                    {currentStep.stepType}
                  </h3>
                  <span className="text-gray-400 text-sm">
                    {new Date(currentStep.timestamp).toLocaleString()}
                  </span>
                </div>
                <p className="text-gray-300 mb-3">{currentStep.description}</p>
                <div className="grid sm:grid-cols-2 gap-3 text-sm text-gray-300">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4 text-cyan-400" /> {currentStep.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4 text-cyan-400" /> {currentStep.actor}
                  </div>
                </div>
                {currentStep.notes && (
                  <p className="mt-2 text-sm italic text-gray-400 border-l-2 border-cyan-400 pl-3">
                    “{currentStep.notes}”
                  </p>
                )}
                {currentStep.photos && currentStep.photos.length > 0 && (
                  <div className="flex mt-4 gap-3 overflow-x-auto">
                    {currentStep.photos.map((p, idx) => (
                      <img
                        key={idx}
                        src={`https://gateway.pinata.cloud/ipfs/${p.replace('ipfs://', '')}`}
                        alt={`Step photo ${idx + 1}`}
                        className="w-28 h-28 object-cover rounded-xl border border-white/10 shadow-md hover:scale-105 transition"
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 🧊 Batch History - Same Timeline Aesthetic */}
      {history.length > 0 && (
        <div className="mt-12 w-full max-w-5xl relative">
          <div className="absolute left-6 top-10 bottom-10 w-[2px] bg-gradient-to-b from-cyan-400 to-blue-500 opacity-60"></div>

          <div className="backdrop-blur-xl bg-white/10 rounded-3xl border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.3)] p-8">
            <h2 className="text-2xl font-semibold mb-10 flex items-center gap-2 justify-center">
              <Clock className="w-6 h-6 text-cyan-400" />
              Batch History Timeline
            </h2>

            <div className="space-y-10">
              {history.map((step, i) => (
                <div
                  key={i}
                  className="relative flex items-start gap-6 group hover:scale-[1.02] transition-transform"
                >
                  {/* Timeline Dot */}
                  <div className="relative z-10 flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center shadow-lg border border-white/20">
                    {stepIcons[step.stepType] || <CheckCircle className="text-white w-5 h-5" />}
                  </div>

                  {/* Card */}
                  <div className="flex-1 backdrop-blur-md bg-white/10 border border-white/10 rounded-2xl p-5 shadow-lg hover:bg-white/20 transition">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-semibold text-lg text-white flex items-center gap-2">
                        {step.stepType}
                      </h3>
                      <span className="text-gray-400 text-sm">
                        {new Date(step.timestamp).toLocaleString()}
                      </span>
                    </div>
                    <p className="text-gray-300 mb-3">{step.description}</p>
                    <div className="grid sm:grid-cols-2 gap-3 text-sm text-gray-300">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4 text-cyan-400" /> {step.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4 text-cyan-400" /> {step.actor}
                      </div>
                    </div>
                    {step.notes && (
                      <p className="mt-2 text-sm italic text-gray-400 border-l-2 border-cyan-400 pl-3">
                        “{step.notes}”
                      </p>
                    )}
                    {step.photos && step.photos.length > 0 && (
                      <div className="flex mt-4 gap-3 overflow-x-auto">
                        {step.photos.map((p, idx) => (
                          <img
                            key={idx}
                            src={`https://gateway.pinata.cloud/ipfs/${p.replace('ipfs://', '')}`}
                            alt={`Step ${i + 1} photo`}
                            className="w-28 h-28 object-cover rounded-xl border border-white/10 shadow-md hover:scale-105 transition"
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

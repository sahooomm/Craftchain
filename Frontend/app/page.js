// 'use client';

// import Link from 'next/link';
// import { ArrowRight, Package, FileText, Eye, Shield, Sparkles, Users } from 'lucide-react';

// export default function Home() {
//   return (
//     <div className="min-h-screen">
//       {/* Hero Section */}
//       <section className="container mx-auto px-4 py-20 md:py-32">
//         <div className="max-w-4xl mx-auto text-center">
//           <div className="inline-block glass px-4 py-2 rounded-full mb-6 animate-pulse">
//             <span className="text-sm font-medium text-primary">🔗 Blockchain-Powered Transparency</span>
//           </div>
          
//           <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
//             Every Thread<br />
//             <span className="text-primary">Tells a Story</span>
//           </h1>
          
//           <p className="text-xl md:text-2xl text-white/70 mb-10 max-w-2xl mx-auto">
//             Track your handcrafted products from artisan to buyer. Build trust with complete transparency using blockchain technology.
//           </p>
          
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Link href="/mint" className="btn-primary text-lg px-8 py-4 inline-flex items-center justify-center gap-2">
//               Create Batch
//               <ArrowRight size={20} />
//             </Link>
//             <Link href="/view" className="btn-secondary text-lg px-8 py-4 inline-flex items-center justify-center gap-2">
//               Track Batch
//               <Eye size={20} />
//             </Link>
//           </div>
//         </div>

//         {/* Visual Chain */}
//         <div className="mt-20 max-w-4xl mx-auto">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//             {[
//               { icon: '🎨', label: 'Artisan Creates' },
//               { icon: '🏢', label: 'Co-op Receives' },
//               { icon: '🏪', label: 'Retailer Stocks' },
//               { icon: '🛍️', label: 'Buyer Owns' },
//             ].map((step, i) => (
//               <div key={i} className="glass p-6 text-center hover:scale-105 transition-transform">
//                 <div className="text-4xl mb-3">{step.icon}</div>
//                 <div className="text-sm font-medium">{step.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="container mx-auto px-4 py-20">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Craft-Chain?</h2>
//           <p className="text-xl text-white/70 max-w-2xl mx-auto">
//             Empower artisans with technology that builds trust and transparency
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
//           {[
//             {
//               icon: Shield,
//               title: 'Immutable Records',
//               description: 'Every transaction permanently recorded on blockchain, ensuring authenticity and preventing fraud.',
//             },
//             {
//               icon: Eye,
//               title: 'Full Transparency',
//               description: 'Buyers scan QR codes to see complete product journey from creation to purchase.',
//             },
//             {
//               icon: Sparkles,
//               title: 'NFT Certificates',
//               description: 'Each batch receives unique digital certificate proving ownership and authenticity.',
//             },
//             {
//               icon: Users,
//               title: 'Global Reach',
//               description: 'Connect with buyers worldwide while maintaining complete control over your story.',
//             },
//             {
//               icon: Package,
//               title: 'Fair Pricing',
//               description: 'Transparency helps artisans get fair value by showcasing craftsmanship and materials.',
//             },
//             {
//               icon: FileText,
//               title: 'Easy to Use',
//               description: 'Simple interface for minting, tracking, and transferring—no blockchain expertise required.',
//             },
//           ].map((feature, i) => (
//             <div 
//               key={i} 
//               className="glass p-6 hover:border-primary/50 transition-all group hover:-translate-y-2"
//             >
//               <feature.icon className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
//               <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
//               <p className="text-white/70">{feature.description}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* How It Works */}
//       <section className="container mx-auto px-4 py-20">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold mb-4">How It Works</h2>
//           <p className="text-xl text-white/70">Three simple steps to complete transparency</p>
//         </div>

//         <div className="max-w-4xl mx-auto space-y-8">
//           {[
//             {
//               num: '1',
//               title: 'Create Batch',
//               desc: 'Artisans mint an NFT for their product batch, uploading details and images to IPFS.',
//             },
//             {
//               num: '2',
//               title: 'Record Journey',
//               desc: 'Each handler records steps like quality checks, packaging, and shipping on blockchain.',
//             },
//             {
//               num: '3',
//               title: 'Verify Authenticity',
//               desc: 'Buyers scan QR code to view complete timeline, verifying authenticity and supporting artisans.',
//             },
//           ].map((step, i) => (
//             <div key={i} className="flex gap-6 items-start">
//               <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-2xl font-black text-dark shadow-lg">
//                 {step.num}
//               </div>
//               <div className="flex-1 glass p-6">
//                 <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
//                 <p className="text-white/70 text-lg">{step.desc}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="container mx-auto px-4 py-20">
//         <div className="glass p-12 md:p-16 text-center max-w-4xl mx-auto relative overflow-hidden">
//           <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10"></div>
//           <div className="relative z-10">
//             <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Build Trust?</h2>
//             <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
//               Join artisans using blockchain to showcase their craftsmanship and connect with conscious buyers.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <Link href="/mint" className="btn-primary text-lg px-8 py-4 inline-flex items-center justify-center gap-2">
//                 Get Started Free
//                 <ArrowRight size={20} />
//               </Link>
//               <a 
//                 href="https://github.com/yourusername/craft-chain" 
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="btn-secondary text-lg px-8 py-4"
//               >
//                 View Documentation
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="border-t border-primary/20 py-12">
//         <div className="container mx-auto px-4">
//           <div className="flex flex-col md:flex-row justify-between items-center gap-6">
//             <div className="flex items-center gap-2 text-xl font-bold">
//               <span className="text-2xl">🧵</span>
//               <span>Craft-Chain</span>
//             </div>
            
//             <div className="flex flex-wrap justify-center gap-6 text-white/60">
//               <a href="#" className="hover:text-primary transition-colors">GitHub</a>
//               <a href="#" className="hover:text-primary transition-colors">Documentation</a>
//               <a href="https://sepolia.etherscan.io" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
//                 Sepolia Testnet
//               </a>
//               <a href="#" className="hover:text-primary transition-colors">Contact</a>
//             </div>
//           </div>
          
//           <div className="text-center mt-8 text-white/40 text-sm">
//             <p>&copy; 2025 Craft-Chain. Built on Ethereum Sepolia. Empowering artisans with blockchain.</p>
//             <p className="mt-2">Contract: {process.env.NEXT_PUBLIC_CONTRACT_ADDRESS?.substring(0, 10)}...</p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }

// 'use client';

// import Link from 'next/link';
// import { ArrowRight, Package, FileText, Eye, Shield, Sparkles, Users, Lock, Globe, Zap, CheckCircle, TrendingUp } from 'lucide-react';

// export default function Home() {
//   return (
//     <div className="min-h-screen bg-gradient-to-b from-slate-950 via-purple-950 to-slate-950">
      
//       {/* Hero Section with Animated Background */}
//       <section className="relative overflow-hidden">
//         {/* Animated gradient orbs */}
//         <div className="absolute top-20 left-10 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-600/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
//         <div className="relative container mx-auto px-6 py-24 md:py-36">
//           <div className="max-w-5xl mx-auto">
            
//             {/* Announcement Badge */}
//             <div className="flex justify-center mb-8">
//               <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-md border border-purple-500/30 rounded-full">
//                 <Sparkles className="w-4 h-4 text-purple-400" />
//                 <span className="text-sm font-semibold text-white/90">Blockchain Authentication Platform</span>
//                 <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
//               </div>
//             </div>
            
//             {/* Main Headline */}
//             <h1 className="text-6xl md:text-8xl font-black text-center mb-8 leading-tight">
//               <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
//                 Authenticity
//               </span>
//               <br />
//               <span className="text-white">Meets Innovation</span>
//             </h1>
            
//             {/* Subheadline */}
//             <p className="text-xl md:text-2xl text-center text-white/60 mb-12 max-w-3xl mx-auto leading-relaxed">
//               Revolutionize product verification with decentralized blockchain technology. 
//               Create verifiable digital certificates for your crafted goods in minutes.
//             </p>
            
//             {/* CTA Buttons */}
//             <div className="flex flex-col sm:flex-row gap-5 justify-center mb-16">
//               <Link 
//                 href="/mint" 
//                 className="group relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold px-10 py-5 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl"
//               >
//                 <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
//                 <span className="relative flex items-center justify-center gap-3 text-lg">
//                   Start Creating
//                   <ArrowRight className="w-5 h-5" />
//                 </span>
//               </Link>
              
//               <Link 
//                 href="/view" 
//                 className="bg-white/10 hover:bg-white/20 backdrop-blur-xl border border-white/20 text-white font-bold px-10 py-5 rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 text-lg shadow-xl"
//               >
//                 Explore Batches
//                 <Eye className="w-5 h-5" />
//               </Link>
//             </div>

//             {/* Stats Bar */}
//             <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto">
//               {[
//                 { value: '10K+', label: 'Batches Created' },
//                 { value: '50+', label: 'Active Artisans' },
//                 { value: '100%', label: 'Secure & Verified' },
//               ].map((stat, i) => (
//                 <div key={i} className="text-center">
//                   <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-1">
//                     {stat.value}
//                   </div>
//                   <div className="text-sm text-white/50 font-medium">{stat.label}</div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Process Flow Section */}
//       <section className="container mx-auto px-6 py-24">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-20">
//             <h2 className="text-5xl md:text-6xl font-black mb-5 text-white">
//               Simple. Powerful. Secure.
//             </h2>
//             <p className="text-xl text-white/60 max-w-2xl mx-auto">
//               Our streamlined process makes blockchain authentication accessible to everyone
//             </p>
//           </div>

//           <div className="grid md:grid-cols-4 gap-6">
//             {[
//               { icon: Package, title: 'Upload', desc: 'Add product details and images', color: 'from-blue-500 to-cyan-500' },
//               { icon: Lock, title: 'Secure', desc: 'Data stored on IPFS', color: 'from-purple-500 to-pink-500' },
//               { icon: Zap, title: 'Mint', desc: 'Create blockchain certificate', color: 'from-orange-500 to-red-500' },
//               { icon: CheckCircle, title: 'Verify', desc: 'Share proof of authenticity', color: 'from-green-500 to-emerald-500' },
//             ].map((step, i) => (
//               <div key={i} className="relative group">
//                 <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 h-full">
//                   <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
//                     <step.icon className="w-8 h-8 text-white" />
//                   </div>
//                   <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
//                   <p className="text-white/60">{step.desc}</p>
//                 </div>
//                 {i < 3 && (
//                   <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-purple-500/50 to-transparent transform -translate-y-1/2"></div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Features Grid */}
//       <section className="container mx-auto px-6 py-24 relative">
//         <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 blur-3xl"></div>
        
//         <div className="relative max-w-6xl mx-auto">
//           <div className="text-center mb-20">
//             <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full mb-6">
//               <Shield className="w-4 h-4 text-purple-400" />
//               <span className="text-sm font-semibold text-purple-400">Enterprise-Grade Security</span>
//             </div>
//             <h2 className="text-5xl md:text-6xl font-black mb-5 text-white">
//               Built for Modern Creators
//             </h2>
//             <p className="text-xl text-white/60 max-w-2xl mx-auto">
//               Advanced features designed to protect and promote your craft
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {[
//               {
//                 icon: Globe,
//                 title: 'Decentralized Storage',
//                 description: 'Your data lives on IPFS, ensuring permanent availability and censorship resistance.',
//                 accent: 'blue'
//               },
//               {
//                 icon: Lock,
//                 title: 'Cryptographic Proof',
//                 description: 'Every certificate is mathematically verified on the Ethereum blockchain.',
//                 accent: 'purple'
//               },
//               {
//                 icon: Eye,
//                 title: 'Public Verification',
//                 description: 'Anyone can verify authenticity without revealing sensitive business data.',
//                 accent: 'pink'
//               },
//               {
//                 icon: TrendingUp,
//                 title: 'Value Appreciation',
//                 description: 'Build brand reputation through transparent provenance tracking.',
//                 accent: 'green'
//               },
//               {
//                 icon: Users,
//                 title: 'Community Building',
//                 description: 'Connect with buyers who value craftsmanship and transparency.',
//                 accent: 'orange'
//               },
//               {
//                 icon: Sparkles,
//                 title: 'NFT Standards',
//                 description: 'Built on ERC-721 for maximum compatibility and future-proofing.',
//                 accent: 'cyan'
//               },
//             ].map((feature, i) => (
//               <div 
//                 key={i} 
//                 className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-2"
//               >
//                 <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
//                   <feature.icon className="w-7 h-7 text-purple-400" />
//                 </div>
//                 <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
//                 <p className="text-white/60 leading-relaxed">{feature.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Testimonial-Style Section */}
//       <section className="container mx-auto px-6 py-24">
//         <div className="max-w-5xl mx-auto">
//           <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-xl border border-purple-500/20 rounded-3xl p-12 md:p-16">
//             <div className="grid md:grid-cols-2 gap-12 items-center">
//               <div>
//                 <div className="text-6xl mb-6">🎨</div>
//                 <h3 className="text-3xl md:text-4xl font-black text-white mb-6">
//                   Empowering Artisans Worldwide
//                 </h3>
//                 <p className="text-lg text-white/70 mb-8 leading-relaxed">
//                   From traditional weavers to modern craftspeople, our platform enables creators 
//                   to prove authenticity, protect their work, and build lasting relationships with conscious consumers.
//                 </p>
//                 <div className="flex flex-wrap gap-4">
//                   <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
//                     <CheckCircle className="w-5 h-5 text-green-400" />
//                     <span className="text-sm font-semibold text-white">Zero Setup Fees</span>
//                   </div>
//                   <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
//                     <CheckCircle className="w-5 h-5 text-green-400" />
//                     <span className="text-sm font-semibold text-white">Instant Verification</span>
//                   </div>
//                 </div>
//               </div>
              
//               <div className="space-y-4">
//                 {[
//                   { label: 'Textile Artists', value: '45%' },
//                   { label: 'Jewelry Makers', value: '30%' },
//                   { label: 'Woodworkers', value: '25%' },
//                 ].map((item, i) => (
//                   <div key={i}>
//                     <div className="flex justify-between mb-2">
//                       <span className="text-white/80 font-medium">{item.label}</span>
//                       <span className="text-purple-400 font-bold">{item.value}</span>
//                     </div>
//                     <div className="h-3 bg-white/10 rounded-full overflow-hidden">
//                       <div 
//                         className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
//                         style={{ width: item.value }}
//                       ></div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Final CTA Section */}
//       <section className="container mx-auto px-6 py-24">
//         <div className="max-w-4xl mx-auto text-center">
//           <div className="relative">
//             <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 blur-3xl rounded-full"></div>
//             <div className="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-12 md:p-16">
//               <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
//                 Ready to Transform Your Business?
//               </h2>
//               <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
//                 Join hundreds of artisans leveraging blockchain technology to build trust, 
//                 verify authenticity, and grow their brand.
//               </p>
              
//               <div className="flex flex-col sm:flex-row gap-5 justify-center mb-8">
//                 <Link 
//                   href="/mint" 
//                   className="group relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold px-10 py-5 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl"
//                 >
//                   <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
//                   <span className="relative flex items-center justify-center gap-3 text-lg">
//                     Create Your First Batch
//                     <ArrowRight className="w-5 h-5" />
//                   </span>
//                 </Link>
                
//                 <a 
//                   href="https://docs.example.com" 
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="bg-white/10 hover:bg-white/20 backdrop-blur-xl border border-white/20 text-white font-bold px-10 py-5 rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 text-lg"
//                 >
//                   Read Documentation
//                   <FileText className="w-5 h-5" />
//                 </a>
//               </div>

//               <p className="text-sm text-white/40">
//                 No credit card required • Live on Sepolia Testnet
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Modern Footer */}
//       <footer className="border-t border-white/10 bg-black/30 backdrop-blur-xl">
//         <div className="container mx-auto px-6 py-12">
//           <div className="grid md:grid-cols-4 gap-12 mb-12">
//             <div>
//               <div className="flex items-center gap-3 mb-4">
//                 <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-xl">
//                   🧵
//                 </div>
//                 <span className="text-xl font-black text-white">CraftChain</span>
//               </div>
//               <p className="text-white/60 text-sm leading-relaxed">
//                 Blockchain-powered authenticity verification for modern artisans.
//               </p>
//             </div>
            
//             <div>
//               <h4 className="text-white font-bold mb-4">Product</h4>
//               <ul className="space-y-2 text-white/60 text-sm">
//                 <li><Link href="/mint" className="hover:text-purple-400 transition-colors">Create Batch</Link></li>
//                 <li><Link href="/view" className="hover:text-purple-400 transition-colors">Track Batch</Link></li>
//                 <li><a href="#" className="hover:text-purple-400 transition-colors">Features</a></li>
//                 <li><a href="#" className="hover:text-purple-400 transition-colors">Pricing</a></li>
//               </ul>
//             </div>
            
//             <div>
//               <h4 className="text-white font-bold mb-4">Resources</h4>
//               <ul className="space-y-2 text-white/60 text-sm">
//                 <li><a href="#" className="hover:text-purple-400 transition-colors">Documentation</a></li>
//                 <li><a href="#" className="hover:text-purple-400 transition-colors">API Reference</a></li>
//                 <li><a href="#" className="hover:text-purple-400 transition-colors">GitHub</a></li>
//                 <li><a href="#" className="hover:text-purple-400 transition-colors">Community</a></li>
//               </ul>
//             </div>
            
//             <div>
//               <h4 className="text-white font-bold mb-4">Network</h4>
//               <ul className="space-y-2 text-white/60 text-sm">
//                 <li><a href="https://sepolia.etherscan.io" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">Sepolia Testnet</a></li>
//                 <li><span className="text-xs text-white/40">Contract: {process.env.NEXT_PUBLIC_CONTRACT_ADDRESS?.substring(0, 8)}...</span></li>
//               </ul>
//             </div>
//           </div>
          
//           <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
//             <p className="text-white/40 text-sm">
//               © 2025 CraftChain. Powered by Ethereum blockchain.
//             </p>
//             <div className="flex gap-6 text-white/40 text-sm">
//               <a href="#" className="hover:text-purple-400 transition-colors">Privacy</a>
//               <a href="#" className="hover:text-purple-400 transition-colors">Terms</a>
//               <a href="#" className="hover:text-purple-400 transition-colors">Security</a>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }

// 'use client';

// import Link from 'next/link';
// import { ArrowRight, Package, FileText, Eye, Shield, Sparkles, Users, Lock, Globe, Zap, CheckCircle, TrendingUp, LogIn, UserPlus, LogOut } from 'lucide-react';
// import { useWallet } from '@/hooks/usewallet';
// import { formatAddress } from '@/lib/ethers';
// import { useState } from 'react';

// export default function Home() {
//   const { account, isConnected, connect, disconnect, loading } = useWallet();
//   const [showAuthModal, setShowAuthModal] = useState(false);

//   const handleConnect = async () => {
//     try {
//       await connect();
//       setShowAuthModal(false);
//     } catch (error) {
//       alert('Failed to connect wallet: ' + error.message);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-slate-950 via-purple-950 to-slate-950">
      
//       {/* Hero Section with Animated Background */}
//       <section className="relative overflow-hidden">
//         {/* Animated gradient orbs */}
//         <div className="absolute top-20 left-10 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-600/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
//         <div className="relative container mx-auto px-6 py-24 md:py-36">
//           <div className="max-w-5xl mx-auto">
            
//             {/* Announcement Badge */}
//             <div className="flex justify-center mb-8">
//               <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-md border border-purple-500/30 rounded-full">
//                 <Sparkles className="w-4 h-4 text-purple-400" />
//                 <span className="text-sm font-semibold text-white/90">Blockchain Authentication Platform</span>
//                 <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
//               </div>
//             </div>
            
//             {/* Main Headline */}
//             <h1 className="text-6xl md:text-8xl font-black text-center mb-8 leading-tight">
//               <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
//                 Authenticity
//               </span>
//               <br />
//               <span className="text-white">Meets Innovation</span>
//             </h1>
            
//             {/* Subheadline */}
//             <p className="text-xl md:text-2xl text-center text-white/60 mb-12 max-w-3xl mx-auto leading-relaxed">
//               Revolutionize product verification with decentralized blockchain technology. 
//               Create verifiable digital certificates for your crafted goods in minutes.
//             </p>
            
//             {/* Auth Buttons Section */}
//             {!isConnected ? (
//               <div className="flex flex-col sm:flex-row gap-5 justify-center mb-16">
//                 <button 
//                   onClick={handleConnect}
//                   disabled={loading}
//                   className="group relative overflow-hidden bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold px-10 py-5 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed"
//                 >
//                   <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
//                   <span className="relative flex items-center justify-center gap-3 text-lg">
//                     <LogIn className="w-5 h-5" />
//                     {loading ? 'Connecting...' : 'Login with Wallet'}
//                   </span>
//                 </button>
                
//                 <button 
//                   onClick={handleConnect}
//                   disabled={loading}
//                   className="group relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold px-10 py-5 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed"
//                 >
//                   <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
//                   <span className="relative flex items-center justify-center gap-3 text-lg">
//                     <UserPlus className="w-5 h-5" />
//                     {loading ? 'Connecting...' : 'Register Account'}
//                   </span>
//                 </button>
//               </div>
//             ) : (
//               <div className="flex flex-col items-center gap-5 mb-16">
//                 {/* Connected Status Card */}
//                 <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-xl border border-green-500/30 rounded-2xl px-8 py-4 flex items-center gap-4">
//                   <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
//                   <div>
//                     <div className="text-sm text-white/60 font-medium">Connected as</div>
//                     <div className="text-white font-bold text-lg">{formatAddress(account)}</div>
//                   </div>
//                 </div>

//                 <div className="flex flex-col sm:flex-row gap-4">
//                   <Link 
//                     href="/mint" 
//                     className="group relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold px-10 py-5 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl"
//                   >
//                     <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
//                     <span className="relative flex items-center justify-center gap-3 text-lg">
//                       Start Creating
//                       <ArrowRight className="w-5 h-5" />
//                     </span>
//                   </Link>
                  
//                   <Link 
//                     href="/view" 
//                     className="bg-white/10 hover:bg-white/20 backdrop-blur-xl border border-white/20 text-white font-bold px-10 py-5 rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 text-lg shadow-xl"
//                   >
//                     Explore Batches
//                     <Eye className="w-5 h-5" />
//                   </Link>

//                   <button 
//                     onClick={disconnect}
//                     className="bg-red-500/20 hover:bg-red-500/30 backdrop-blur-xl border border-red-500/30 text-red-400 font-bold px-10 py-5 rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 text-lg shadow-xl"
//                   >
//                     <LogOut className="w-5 h-5" />
//                     Logout
//                   </button>
//                 </div>
//               </div>
//             )}

//             {/* Stats Bar */}
//             <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto">
//               {[
//                 { value: '10K+', label: 'Batches Created' },
//                 { value: '50+', label: 'Active Artisans' },
//                 { value: '100%', label: 'Secure & Verified' },
//               ].map((stat, i) => (
//                 <div key={i} className="text-center">
//                   <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-1">
//                     {stat.value}
//                   </div>
//                   <div className="text-sm text-white/50 font-medium">{stat.label}</div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Process Flow Section */}
//       <section className="container mx-auto px-6 py-24">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-20">
//             <h2 className="text-5xl md:text-6xl font-black mb-5 text-white">
//               Simple. Powerful. Secure.
//             </h2>
//             <p className="text-xl text-white/60 max-w-2xl mx-auto">
//               Our streamlined process makes blockchain authentication accessible to everyone
//             </p>
//           </div>

//           <div className="grid md:grid-cols-4 gap-6">
//             {[
//               { icon: Package, title: 'Upload', desc: 'Add product details and images', color: 'from-blue-500 to-cyan-500' },
//               { icon: Lock, title: 'Secure', desc: 'Data stored on IPFS', color: 'from-purple-500 to-pink-500' },
//               { icon: Zap, title: 'Mint', desc: 'Create blockchain certificate', color: 'from-orange-500 to-red-500' },
//               { icon: CheckCircle, title: 'Verify', desc: 'Share proof of authenticity', color: 'from-green-500 to-emerald-500' },
//             ].map((step, i) => (
//               <div key={i} className="relative group">
//                 <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 h-full">
//                   <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
//                     <step.icon className="w-8 h-8 text-white" />
//                   </div>
//                   <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
//                   <p className="text-white/60">{step.desc}</p>
//                 </div>
//                 {i < 3 && (
//                   <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-purple-500/50 to-transparent transform -translate-y-1/2"></div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Features Grid */}
//       <section className="container mx-auto px-6 py-24 relative">
//         <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 blur-3xl"></div>
        
//         <div className="relative max-w-6xl mx-auto">
//           <div className="text-center mb-20">
//             <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full mb-6">
//               <Shield className="w-4 h-4 text-purple-400" />
//               <span className="text-sm font-semibold text-purple-400">Enterprise-Grade Security</span>
//             </div>
//             <h2 className="text-5xl md:text-6xl font-black mb-5 text-white">
//               Built for Modern Creators
//             </h2>
//             <p className="text-xl text-white/60 max-w-2xl mx-auto">
//               Advanced features designed to protect and promote your craft
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {[
//               {
//                 icon: Globe,
//                 title: 'Decentralized Storage',
//                 description: 'Your data lives on IPFS, ensuring permanent availability and censorship resistance.',
//                 accent: 'blue'
//               },
//               {
//                 icon: Lock,
//                 title: 'Cryptographic Proof',
//                 description: 'Every certificate is mathematically verified on the Ethereum blockchain.',
//                 accent: 'purple'
//               },
//               {
//                 icon: Eye,
//                 title: 'Public Verification',
//                 description: 'Anyone can verify authenticity without revealing sensitive business data.',
//                 accent: 'pink'
//               },
//               {
//                 icon: TrendingUp,
//                 title: 'Value Appreciation',
//                 description: 'Build brand reputation through transparent provenance tracking.',
//                 accent: 'green'
//               },
//               {
//                 icon: Users,
//                 title: 'Community Building',
//                 description: 'Connect with buyers who value craftsmanship and transparency.',
//                 accent: 'orange'
//               },
//               {
//                 icon: Sparkles,
//                 title: 'NFT Standards',
//                 description: 'Built on ERC-721 for maximum compatibility and future-proofing.',
//                 accent: 'cyan'
//               },
//             ].map((feature, i) => (
//               <div 
//                 key={i} 
//                 className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-2"
//               >
//                 <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
//                   <feature.icon className="w-7 h-7 text-purple-400" />
//                 </div>
//                 <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
//                 <p className="text-white/60 leading-relaxed">{feature.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Testimonial-Style Section */}
//       <section className="container mx-auto px-6 py-24">
//         <div className="max-w-5xl mx-auto">
//           <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-xl border border-purple-500/20 rounded-3xl p-12 md:p-16">
//             <div className="grid md:grid-cols-2 gap-12 items-center">
//               <div>
//                 <div className="text-6xl mb-6">🎨</div>
//                 <h3 className="text-3xl md:text-4xl font-black text-white mb-6">
//                   Empowering Artisans Worldwide
//                 </h3>
//                 <p className="text-lg text-white/70 mb-8 leading-relaxed">
//                   From traditional weavers to modern craftspeople, our platform enables creators 
//                   to prove authenticity, protect their work, and build lasting relationships with conscious consumers.
//                 </p>
//                 <div className="flex flex-wrap gap-4">
//                   <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
//                     <CheckCircle className="w-5 h-5 text-green-400" />
//                     <span className="text-sm font-semibold text-white">Zero Setup Fees</span>
//                   </div>
//                   <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
//                     <CheckCircle className="w-5 h-5 text-green-400" />
//                     <span className="text-sm font-semibold text-white">Instant Verification</span>
//                   </div>
//                 </div>
//               </div>
              
//               <div className="space-y-4">
//                 {[
//                   { label: 'Textile Artists', value: '45%' },
//                   { label: 'Jewelry Makers', value: '30%' },
//                   { label: 'Woodworkers', value: '25%' },
//                 ].map((item, i) => (
//                   <div key={i}>
//                     <div className="flex justify-between mb-2">
//                       <span className="text-white/80 font-medium">{item.label}</span>
//                       <span className="text-purple-400 font-bold">{item.value}</span>
//                     </div>
//                     <div className="h-3 bg-white/10 rounded-full overflow-hidden">
//                       <div 
//                         className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
//                         style={{ width: item.value }}
//                       ></div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Final CTA Section */}
//       <section className="container mx-auto px-6 py-24">
//         <div className="max-w-4xl mx-auto text-center">
//           <div className="relative">
//             <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 blur-3xl rounded-full"></div>
//             <div className="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-12 md:p-16">
//               <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
//                 Ready to Transform Your Business?
//               </h2>
//               <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
//                 Join hundreds of artisans leveraging blockchain technology to build trust, 
//                 verify authenticity, and grow their brand.
//               </p>
              
//               {!isConnected ? (
//                 <div className="flex flex-col sm:flex-row gap-5 justify-center mb-8">
//                   <button 
//                     onClick={handleConnect}
//                     disabled={loading}
//                     className="group relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold px-10 py-5 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl disabled:opacity-50"
//                   >
//                     <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
//                     <span className="relative flex items-center justify-center gap-3 text-lg">
//                       <UserPlus className="w-5 h-5" />
//                       {loading ? 'Connecting...' : 'Get Started Now'}
//                     </span>
//                   </button>
                  
//                   <a 
//                     href="https://docs.example.com" 
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="bg-white/10 hover:bg-white/20 backdrop-blur-xl border border-white/20 text-white font-bold px-10 py-5 rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 text-lg"
//                   >
//                     Read Documentation
//                     <FileText className="w-5 h-5" />
//                   </a>
//                 </div>
//               ) : (
//                 <div className="flex flex-col sm:flex-row gap-5 justify-center mb-8">
//                   <Link 
//                     href="/mint" 
//                     className="group relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold px-10 py-5 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl"
//                   >
//                     <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
//                     <span className="relative flex items-center justify-center gap-3 text-lg">
//                       Create Your First Batch
//                       <ArrowRight className="w-5 h-5" />
//                     </span>
//                   </Link>
                  
//                   <a 
//                     href="https://docs.example.com" 
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="bg-white/10 hover:bg-white/20 backdrop-blur-xl border border-white/20 text-white font-bold px-10 py-5 rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 text-lg"
//                   >
//                     Read Documentation
//                     <FileText className="w-5 h-5" />
//                   </a>
//                 </div>
//               )}

//               <p className="text-sm text-white/40">
//                 No credit card required • Live on Sepolia Testnet
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Modern Footer */}
//       <footer className="border-t border-white/10 bg-black/30 backdrop-blur-xl">
//         <div className="container mx-auto px-6 py-12">
//           <div className="grid md:grid-cols-4 gap-12 mb-12">
//             <div>
//               <div className="flex items-center gap-3 mb-4">
//                 <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-xl">
//                   🧵
//                 </div>
//                 <span className="text-xl font-black text-white">CraftChain</span>
//               </div>
//               <p className="text-white/60 text-sm leading-relaxed">
//                 Blockchain-powered authenticity verification for modern artisans.
//               </p>
//             </div>
            
//             <div>
//               <h4 className="text-white font-bold mb-4">Product</h4>
//               <ul className="space-y-2 text-white/60 text-sm">
//                 <li><Link href="/mint" className="hover:text-purple-400 transition-colors">Create Batch</Link></li>
//                 <li><Link href="/view" className="hover:text-purple-400 transition-colors">Track Batch</Link></li>
//                 <li><a href="#" className="hover:text-purple-400 transition-colors">Features</a></li>
//                 <li><a href="#" className="hover:text-purple-400 transition-colors">Pricing</a></li>
//               </ul>
//             </div>
            
//             <div>
//               <h4 className="text-white font-bold mb-4">Resources</h4>
//               <ul className="space-y-2 text-white/60 text-sm">
//                 <li><a href="#" className="hover:text-purple-400 transition-colors">Documentation</a></li>
//                 <li><a href="#" className="hover:text-purple-400 transition-colors">API Reference</a></li>
//                 <li><a href="#" className="hover:text-purple-400 transition-colors">GitHub</a></li>
//                 <li><a href="#" className="hover:text-purple-400 transition-colors">Community</a></li>
//               </ul>
//             </div>
            
//             <div>
//               <h4 className="text-white font-bold mb-4">Network</h4>
//               <ul className="space-y-2 text-white/60 text-sm">
//                 <li><a href="https://sepolia.etherscan.io" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">Sepolia Testnet</a></li>
//                 <li><span className="text-xs text-white/40">Contract: {process.env.NEXT_PUBLIC_CONTRACT_ADDRESS?.substring(0, 8)}...</span></li>
//               </ul>
//             </div>
//           </div>
          
//           <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
//             <p className="text-white/40 text-sm">
//               © 2025 CraftChain. Powered by Ethereum blockchain.
//             </p>
//             <div className="flex gap-6 text-white/40 text-sm">
//               <a href="#" className="hover:text-purple-400 transition-colors">Privacy</a>
//               <a href="#" className="hover:text-purple-400 transition-colors">Terms</a>
//               <a href="#" className="hover:text-purple-400 transition-colors">Security</a>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }

// 'use client';

// import Link from 'next/link';
// import { ArrowRight, Eye, Shield, Sparkles, LogIn, UserPlus, LogOut, X, Loader2, Lock } from 'lucide-react';
// import { useWallet } from '@/hooks/usewallet';
// import { formatAddress } from '@/lib/ethers';
// import { useState, useEffect } from 'react';

// export default function Home() {
//   const { account, isConnected, connect, disconnect, loading } = useWallet();
//   const [showAuthModal, setShowAuthModal] = useState(false);
//   const [authMode, setAuthMode] = useState('login'); // 'login' or 'register'
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [userData, setUserData] = useState(null);
//   const [authLoading, setAuthLoading] = useState(false);
  
//   // Registration form
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//   });
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');

//   // Check if user is logged in on mount
//   useEffect(() => {
//     const storedUser = localStorage.getItem('userData');
//     if (storedUser) {
//       setUserData(JSON.parse(storedUser));
//       setIsAuthenticated(true);
//     }
//   }, []);

//   // Auto-connect wallet if user was authenticated
//   useEffect(() => {
//     const autoConnect = async () => {
//       const storedUser = localStorage.getItem('userData');
//       if (storedUser && !isConnected) {
//         try {
//           await connect();
//         } catch (err) {
//           console.error('Auto-connect failed:', err);
//         }
//       }
//     };
//     autoConnect();
//   }, []);

//   const handleLogin = async () => {
//     setAuthLoading(true);
//     setError('');
//     setSuccess('');

//     try {
//       // First connect wallet
//       if (!isConnected) {
//         await connect();
//       }

//       // Wait a bit for account to be available
//       await new Promise(resolve => setTimeout(resolve, 1000));

//       // Get the connected wallet address
//       const walletAddress = account || window.ethereum?.selectedAddress;
      
//       if (!walletAddress) {
//         throw new Error('Wallet address not found. Please try again.');
//       }

//       // Call login API
//       const response = await fetch('/api/auth/login', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ walletAddress }),
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         throw new Error(data.error || 'Login failed');
//       }

//       // Store user data
//       localStorage.setItem('userData', JSON.stringify(data.user));
//       setUserData(data.user);
//       setIsAuthenticated(true);
//       setSuccess('Login successful! Welcome back!');
      
//       setTimeout(() => {
//         setShowAuthModal(false);
//         setSuccess('');
//       }, 1500);

//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setAuthLoading(false);
//     }
//   };

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     setAuthLoading(true);
//     setError('');
//     setSuccess('');

//     try {
//       // First connect wallet
//       if (!isConnected) {
//         await connect();
//       }

//       // Wait a bit for account to be available
//       await new Promise(resolve => setTimeout(resolve, 1000));

//       const walletAddress = account || window.ethereum?.selectedAddress;
      
//       if (!walletAddress) {
//         throw new Error('Wallet address not found. Please try again.');
//       }

//       // Call register API
//       const response = await fetch('/api/auth/register', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           walletAddress,
//           name: formData.name,
//           email: formData.email,
//         }),
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         throw new Error(data.error || 'Registration failed');
//       }

//       // Store user data
//       localStorage.setItem('userData', JSON.stringify(data.user));
//       setUserData(data.user);
//       setIsAuthenticated(true);
//       setSuccess('Registration successful! Welcome aboard!');
      
//       setTimeout(() => {
//         setShowAuthModal(false);
//         setFormData({ name: '', email: '' });
//         setSuccess('');
//       }, 1500);

//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setAuthLoading(false);
//     }
//   };

//   const handleLogout = async () => {
//     localStorage.removeItem('userData');
//     setUserData(null);
//     setIsAuthenticated(false);
//     await disconnect();
//   };

//   const openAuthModal = (mode) => {
//     setAuthMode(mode);
//     setShowAuthModal(true);
//     setError('');
//     setSuccess('');
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-slate-950 via-purple-950 to-slate-950">
      
//       {/* Auth Modal */}
//       {showAuthModal && (
//         <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
//           <div className="bg-gradient-to-br from-slate-900 to-purple-900 border border-white/20 rounded-3xl p-8 max-w-md w-full relative shadow-2xl">
//             <button
//               onClick={() => setShowAuthModal(false)}
//               className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors"
//             >
//               <X className="w-6 h-6" />
//             </button>

//             <div className="text-center mb-8">
//               <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
//                 {authMode === 'login' ? <LogIn className="w-8 h-8 text-white" /> : <UserPlus className="w-8 h-8 text-white" />}
//               </div>
//               <h2 className="text-3xl font-black text-white mb-2">
//                 {authMode === 'login' ? 'Welcome Back' : 'Create Account'}
//               </h2>
//               <p className="text-white/60">
//                 {authMode === 'login' ? 'Login with your wallet' : 'Register your account'}
//               </p>
//             </div>

//             {error && (
//               <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 mb-6">
//                 <p className="text-red-400 text-sm">{error}</p>
//               </div>
//             )}

//             {success && (
//               <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4 mb-6">
//                 <p className="text-green-400 text-sm flex items-center gap-2">
//                   <Sparkles className="w-4 h-4" />
//                   {success}
//                 </p>
//               </div>
//             )}

//             {authMode === 'register' ? (
//               <form onSubmit={handleRegister} className="space-y-5">
//                 <div>
//                   <label className="block text-white/80 font-semibold mb-2 text-sm">Full Name *</label>
//                   <input
//                     type="text"
//                     value={formData.name}
//                     onChange={(e) => setFormData({...formData, name: e.target.value})}
//                     placeholder="John Doe"
//                     required
//                     className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-purple-500/50 transition-all"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-white/80 font-semibold mb-2 text-sm">Email Address *</label>
//                   <input
//                     type="email"
//                     value={formData.email}
//                     onChange={(e) => setFormData({...formData, email: e.target.value})}
//                     placeholder="john@example.com"
//                     required
//                     className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-purple-500/50 transition-all"
//                   />
//                 </div>

//                 <div className="bg-purple-500/10 border border-purple-500/20 rounded-xl p-4">
//                   <p className="text-white/70 text-xs flex items-center gap-2">
//                     <Lock className="w-4 h-4" />
//                     Your wallet will be connected automatically during registration
//                   </p>
//                 </div>

//                 <button
//                   type="submit"
//                   disabled={authLoading}
//                   className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 rounded-xl transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2"
//                 >
//                   {authLoading ? (
//                     <>
//                       <Loader2 className="w-5 h-5 animate-spin" />
//                       Processing...
//                     </>
//                   ) : (
//                     <>
//                       <UserPlus className="w-5 h-5" />
//                       Register Account
//                     </>
//                   )}
//                 </button>

//                 <p className="text-center text-white/60 text-sm">
//                   Already have an account?{' '}
//                   <button
//                     type="button"
//                     onClick={() => setAuthMode('login')}
//                     className="text-purple-400 hover:text-purple-300 font-semibold"
//                   >
//                     Login
//                   </button>
//                 </p>
//               </form>
//             ) : (
//               <div className="space-y-5">
//                 <div className="bg-purple-500/10 border border-purple-500/20 rounded-xl p-4">
//                   <p className="text-white/70 text-sm flex items-center gap-2">
//                     <Lock className="w-4 h-4" />
//                     Connect your wallet to login automatically
//                   </p>
//                 </div>

//                 <button
//                   onClick={handleLogin}
//                   disabled={authLoading}
//                   className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold py-4 rounded-xl transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2"
//                 >
//                   {authLoading ? (
//                     <>
//                       <Loader2 className="w-5 h-5 animate-spin" />
//                       Connecting...
//                     </>
//                   ) : (
//                     <>
//                       <LogIn className="w-5 h-5" />
//                       Login with Wallet
//                     </>
//                   )}
//                 </button>

//                 <p className="text-center text-white/60 text-sm">
//                   Don't have an account?{' '}
//                   <button
//                     type="button"
//                     onClick={() => setAuthMode('register')}
//                     className="text-purple-400 hover:text-purple-300 font-semibold"
//                   >
//                     Register
//                   </button>
//                 </p>
//               </div>
//             )}
//           </div>
//         </div>
//       )}

//       {/* Hero Section */}
//       <section className="relative overflow-hidden">
//         <div className="absolute top-20 left-10 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-600/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
//         <div className="relative container mx-auto px-6 py-24 md:py-36">
//           <div className="max-w-5xl mx-auto">
            
//             <div className="flex justify-center mb-8">
//               <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-md border border-purple-500/30 rounded-full">
//                 <Sparkles className="w-4 h-4 text-purple-400" />
//                 <span className="text-sm font-semibold text-white/90">Blockchain Authentication Platform</span>
//                 <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
//               </div>
//             </div>
            
//             <h1 className="text-6xl md:text-8xl font-black text-center mb-8 leading-tight">
//               <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
//                 Authenticity
//               </span>
//               <br />
//               <span className="text-white">Meets Innovation</span>
//             </h1>
            
//             <p className="text-xl md:text-2xl text-center text-white/60 mb-12 max-w-3xl mx-auto leading-relaxed">
//               Revolutionize product verification with decentralized blockchain technology. 
//               Create verifiable digital certificates for your crafted goods in minutes.
//             </p>
            
//             {/* Auth Buttons */}
//             {!isAuthenticated ? (
//               <div className="flex flex-col sm:flex-row gap-5 justify-center mb-16">
//                 <button 
//                   onClick={() => openAuthModal('login')}
//                   className="group relative overflow-hidden bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold px-10 py-5 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl"
//                 >
//                   <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
//                   <span className="relative flex items-center justify-center gap-3 text-lg">
//                     <LogIn className="w-5 h-5" />
//                     Login
//                   </span>
//                 </button>
                
//                 <button 
//                   onClick={() => openAuthModal('register')}
//                   className="group relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold px-10 py-5 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl"
//                 >
//                   <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
//                   <span className="relative flex items-center justify-center gap-3 text-lg">
//                     <UserPlus className="w-5 h-5" />
//                     Register
//                   </span>
//                 </button>
//               </div>
//             ) : (
//               <div className="flex flex-col items-center gap-5 mb-16">
//                 <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-xl border border-green-500/30 rounded-2xl px-8 py-4">
//                   <div className="flex items-center gap-4">
//                     <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
//                     <div>
//                       <div className="text-sm text-white/60 font-medium">Welcome back, {userData?.name}!</div>
//                       <div className="text-white font-bold">{formatAddress(userData?.walletAddress)}</div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="flex flex-col sm:flex-row gap-4">
//                   <Link 
//                     href="/mint" 
//                     className="group relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold px-10 py-5 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl"
//                   >
//                     <span className="relative flex items-center justify-center gap-3 text-lg">
//                       Start Creating
//                       <ArrowRight className="w-5 h-5" />
//                     </span>
//                   </Link>
                  
//                   <Link 
//                     href="/view" 
//                     className="bg-white/10 hover:bg-white/20 backdrop-blur-xl border border-white/20 text-white font-bold px-10 py-5 rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 text-lg shadow-xl"
//                   >
//                     Explore Batches
//                     <Eye className="w-5 h-5" />
//                   </Link>

//                   <button 
//                     onClick={handleLogout}
//                     className="bg-red-500/20 hover:bg-red-500/30 backdrop-blur-xl border border-red-500/30 text-red-400 font-bold px-10 py-5 rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 text-lg shadow-xl"
//                   >
//                     <LogOut className="w-5 h-5" />
//                     Logout
//                   </button>
//                 </div>
//               </div>
//             )}

//             <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto">
//               {[
//                 { value: '10K+', label: 'Batches Created' },
//                 { value: '50+', label: 'Active Artisans' },
//                 { value: '100%', label: 'Secure & Verified' },
//               ].map((stat, i) => (
//                 <div key={i} className="text-center">
//                   <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-1">
//                     {stat.value}
//                   </div>
//                   <div className="text-sm text-white/50 font-medium">{stat.label}</div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

     
//     </div>
//   );
// }

// 'use client';

// import Link from 'next/link';
// import { ArrowRight, Package, FileText, Eye, Shield, Sparkles, Users, Lock, Globe, Zap, CheckCircle, TrendingUp, LogIn, UserPlus, LogOut, X, Loader2 } from 'lucide-react';
// import { useWallet } from '@/hooks/usewallet';
// import { formatAddress } from '@/lib/ethers';
// import { useState, useEffect } from 'react';

// export default function Home() {
//   const { account, isConnected, connect, disconnect, loading } = useWallet();
//   const [showAuthModal, setShowAuthModal] = useState(false);
//   const [authMode, setAuthMode] = useState('login'); // 'login' or 'register'
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [userData, setUserData] = useState(null);
//   const [authLoading, setAuthLoading] = useState(false);
  
//   // Registration form
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//   });
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');

//   // Check if user is logged in on mount
//   useEffect(() => {
//     const storedUser = localStorage.getItem('userData');
//     if (storedUser) {
//       setUserData(JSON.parse(storedUser));
//       setIsAuthenticated(true);
//     }
//   }, []);

//   // Auto-connect wallet if user was authenticated
//   useEffect(() => {
//     const autoConnect = async () => {
//       const storedUser = localStorage.getItem('userData');
//       if (storedUser && !isConnected) {
//         try {
//           await connect();
//         } catch (err) {
//           console.error('Auto-connect failed:', err);
//         }
//       }
//     };
//     autoConnect();
//   }, []);

//   const handleLogin = async () => {
//     setAuthLoading(true);
//     setError('');
//     setSuccess('');

//     try {
//       // First connect wallet
//       if (!isConnected) {
//         await connect();
//       }

//       // Wait a bit for account to be available
//       await new Promise(resolve => setTimeout(resolve, 1000));

//       // Get the connected wallet address
//       const walletAddress = account || window.ethereum?.selectedAddress;
      
//       if (!walletAddress) {
//         throw new Error('Wallet address not found. Please try again.');
//       }

//       // Call login API
//       const response = await fetch('/api/auth/login', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ walletAddress }),
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         throw new Error(data.error || 'Login failed');
//       }

//       // Store user data
//       localStorage.setItem('userData', JSON.stringify(data.user));
//       setUserData(data.user);
//       setIsAuthenticated(true);
//       setSuccess('Login successful! Welcome back!');
      
//       setTimeout(() => {
//         setShowAuthModal(false);
//         setSuccess('');
//       }, 1500);

//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setAuthLoading(false);
//     }
//   };

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     setAuthLoading(true);
//     setError('');
//     setSuccess('');

//     try {
//       // First connect wallet
//       if (!isConnected) {
//         await connect();
//       }

//       // Wait a bit for account to be available
//       await new Promise(resolve => setTimeout(resolve, 1000));

//       const walletAddress = account || window.ethereum?.selectedAddress;
      
//       if (!walletAddress) {
//         throw new Error('Wallet address not found. Please try again.');
//       }

//       // Call register API
//       const response = await fetch('/api/auth/register', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           walletAddress,
//           name: formData.name,
//           email: formData.email,
//         }),
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         throw new Error(data.error || 'Registration failed');
//       }

//       // Store user data
//       localStorage.setItem('userData', JSON.stringify(data.user));
//       setUserData(data.user);
//       setIsAuthenticated(true);
//       setSuccess('Registration successful! Welcome aboard!');
      
//       setTimeout(() => {
//         setShowAuthModal(false);
//         setFormData({ name: '', email: '' });
//         setSuccess('');
//       }, 1500);

//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setAuthLoading(false);
//     }
//   };

//   const handleLogout = async () => {
//     localStorage.removeItem('userData');
//     setUserData(null);
//     setIsAuthenticated(false);
//     await disconnect();
//   };

//   const openAuthModal = (mode) => {
//     setAuthMode(mode);
//     setShowAuthModal(true);
//     setError('');
//     setSuccess('');
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-slate-950 via-purple-950 to-slate-950">
      
//       {/* Auth Modal */}
//       {showAuthModal && (
//         <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
//           <div className="bg-gradient-to-br from-slate-900 to-purple-900 border border-white/20 rounded-3xl p-8 max-w-md w-full relative shadow-2xl">
//             <button
//               onClick={() => setShowAuthModal(false)}
//               className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors"
//             >
//               <X className="w-6 h-6" />
//             </button>

//             <div className="text-center mb-8">
//               <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
//                 {authMode === 'login' ? <LogIn className="w-8 h-8 text-white" /> : <UserPlus className="w-8 h-8 text-white" />}
//               </div>
//               <h2 className="text-3xl font-black text-white mb-2">
//                 {authMode === 'login' ? 'Welcome Back' : 'Create Account'}
//               </h2>
//               <p className="text-white/60">
//                 {authMode === 'login' ? 'Login with your wallet' : 'Register your account'}
//               </p>
//             </div>

//             {error && (
//               <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 mb-6">
//                 <p className="text-red-400 text-sm">{error}</p>
//               </div>
//             )}

//             {success && (
//               <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4 mb-6">
//                 <p className="text-green-400 text-sm flex items-center gap-2">
//                   <Sparkles className="w-4 h-4" />
//                   {success}
//                 </p>
//               </div>
//             )}

//             {authMode === 'register' ? (
//               <form onSubmit={handleRegister} className="space-y-5">
//                 <div>
//                   <label className="block text-white/80 font-semibold mb-2 text-sm">Full Name *</label>
//                   <input
//                     type="text"
//                     value={formData.name}
//                     onChange={(e) => setFormData({...formData, name: e.target.value})}
//                     placeholder="John Doe"
//                     required
//                     className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-purple-500/50 transition-all"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-white/80 font-semibold mb-2 text-sm">Email Address *</label>
//                   <input
//                     type="email"
//                     value={formData.email}
//                     onChange={(e) => setFormData({...formData, email: e.target.value})}
//                     placeholder="john@example.com"
//                     required
//                     className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-purple-500/50 transition-all"
//                   />
//                 </div>

//                 <div className="bg-purple-500/10 border border-purple-500/20 rounded-xl p-4">
//                   <p className="text-white/70 text-xs flex items-center gap-2">
//                     <Lock className="w-4 h-4" />
//                     Your wallet will be connected automatically during registration
//                   </p>
//                 </div>

//                 <button
//                   type="submit"
//                   disabled={authLoading}
//                   className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 rounded-xl transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2"
//                 >
//                   {authLoading ? (
//                     <>
//                       <Loader2 className="w-5 h-5 animate-spin" />
//                       Processing...
//                     </>
//                   ) : (
//                     <>
//                       <UserPlus className="w-5 h-5" />
//                       Register Account
//                     </>
//                   )}
//                 </button>

//                 <p className="text-center text-white/60 text-sm">
//                   Already have an account?{' '}
//                   <button
//                     type="button"
//                     onClick={() => setAuthMode('login')}
//                     className="text-purple-400 hover:text-purple-300 font-semibold"
//                   >
//                     Login
//                   </button>
//                 </p>
//               </form>
//             ) : (
//               <div className="space-y-5">
//                 <div className="bg-purple-500/10 border border-purple-500/20 rounded-xl p-4">
//                   <p className="text-white/70 text-sm flex items-center gap-2">
//                     <Lock className="w-4 h-4" />
//                     Connect your wallet to login automatically
//                   </p>
//                 </div>

//                 <button
//                   onClick={handleLogin}
//                   disabled={authLoading}
//                   className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold py-4 rounded-xl transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2"
//                 >
//                   {authLoading ? (
//                     <>
//                       <Loader2 className="w-5 h-5 animate-spin" />
//                       Connecting...
//                     </>
//                   ) : (
//                     <>
//                       <LogIn className="w-5 h-5" />
//                       Login with Wallet
//                     </>
//                   )}
//                 </button>

//                 <p className="text-center text-white/60 text-sm">
//                   Don't have an account?{' '}
//                   <button
//                     type="button"
//                     onClick={() => setAuthMode('register')}
//                     className="text-purple-400 hover:text-purple-300 font-semibold"
//                   >
//                     Register
//                   </button>
//                 </p>
//               </div>
//             )}
//           </div>
//         </div>
//       )}

//       {/* Hero Section with Animated Background */}
//       <section className="relative overflow-hidden">
//         {/* Animated gradient orbs */}
//         <div className="absolute top-20 left-10 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-600/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
//         <div className="relative container mx-auto px-6 py-24 md:py-36">
//           <div className="max-w-5xl mx-auto">
            
//             {/* Announcement Badge */}
//             <div className="flex justify-center mb-8">
//               <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-md border border-purple-500/30 rounded-full">
//                 <Sparkles className="w-4 h-4 text-purple-400" />
//                 <span className="text-sm font-semibold text-white/90">Blockchain Authentication Platform</span>
//                 <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
//               </div>
//             </div>
            
//             {/* Main Headline */}
//             <h1 className="text-6xl md:text-8xl font-black text-center mb-8 leading-tight">
//               <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
//                 Authenticity
//               </span>
//               <br />
//               <span className="text-white">Meets Innovation</span>
//             </h1>
            
//             {/* Subheadline */}
//             <p className="text-xl md:text-2xl text-center text-white/60 mb-12 max-w-3xl mx-auto leading-relaxed">
//               Revolutionize product verification with decentralized blockchain technology. 
//               Create verifiable digital certificates for your crafted goods in minutes.
//             </p>
            
//             {/* Auth Buttons Section */}
//             {!isAuthenticated ? (
//               <div className="flex flex-col sm:flex-row gap-5 justify-center mb-16">
//                 <button 
//                   onClick={() => openAuthModal('login')}
//                   disabled={loading}
//                   className="group relative overflow-hidden bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold px-10 py-5 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed"
//                 >
//                   <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
//                   <span className="relative flex items-center justify-center gap-3 text-lg">
//                     <LogIn className="w-5 h-5" />
//                     {loading ? 'Connecting...' : 'Login with Wallet'}
//                   </span>
//                 </button>
                
//                 <button 
//                   onClick={() => openAuthModal('register')}
//                   disabled={loading}
//                   className="group relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold px-10 py-5 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed"
//                 >
//                   <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
//                   <span className="relative flex items-center justify-center gap-3 text-lg">
//                     <UserPlus className="w-5 h-5" />
//                     {loading ? 'Connecting...' : 'Register Account'}
//                   </span>
//                 </button>
//               </div>
//             ) : (
//               <div className="flex flex-col items-center gap-5 mb-16">
//                 {/* Connected Status Card */}
//                 <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-xl border border-green-500/30 rounded-2xl px-8 py-4 flex items-center gap-4">
//                   <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
//                   <div>
//                     <div className="text-sm text-white/60 font-medium">Welcome back, {userData?.name}!</div>
//                     <div className="text-white font-bold text-lg">{formatAddress(userData?.walletAddress || account)}</div>
//                   </div>
//                 </div>

//                 <div className="flex flex-col sm:flex-row gap-4">
//                   <Link 
//                     href="/mint" 
//                     className="group relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold px-10 py-5 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl"
//                   >
//                     <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
//                     <span className="relative flex items-center justify-center gap-3 text-lg">
//                       Start Creating
//                       <ArrowRight className="w-5 h-5" />
//                     </span>
//                   </Link>
                  
//                   <Link 
//                     href="/view" 
//                     className="bg-white/10 hover:bg-white/20 backdrop-blur-xl border border-white/20 text-white font-bold px-10 py-5 rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 text-lg shadow-xl"
//                   >
//                     Explore Batches
//                     <Eye className="w-5 h-5" />
//                   </Link>

//                   <button 
//                     onClick={handleLogout}
//                     className="bg-red-500/20 hover:bg-red-500/30 backdrop-blur-xl border border-red-500/30 text-red-400 font-bold px-10 py-5 rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 text-lg shadow-xl"
//                   >
//                     <LogOut className="w-5 h-5" />
//                     Logout
//                   </button>
//                 </div>
//               </div>
//             )}

//             {/* Stats Bar */}
//             <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto">
//               {[
//                 { value: '10K+', label: 'Batches Created' },
//                 { value: '50+', label: 'Active Artisans' },
//                 { value: '100%', label: 'Secure & Verified' },
//               ].map((stat, i) => (
//                 <div key={i} className="text-center">
//                   <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-1">
//                     {stat.value}
//                   </div>
//                   <div className="text-sm text-white/50 font-medium">{stat.label}</div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Process Flow Section */}
//       <section className="container mx-auto px-6 py-24">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-20">
//             <h2 className="text-5xl md:text-6xl font-black mb-5 text-white">
//               Simple. Powerful. Secure.
//             </h2>
//             <p className="text-xl text-white/60 max-w-2xl mx-auto">
//               Our streamlined process makes blockchain authentication accessible to everyone
//             </p>
//           </div>

//           <div className="grid md:grid-cols-4 gap-6">
//             {[
//               { icon: Package, title: 'Upload', desc: 'Add product details and images', color: 'from-blue-500 to-cyan-500' },
//               { icon: Lock, title: 'Secure', desc: 'Data stored on IPFS', color: 'from-purple-500 to-pink-500' },
//               { icon: Zap, title: 'Mint', desc: 'Create blockchain certificate', color: 'from-orange-500 to-red-500' },
//               { icon: CheckCircle, title: 'Verify', desc: 'Share proof of authenticity', color: 'from-green-500 to-emerald-500' },
//             ].map((step, i) => (
//               <div key={i} className="relative group">
//                 <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 h-full">
//                   <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
//                     <step.icon className="w-8 h-8 text-white" />
//                   </div>
//                   <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
//                   <p className="text-white/60">{step.desc}</p>
//                 </div>
//                 {i < 3 && (
//                   <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-purple-500/50 to-transparent transform -translate-y-1/2"></div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Features Grid */}
//       <section className="container mx-auto px-6 py-24 relative">
//         <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 blur-3xl"></div>
        
//         <div className="relative max-w-6xl mx-auto">
//           <div className="text-center mb-20">
//             <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full mb-6">
//               <Shield className="w-4 h-4 text-purple-400" />
//               <span className="text-sm font-semibold text-purple-400">Enterprise-Grade Security</span>
//             </div>
//             <h2 className="text-5xl md:text-6xl font-black mb-5 text-white">
//               Built for Modern Creators
//             </h2>
//             <p className="text-xl text-white/60 max-w-2xl mx-auto">
//               Advanced features designed to protect and promote your craft
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {[
//               {
//                 icon: Globe,
//                 title: 'Decentralized Storage',
//                 description: 'Your data lives on IPFS, ensuring permanent availability and censorship resistance.',
//                 accent: 'blue'
//               },
//               {
//                 icon: Lock,
//                 title: 'Cryptographic Proof',
//                 description: 'Every certificate is mathematically verified on the Ethereum blockchain.',
//                 accent: 'purple'
//               },
//               {
//                 icon: Eye,
//                 title: 'Public Verification',
//                 description: 'Anyone can verify authenticity without revealing sensitive business data.',
//                 accent: 'pink'
//               },
//               {
//                 icon: TrendingUp,
//                 title: 'Value Appreciation',
//                 description: 'Build brand reputation through transparent provenance tracking.',
//                 accent: 'green'
//               },
//               {
//                 icon: Users,
//                 title: 'Community Building',
//                 description: 'Connect with buyers who value craftsmanship and transparency.',
//                 accent: 'orange'
//               },
//               {
//                 icon: Sparkles,
//                 title: 'NFT Standards',
//                 description: 'Built on ERC-721 for maximum compatibility and future-proofing.',
//                 accent: 'cyan'
//               },
//             ].map((feature, i) => (
//               <div 
//                 key={i} 
//                 className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-2"
//               >
//                 <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
//                   <feature.icon className="w-7 h-7 text-purple-400" />
//                 </div>
//                 <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
//                 <p className="text-white/60 leading-relaxed">{feature.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Testimonial-Style Section */}
//       <section className="container mx-auto px-6 py-24">
//         <div className="max-w-5xl mx-auto">
//           <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-xl border border-purple-500/20 rounded-3xl p-12 md:p-16">
//             <div className="grid md:grid-cols-2 gap-12 items-center">
//               <div>
//                 <div className="text-6xl mb-6">🎨</div>
//                 <h3 className="text-3xl md:text-4xl font-black text-white mb-6">
//                   Empowering Artisans Worldwide
//                 </h3>
//                 <p className="text-lg text-white/70 mb-8 leading-relaxed">
//                   From traditional weavers to modern craftspeople, our platform enables creators 
//                   to prove authenticity, protect their work, and build lasting relationships with conscious consumers.
//                 </p>
//                 <div className="flex flex-wrap gap-4">
//                   <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
//                     <CheckCircle className="w-5 h-5 text-green-400" />
//                     <span className="text-sm font-semibold text-white">Zero Setup Fees</span>
//                   </div>
//                   <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
//                     <CheckCircle className="w-5 h-5 text-green-400" />
//                     <span className="text-sm font-semibold text-white">Instant Verification</span>
//                   </div>
//                 </div>
//               </div>
              
//               <div className="space-y-4">
//                 {[
//                   { label: 'Textile Artists', value: '45%' },
//                   { label: 'Jewelry Makers', value: '30%' },
//                   { label: 'Woodworkers', value: '25%' },
//                 ].map((item, i) => (
//                   <div key={i}>
//                     <div className="flex justify-between mb-2">
//                       <span className="text-white/80 font-medium">{item.label}</span>
//                       <span className="text-purple-400 font-bold">{item.value}</span>
//                     </div>
//                     <div className="h-3 bg-white/10 rounded-full overflow-hidden">
//                       <div 
//                         className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
//                         style={{ width: item.value }}
//                       ></div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Final CTA Section */}
//       <section className="container mx-auto px-6 py-24">
//         <div className="max-w-4xl mx-auto text-center">
//           <div className="relative">
//             <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 blur-3xl rounded-full"></div>
//             <div className="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-12 md:p-16">
//               <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
//                 Ready to Transform Your Business?
//               </h2>
//               <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
//                 Join hundreds of artisans leveraging blockchain technology to build trust, 
//                 verify authenticity, and grow their brand.
//               </p>
              
//               {!isAuthenticated ? (
//                 <div className="flex flex-col sm:flex-row gap-5 justify-center mb-8">
//                   <button 
//                     onClick={() => openAuthModal('register')}
//                     disabled={loading}
//                     className="group relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold px-10 py-5 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl disabled:opacity-50"
//                   >
//                     <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
//                     <span className="relative flex items-center justify-center gap-3 text-lg">
//                       <UserPlus className="w-5 h-5" />
//                       {loading ? 'Connecting...' : 'Get Started Now'}
//                     </span>
//                   </button>
                  
//                   <a 
//                     href="https://docs.example.com" 
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="bg-white/10 hover:bg-white/20 backdrop-blur-xl border border-white/20 text-white font-bold px-10 py-5 rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 text-lg"
//                   >
//                     Read Documentation
//                     <FileText className="w-5 h-5" />
//                   </a>
//                 </div>
//               ) : (
//                 <div className="flex flex-col sm:flex-row gap-5 justify-center mb-8">
//                   <Link 
//                     href="/mint" 
//                     className="group relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold px-10 py-5 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl"
//                   >
//                     <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
//                     <span className="relative flex items-center justify-center gap-3 text-lg">
//                       Create Your First Batch
//                       <ArrowRight className="w-5 h-5" />
//                     </span>
//                   </Link>
                  
//                   <a 
//                     href="https://docs.example.com" 
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="bg-white/10 hover:bg-white/20 backdrop-blur-xl border border-white/20 text-white font-bold px-10 py-5 rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 text-lg"
//                   >
//                     Read Documentation
//                     <FileText className="w-5 h-5" />
//                   </a>
//                 </div>
//               )}

//               <p className="text-sm text-white/40">
//                 No credit card required • Live on Sepolia Testnet
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Modern Footer */}
//       <footer className="border-t border-white/10 bg-black/30 backdrop-blur-xl">
//         <div className="container mx-auto px-6 py-12">
//           <div className="grid md:grid-cols-4 gap-12 mb-12">
//             <div>
//               <div className="flex items-center gap-3 mb-4">
//                 <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-xl">
//                   🧵
//                 </div>
//                 <span className="text-xl font-black text-white">CraftChain</span>
//               </div>
//               <p className="text-white/60 text-sm leading-relaxed">
//                 Blockchain-powered authenticity verification for modern artisans.
//               </p>
//             </div>
            
//             <div>
//               <h4 className="text-white font-bold mb-4">Product</h4>
//               <ul className="space-y-2 text-white/60 text-sm">
//                 <li><Link href="/mint" className="hover:text-purple-400 transition-colors">Create Batch</Link></li>
//                 <li><Link href="/view" className="hover:text-purple-400 transition-colors">Track Batch</Link></li>
//                 <li><a href="#" className="hover:text-purple-400 transition-colors">Features</a></li>
//                 <li><a href="#" className="hover:text-purple-400 transition-colors">Pricing</a></li>
//               </ul>
//             </div>
            
//             <div>
//               <h4 className="text-white font-bold mb-4">Resources</h4>
//               <ul className="space-y-2 text-white/60 text-sm">
//                 <li><a href="#" className="hover:text-purple-400 transition-colors">Documentation</a></li>
//                 <li><a href="#" className="hover:text-purple-400 transition-colors">API Reference</a></li>
//                 <li><a href="#" className="hover:text-purple-400 transition-colors">GitHub</a></li>
//                 <li><a href="#" className="hover:text-purple-400 transition-colors">Community</a></li>
//               </ul>
//             </div>
            
//             <div>
//               <h4 className="text-white font-bold mb-4">Network</h4>
//               <ul className="space-y-2 text-white/60 text-sm">
//                 <li><a href="https://sepolia.etherscan.io" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">Sepolia Testnet</a></li>
//                 <li><span className="text-xs text-white/40">Contract: {process.env.NEXT_PUBLIC_CONTRACT_ADDRESS?.substring(0, 8)}...</span></li>
//               </ul>
//             </div>
//           </div>
          
//           <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
//             <p className="text-white/40 text-sm">
//               © 2025 CraftChain. Powered by Ethereum blockchain.
//             </p>
//             <div className="flex gap-6 text-white/40 text-sm">
//               <a href="#" className="hover:text-purple-400 transition-colors">Privacy</a>
//               <a href="#" className="hover:text-purple-400 transition-colors">Terms</a>
//               <a href="#" className="hover:text-purple-400 transition-colors">Security</a>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }

'use client';

import Link from 'next/link';
import { ArrowRight, Package, FileText, Eye, Shield, Sparkles, Users, Lock, Globe, Zap, CheckCircle, TrendingUp, LogIn, UserPlus, LogOut, X, Loader2 } from 'lucide-react';
import { useWallet } from '@/hooks/usewallet';
import { formatAddress } from '@/lib/ethers';
import { useState, useEffect } from 'react';

export default function Home() {
  const { account, isConnected, connect, disconnect, loading } = useWallet();
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-purple-950 to-slate-950">
      
      {/* Auth Modal */}
      {showAuthModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gradient-to-br from-slate-900 to-purple-900 border border-white/20 rounded-3xl p-8 max-w-md w-full relative shadow-2xl">
            <button
              onClick={() => setShowAuthModal(false)}
              className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="text-center mb-8">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                {authMode === 'login' ? <LogIn className="w-8 h-8 text-white" /> : <UserPlus className="w-8 h-8 text-white" />}
              </div>
              <h2 className="text-3xl font-black text-white mb-2">
                {authMode === 'login' ? 'Welcome Back' : 'Create Account'}
              </h2>
              <p className="text-white/60">
                {authMode === 'login' ? 'Login with your wallet' : 'Register your account'}
              </p>
            </div>

            {error && (
              <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 mb-6">
                <p className="text-red-400 text-sm">{error}</p>
              </div>
            )}

            {success && (
              <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4 mb-6">
                <p className="text-green-400 text-sm flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  {success}
                </p>
              </div>
            )}

            {authMode === 'register' ? (
              <form onSubmit={handleRegister} className="space-y-5">
                <div>
                  <label className="block text-white/80 font-semibold mb-2 text-sm">Full Name *</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="John Doe"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-purple-500/50 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-white/80 font-semibold mb-2 text-sm">Email Address *</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="john@example.com"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-purple-500/50 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-white/80 font-semibold mb-2 text-sm">Password *</label>
                  <input
                    type="password"
                    value={formData.password}
                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                    placeholder="At least 6 characters"
                    required
                    minLength={6}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-purple-500/50 transition-all"
                  />
                </div>

                <div className="bg-purple-500/10 border border-purple-500/20 rounded-xl p-4">
                  <p className="text-white/70 text-xs flex items-center gap-2">
                    <Lock className="w-4 h-4" />
                    Your account will be created securely with encrypted password
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={authLoading}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 rounded-xl transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {authLoading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      <UserPlus className="w-5 h-5" />
                      Register Account
                    </>
                  )}
                </button>

                <p className="text-center text-white/60 text-sm">
                  Already have an account?{' '}
                  <button
                    type="button"
                    onClick={() => setAuthMode('login')}
                    className="text-purple-400 hover:text-purple-300 font-semibold"
                  >
                    Login
                  </button>
                </p>
              </form>
            ) : (
              <div className="space-y-5">
                <div className="bg-purple-500/10 border border-purple-500/20 rounded-xl p-4">
                  <p className="text-white/70 text-sm flex items-center gap-2">
                    <Lock className="w-4 h-4" />
                    Connect your wallet to login automatically
                  </p>
                </div>

                <button
                  onClick={handleLogin}
                  disabled={authLoading}
                  className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold py-4 rounded-xl transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {authLoading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Connecting...
                    </>
                  ) : (
                    <>
                      <LogIn className="w-5 h-5" />
                      Login with Wallet
                    </>
                  )}
                </button>

                <p className="text-center text-white/60 text-sm">
                  Don't have an account?{' '}
                  <button
                    type="button"
                    onClick={() => setAuthMode('register')}
                    className="text-purple-400 hover:text-purple-300 font-semibold"
                  >
                    Register
                  </button>
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Hero Section with Animated Background */}
      <section className="relative overflow-hidden">
        {/* Animated gradient orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-600/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        <div className="relative container mx-auto px-6 py-24 md:py-36">
          <div className="max-w-5xl mx-auto">
            
            {/* Announcement Badge */}
            <div className="flex justify-center mb-8">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-md border border-purple-500/30 rounded-full">
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span className="text-sm font-semibold text-white/90">Blockchain Authentication Platform</span>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </div>
            </div>
            
            {/* Main Headline */}
            <h1 className="text-6xl md:text-8xl font-black text-center mb-8 leading-tight">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Authenticity
              </span>
              <br />
              <span className="text-white">Meets Innovation</span>
            </h1>
            
            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-center text-white/60 mb-12 max-w-3xl mx-auto leading-relaxed">
              Revolutionize product verification with decentralized blockchain technology. 
              Create verifiable digital certificates for your crafted goods in minutes.
            </p>
            
            {/* Auth Buttons Section */}
            {!isAuthenticated ? (
              <div className="flex flex-col sm:flex-row gap-5 justify-center mb-16">
                <button 
                  onClick={() => openAuthModal('login')}
                  disabled={loading}
                  className="group relative overflow-hidden bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold px-10 py-5 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  <span className="relative flex items-center justify-center gap-3 text-lg">
                    <LogIn className="w-5 h-5" />
                    {loading ? 'Connecting...' : 'Login with Wallet'}
                  </span>
                </button>
                
                <button 
                  onClick={() => openAuthModal('register')}
                  disabled={loading}
                  className="group relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold px-10 py-5 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  <span className="relative flex items-center justify-center gap-3 text-lg">
                    <UserPlus className="w-5 h-5" />
                    {loading ? 'Connecting...' : 'Register Account'}
                  </span>
                </button>
              </div>
            ) : (
              <div className="flex flex-col items-center gap-5 mb-16">
                {/* Connected Status Card */}
                <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-xl border border-green-500/30 rounded-2xl px-8 py-4 flex items-center gap-4">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <div>
                    <div className="text-sm text-white/60 font-medium">Welcome back, {userData?.name}!</div>
                    <div className="text-white font-bold text-lg">{formatAddress(userData?.walletAddress || account)}</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href="/mint" 
                    className="group relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold px-10 py-5 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    <span className="relative flex items-center justify-center gap-3 text-lg">
                      Start Creating
                      <ArrowRight className="w-5 h-5" />
                    </span>
                  </Link>
                  
                  <Link 
                    href="/view" 
                    className="bg-white/10 hover:bg-white/20 backdrop-blur-xl border border-white/20 text-white font-bold px-10 py-5 rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 text-lg shadow-xl"
                  >
                    Explore Batches
                    <Eye className="w-5 h-5" />
                  </Link>

                  <button 
                    onClick={handleLogout}
                    className="bg-red-500/20 hover:bg-red-500/30 backdrop-blur-xl border border-red-500/30 text-red-400 font-bold px-10 py-5 rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 text-lg shadow-xl"
                  >
                    <LogOut className="w-5 h-5" />
                    Logout
                  </button>
                </div>
              </div>
            )}

            {/* Stats Bar */}
            <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto">
              {[
                { value: '10K+', label: 'Batches Created' },
                { value: '50+', label: 'Active Artisans' },
                { value: '100%', label: 'Secure & Verified' },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/50 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Flow Section */}
      <section className="container mx-auto px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black mb-5 text-white">
              Simple. Powerful. Secure.
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Our streamlined process makes blockchain authentication accessible to everyone
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: Package, title: 'Upload', desc: 'Add product details and images', color: 'from-blue-500 to-cyan-500' },
              { icon: Lock, title: 'Secure', desc: 'Data stored on IPFS', color: 'from-purple-500 to-pink-500' },
              { icon: Zap, title: 'Mint', desc: 'Create blockchain certificate', color: 'from-orange-500 to-red-500' },
              { icon: CheckCircle, title: 'Verify', desc: 'Share proof of authenticity', color: 'from-green-500 to-emerald-500' },
            ].map((step, i) => (
              <div key={i} className="relative group">
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 h-full">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-white/60">{step.desc}</p>
                </div>
                {i < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-purple-500/50 to-transparent transform -translate-y-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-6 py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 blur-3xl"></div>
        
        <div className="relative max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full mb-6">
              <Shield className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-semibold text-purple-400">Enterprise-Grade Security</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-5 text-white">
              Built for Modern Creators
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Advanced features designed to protect and promote your craft
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Globe,
                title: 'Decentralized Storage',
                description: 'Your data lives on IPFS, ensuring permanent availability and censorship resistance.',
                accent: 'blue'
              },
              {
                icon: Lock,
                title: 'Cryptographic Proof',
                description: 'Every certificate is mathematically verified on the Ethereum blockchain.',
                accent: 'purple'
              },
              {
                icon: Eye,
                title: 'Public Verification',
                description: 'Anyone can verify authenticity without revealing sensitive business data.',
                accent: 'pink'
              },
              {
                icon: TrendingUp,
                title: 'Value Appreciation',
                description: 'Build brand reputation through transparent provenance tracking.',
                accent: 'green'
              },
              {
                icon: Users,
                title: 'Community Building',
                description: 'Connect with buyers who value craftsmanship and transparency.',
                accent: 'orange'
              },
              {
                icon: Sparkles,
                title: 'NFT Standards',
                description: 'Built on ERC-721 for maximum compatibility and future-proofing.',
                accent: 'cyan'
              },
            ].map((feature, i) => (
              <div 
                key={i} 
                className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-7 h-7 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-white/60 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial-Style Section */}
      <section className="container mx-auto px-6 py-24">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-xl border border-purple-500/20 rounded-3xl p-12 md:p-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="text-6xl mb-6">🎨</div>
                <h3 className="text-3xl md:text-4xl font-black text-white mb-6">
                  Empowering Artisans Worldwide
                </h3>
                <p className="text-lg text-white/70 mb-8 leading-relaxed">
                  From traditional weavers to modern craftspeople, our platform enables creators 
                  to prove authenticity, protect their work, and build lasting relationships with conscious consumers.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-sm font-semibold text-white">Zero Setup Fees</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-sm font-semibold text-white">Instant Verification</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                {[
                  { label: 'Textile Artists', value: '45%' },
                  { label: 'Jewelry Makers', value: '30%' },
                  { label: 'Woodworkers', value: '25%' },
                ].map((item, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-2">
                      <span className="text-white/80 font-medium">{item.label}</span>
                      <span className="text-purple-400 font-bold">{item.value}</span>
                    </div>
                    <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                        style={{ width: item.value }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="container mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 blur-3xl rounded-full"></div>
            <div className="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-12 md:p-16">
              <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
                Join hundreds of artisans leveraging blockchain technology to build trust, 
                verify authenticity, and grow their brand.
              </p>
              
              {!isAuthenticated ? (
                <div className="flex flex-col sm:flex-row gap-5 justify-center mb-8">
                  <button 
                    onClick={() => openAuthModal('register')}
                    disabled={loading}
                    className="group relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold px-10 py-5 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl disabled:opacity-50"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    <span className="relative flex items-center justify-center gap-3 text-lg">
                      <UserPlus className="w-5 h-5" />
                      {loading ? 'Connecting...' : 'Get Started Now'}
                    </span>
                  </button>
                  
                  <a 
                    href="https://docs.example.com" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 hover:bg-white/20 backdrop-blur-xl border border-white/20 text-white font-bold px-10 py-5 rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 text-lg"
                  >
                    Read Documentation
                    <FileText className="w-5 h-5" />
                  </a>
                </div>
              ) : (
                <div className="flex flex-col sm:flex-row gap-5 justify-center mb-8">
                  <Link 
                    href="/mint" 
                    className="group relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold px-10 py-5 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    <span className="relative flex items-center justify-center gap-3 text-lg">
                      Create Your First Batch
                      <ArrowRight className="w-5 h-5" />
                    </span>
                  </Link>
                  
                  <a 
                    href="https://docs.example.com" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 hover:bg-white/20 backdrop-blur-xl border border-white/20 text-white font-bold px-10 py-5 rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 text-lg"
                  >
                    Read Documentation
                    <FileText className="w-5 h-5" />
                  </a>
                </div>
              )}

              <p className="text-sm text-white/40">
                No credit card required • Live on Sepolia Testnet
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Footer */}
      <footer className="border-t border-white/10 bg-black/30 backdrop-blur-xl">
        <div className="container mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-xl">
                  🧵
                </div>
                <span className="text-xl font-black text-white">CraftChain</span>
              </div>
              <p className="text-white/60 text-sm leading-relaxed">
                Blockchain-powered authenticity verification for modern artisans.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4">Product</h4>
              <ul className="space-y-2 text-white/60 text-sm">
                <li><Link href="/mint" className="hover:text-purple-400 transition-colors">Create Batch</Link></li>
                <li><Link href="/view" className="hover:text-purple-400 transition-colors">Track Batch</Link></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Pricing</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4">Resources</h4>
              <ul className="space-y-2 text-white/60 text-sm">
                <li><a href="#" className="hover:text-purple-400 transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">API Reference</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">GitHub</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Community</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4">Network</h4>
              <ul className="space-y-2 text-white/60 text-sm">
                <li><a href="https://sepolia.etherscan.io" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">Sepolia Testnet</a></li>
                <li><span className="text-xs text-white/40">Contract: {process.env.NEXT_PUBLIC_CONTRACT_ADDRESS?.substring(0, 8)}...</span></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-sm">
              © 2025 CraftChain. Powered by Ethereum blockchain.
            </p>
            <div className="flex gap-6 text-white/40 text-sm">
              <a href="#" className="hover:text-purple-400 transition-colors">Privacy</a>
              <a href="#" className="hover:text-purple-400 transition-colors">Terms</a>
              <a href="#" className="hover:text-purple-400 transition-colors">Security</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
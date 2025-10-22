// 'use client';

// import Link from 'next/link';
// import { useWallet } from '@/hooks/usewallet';
// import { formatAddress } from '@/lib/ethers';
// import { Menu, X } from 'lucide-react';
// import { useState } from 'react';

// export default function Header() {
//   const { account, isConnected, connect, disconnect, loading } = useWallet();
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   const handleConnect = async () => {
//     try {
//       await connect();
//     } catch (error) {
//       alert('Failed to connect wallet: ' + error.message);
//     }
//   };

//   return (
//     <header className="fixed top-0 w-full z-50 bg-dark/80 backdrop-blur-xl border-b border-primary/20">
//       <nav className="container mx-auto px-4 py-4">
//         <div className="flex items-center justify-between">
//           {/* Logo */}
//           <Link href="/" className="flex items-center gap-2 text-2xl font-bold">
//             <span className="text-3xl">🧵</span>
//             <span className="text-white">Craft-Chain</span>
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center gap-8">
//             <Link 
//               href="/mint" 
//               className="text-white/80 hover:text-primary transition-colors font-medium"
//             >
//               Mint Batch
//             </Link>
//             <Link 
//               href="/record-step" 
//               className="text-white/80 hover:text-primary transition-colors font-medium"
//             >
//               Record Step
//             </Link>
//             <Link 
//               href="/view" 
//               className="text-white/80 hover:text-primary transition-colors font-medium"
//             >
//               Track Batch
//             </Link>
//           </div>

//           {/* Wallet Connect Button */}
//           <div className="hidden md:block">
//             {isConnected ? (
//               <div className="flex items-center gap-3">
//                 <div className="glass px-4 py-2 rounded-lg">
//                   <span className="text-sm font-medium text-primary">
//                     {formatAddress(account)}
//                   </span>
//                 </div>
//                 <button
//                   onClick={disconnect}
//                   className="btn-secondary text-sm"
//                 >
//                   Disconnect
//                 </button>
//               </div>
//             ) : (
//               <button
//                 onClick={handleConnect}
//                 disabled={loading}
//                 className="btn-primary"
//               >
//                 {loading ? 'Connecting...' : 'Connect Wallet'}
//               </button>
//             )}
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             className="md:hidden text-white"
//             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//           >
//             {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {mobileMenuOpen && (
//           <div className="md:hidden mt-4 pb-4 space-y-3">
//             <Link 
//               href="/mint" 
//               className="block text-white/80 hover:text-primary transition-colors py-2"
//               onClick={() => setMobileMenuOpen(false)}
//             >
//               Mint Batch
//             </Link>
//             <Link 
//               href="/record-step" 
//               className="block text-white/80 hover:text-primary transition-colors py-2"
//               onClick={() => setMobileMenuOpen(false)}
//             >
//               Record Step
//             </Link>
//             <Link 
//               href="/view" 
//               className="block text-white/80 hover:text-primary transition-colors py-2"
//               onClick={() => setMobileMenuOpen(false)}
//             >
//               Track Batch
//             </Link>
            
//             <div className="pt-3 border-t border-primary/20">
//               {isConnected ? (
//                 <div className="space-y-2">
//                   <div className="glass px-4 py-2 rounded-lg text-center">
//                     <span className="text-sm font-medium text-primary">
//                       {formatAddress(account)}
//                     </span>
//                   </div>
//                   <button
//                     onClick={disconnect}
//                     className="btn-secondary w-full"
//                   >
//                     Disconnect
//                   </button>
//                 </div>
//               ) : (
//                 <button
//                   onClick={handleConnect}
//                   disabled={loading}
//                   className="btn-primary w-full"
//                 >
//                   {loading ? 'Connecting...' : 'Connect Wallet'}
//                 </button>
//               )}
//             </div>
//           </div>
//         )}
//       </nav>
//     </header>
//   );
// }

'use client';

import Link from 'next/link';
import { useWallet } from '@/hooks/usewallet';
import { formatAddress } from '@/lib/ethers';
import { Menu, X, Wallet, ChevronDown, LogOut, Home, Package, FileEdit, Search } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const { account, isConnected, connect, disconnect, loading } = useWallet();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [walletDropdown, setWalletDropdown] = useState(false);

  const handleConnect = async () => {
    try {
      await connect();
    } catch (error) {
      alert('Failed to connect wallet: ' + error.message);
    }
  };

  const navItems = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/mint', label: 'Create', icon: Package },
    { href: '/record-step', label: 'Record', icon: FileEdit },
    { href: '/view', label: 'Explore', icon: Search },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-slate-950/90 backdrop-blur-2xl border-b border-white/10 shadow-2xl">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo with Gradient */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur-md opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">🎨</span>
              </div>
            </div>
            <div>
              <span className="text-xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                CraftChain
              </span>
              <div className="text-xs text-white/40 font-medium">Blockchain Auth</div>
            </div>
          </Link>

          {/* Desktop Navigation with Icons */}
          <div className="hidden lg:flex items-center gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group flex items-center gap-2 px-5 py-2.5 rounded-xl text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300 font-medium"
              >
                <item.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>{item.label}</span>
              </Link>
            ))}
          </div>

          {/* Wallet Section - Desktop */}
          <div className="hidden lg:block">
            {isConnected ? (
              <div className="relative">
                <button
                  onClick={() => setWalletDropdown(!walletDropdown)}
                  className="flex items-center gap-3 px-5 py-3 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 hover:border-purple-500/50 transition-all duration-300 group"
                >
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-white font-semibold text-sm">
                    {formatAddress(account)}
                  </span>
                  <ChevronDown className={`w-4 h-4 text-white/60 transition-transform duration-300 ${walletDropdown ? 'rotate-180' : ''}`} />
                </button>

                {/* Dropdown Menu */}
                {walletDropdown && (
                  <div className="absolute right-0 mt-2 w-64 bg-slate-900/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
                    <div className="p-4 border-b border-white/10">
                      <div className="text-xs text-white/50 mb-1">Connected Address</div>
                      <div className="text-white font-mono text-sm">{formatAddress(account)}</div>
                    </div>
                    <button
                      onClick={() => {
                        disconnect();
                        setWalletDropdown(false);
                      }}
                      className="w-full flex items-center gap-3 px-4 py-3 text-left text-red-400 hover:bg-red-500/10 transition-colors"
                    >
                      <LogOut className="w-4 h-4" />
                      <span className="font-medium">Disconnect Wallet</span>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={handleConnect}
                disabled={loading}
                className="relative overflow-hidden group flex items-center gap-3 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <Wallet className="w-5 h-5 relative z-10" />
                <span className="relative z-10">
                  {loading ? 'Connecting...' : 'Connect Wallet'}
                </span>
              </button>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 rounded-xl hover:bg-white/10 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 top-[73px] bg-slate-950/98 backdrop-blur-2xl z-40">
            <div className="container mx-auto px-6 py-8 h-full flex flex-col">
              
              {/* Mobile Navigation */}
              <div className="space-y-2 mb-8">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-4 px-5 py-4 rounded-2xl text-white hover:bg-white/10 transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <item.icon className="w-5 h-5 text-purple-400" />
                    </div>
                    <span className="text-lg font-semibold">{item.label}</span>
                  </Link>
                ))}
              </div>

              {/* Mobile Wallet Section */}
              <div className="mt-auto space-y-4">
                {isConnected ? (
                  <>
                    <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl p-5">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-xs text-white/60 font-semibold uppercase">Connected</span>
                      </div>
                      <div className="text-white font-mono text-sm">{formatAddress(account)}</div>
                    </div>
                    <button
                      onClick={() => {
                        disconnect();
                        setMobileMenuOpen(false);
                      }}
                      className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-400 hover:bg-red-500/20 transition-all duration-300 font-bold"
                    >
                      <LogOut className="w-5 h-5" />
                      <span>Disconnect Wallet</span>
                    </button>
                  </>
                ) : (
                  <button
                    onClick={handleConnect}
                    disabled={loading}
                    className="w-full relative overflow-hidden group flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold transition-all duration-300 shadow-lg disabled:opacity-50"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    <Wallet className="w-5 h-5 relative z-10" />
                    <span className="relative z-10">
                      {loading ? 'Connecting...' : 'Connect Wallet'}
                    </span>
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
import { useState } from "react";
import { ethers } from "ethers";

export default function Navbar() {
  const [account, setAccount] = useState("");

  async function connectWallet() {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
      setAccount(accounts[0]);
    } else {
      alert("Install MetaMask first!");
    }
  }

  return (
    <nav className="p-4 flex justify-between bg-green-800 text-white">
      <h1 className="font-bold text-xl">Craft-Chain</h1>
      <button onClick={connectWallet} className="bg-green-500 px-4 py-2 rounded">
        {account ? account.slice(0, 6) + "..." + account.slice(-4) : "Connect Wallet"}
      </button>
    </nav>
  );
}

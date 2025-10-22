import { useState } from "react";
import { ethers } from "ethers";
import { CONTRACT_ADDRESS } from "../utils/constants";
import ABI from "../utils/contractABI.json";

export default function RecordStep() {
  const [tokenId, setTokenId] = useState("");
  const [cid, setCid] = useState("");

  async function record() {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI.abi, signer);

    const tx = await contract.recordStep(tokenId, cid);
    await tx.wait();
    alert("Step Recorded!");
  }

  return (
    <div className="p-10">
      <h2 className="text-2xl mb-4">Record Supply Chain Step</h2>
      <input placeholder="Token ID" value={tokenId} onChange={(e) => setTokenId(e.target.value)} />
      <input placeholder="Step CID" value={cid} onChange={(e) => setCid(e.target.value)} className="ml-2" />
      <button onClick={record} className="bg-blue-600 text-white px-4 py-2 rounded ml-3">
        Record
      </button>
    </div>
  );
}

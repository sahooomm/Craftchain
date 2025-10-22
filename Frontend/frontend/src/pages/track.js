import { useState } from "react";
import { ethers } from "ethers";
import { CONTRACT_ADDRESS } from "../utils/constants";
import ABI from "../utils/contractABI.json";

export default function TrackBatch() {
  const [tokenId, setTokenId] = useState("");
  const [steps, setSteps] = useState([]);

  async function loadSteps() {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI.abi, provider);
    const result = await contract.getSteps(tokenId);
    setSteps(result);
  }

  return (
    <div className="p-10">
      <h2 className="text-2xl mb-4">Track Batch Journey</h2>
      <input placeholder="Token ID" value={tokenId} onChange={(e) => setTokenId(e.target.value)} />
      <button onClick={loadSteps} className="bg-green-600 text-white px-4 py-2 rounded ml-3">
        Load
      </button>

      <ul className="mt-4">
        {steps.map((s, i) => (
          <li key={i} className="border p-2 my-2 rounded">
            Actor: {s.actor}<br />
            CID: {s.descriptionCID}<br />
            Time: {new Date(Number(s.timestamp) * 1000).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
}

import { useState } from "react";
import { ethers } from "ethers";
import { CONTRACT_ADDRESS } from "../utils/constants";

import { uploadFile } from "../utils/ipfs";

export default function MintBatch() {
  const [file, setFile] = useState(null);
  const [uri, setURI] = useState("");

  async function mintBatch() {
    if (!file) return alert("Upload metadata JSON file or image first");
    const metadataURL = await uploadFile(file);
    setURI(metadataURL);

    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI.abi, signer);

    const tx = await contract.mintBatch(await signer.getAddress(), metadataURL);
    await tx.wait();

    alert("Batch Minted Successfully!");
  }

  return (
    <div className="p-10">
      <h2 className="text-2xl mb-4">Mint New Craft Batch</h2>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={mintBatch} className="bg-green-600 text-white px-4 py-2 rounded ml-3">
        Mint
      </button>
      {uri && <p className="mt-4 text-sm text-gray-700">IPFS: {uri}</p>}
    </div>
  );
}

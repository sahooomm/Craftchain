import { ethers } from "ethers";
import contractABI from "./Record.json";

const contractAddress = "0x-F665056ccf59f843061B55eF170e30Cd6441545b";

export const getContract = async () => {
  if (!window.ethereum) {
    alert("Please install MetaMask!");
    return null;
  }

  const provider = new ethers.BrowserProvider(window.ethereum);
  const signer = await provider.getSigner();
  const contract = new ethers.Contract(contractAddress, contractABI.abi, signer);
  return contract;
};

// import axios from 'axios';

// const PINATA_API_KEY =;
// const PINATA_SECRET = "6fa7ccd60f78602b983f6c2ce300748d6fca824b91c9efcbb7e3ae923a03af8";
// const PINATA_GATEWAY = 'https://gateway.pinata.cloud';

// /**
//  * Upload JSON metadata to IPFS
//  */
// export async function uploadJSON(jsonData) {
//   const url = 'https://api.pinata.cloud/pinning/pinJSONToIPFS';
  
//   try {
//     const response = await axios.post(url, jsonData, {
//       headers: {
//         'Content-Type': 'application/json',
//         'pinata_api_key': PINATA_API_KEY,
//         'pinata_secret_api_key': PINATA_SECRET,
//       },
//     });
    
//     const ipfsHash = response.data.IpfsHash;
//     return `ipfs://${ipfsHash}`;
//   } catch (error) {
//     console.error('Error uploading JSON to IPFS:', error);
//     throw new Error('Failed to upload to IPFS');
//   }
// }

// /**
//  * Upload file (image) to IPFS
//  */
// export async function uploadFile(file) {
//   const url = 'https://api.pinata.cloud/pinning/pinFileToIPFS';
  
//   const formData = new FormData();
//   formData.append('file', file);
  
//   try {
//     const response = await axios.post(url, formData, {
//       headers: {
//         'Content-Type': 'multipart/form-data',
//         'pinata_api_key': PINATA_API_KEY,
//         'pinata_secret_api_key': PINATA_SECRET,
//       },
//     });
    
//     const ipfsHash = response.data.IpfsHash;
//     return `ipfs://${ipfsHash}`;
//   } catch (error) {
//     console.error('Error uploading file to IPFS:', error);
//     throw new Error('Failed to upload file to IPFS');
//   }
// }

// /**
//  * Fetch data from IPFS
//  */
// export async function fetchFromIPFS(ipfsUrl) {
//   if (!ipfsUrl) return null;
  
//   const hash = ipfsUrl.replace('ipfs://', '');
//   const url = `${PINATA_GATEWAY}/ipfs/${hash}`;
  
//   try {
//     const response = await axios.get(url);
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching from IPFS:', error);
//     throw new Error('Failed to fetch from IPFS');
//   }
// }

// /**
//  * Convert IPFS URL to HTTP URL
//  */
// export function ipfsToHttp(ipfsUrl, gateway = 'pinata') {
//   if (!ipfsUrl) return '';
  
//   const hash = ipfsUrl.replace('ipfs://', '');
  
//   const gateways = {
//     pinata: `https://gateway.pinata.cloud/ipfs/${hash}`,
//     ipfs: `https://ipfs.io/ipfs/${hash}`,
//     cloudflare: `https://cloudflare-ipfs.com/ipfs/${hash}`,
//   };
  
//   return gateways[gateway] || gateways.pinata;
// }

// /**
//  * Test Pinata connection
//  */
// export async function testConnection() {
//   try {
//     const testData = {
//       message: 'Test from CraftChain',
//       timestamp: new Date().toISOString(),
//     };
    
//     const ipfsUrl = await uploadJSON(testData);
//     console.log('✅ Pinata connection successful!');
//     console.log('Test file:', ipfsUrl);
//     return true;
//   } catch (error) {
//     console.error('❌ Pinata connection failed:', error);
//     return false;
//   }
// }


import axios from 'axios';

// IMPORTANT: Move these to .env.local file for security
// Never commit API keys to version control!
const PINATA_JWT = process.env.NEXT_PUBLIC_PINATA_JWT || '';
const PINATA_API_KEY = process.env.NEXT_PUBLIC_PINATA_API_KEY || '';
const PINATA_SECRET = process.env.NEXT_PUBLIC_PINATA_SECRET_API_KEY || '';
const PINATA_GATEWAY = 'https://gateway.pinata.cloud';

// Debug logging (remove after fixing)
console.log('🔍 Pinata credentials check:');
if (PINATA_JWT) {
  console.log('✅ Using JWT authentication');
  console.log('JWT length:', PINATA_JWT.length);
  console.log('JWT preview:', PINATA_JWT.substring(0, 20) + '...');
} else if (PINATA_API_KEY && PINATA_SECRET) {
  console.log('✅ Using API Key authentication');
  console.log('API Key length:', PINATA_API_KEY.length);
  console.log('Secret length:', PINATA_SECRET.length);
} else {
  console.error('❌ No Pinata credentials found!');
}

/**
 * Get authentication headers
 */
function getAuthHeaders() {
  if (PINATA_JWT) {
    return {
      'Authorization': `Bearer ${PINATA_JWT}`
    };
  } else if (PINATA_API_KEY && PINATA_SECRET) {
    return {
      'pinata_api_key': PINATA_API_KEY,
      'pinata_secret_api_key': PINATA_SECRET
    };
  } else {
    throw new Error(
      'Pinata credentials not configured. Please add NEXT_PUBLIC_PINATA_JWT or API keys to .env.local'
    );
  }
}

/**
 * Check if Pinata credentials are configured
 */
function checkCredentials() {
  if (!PINATA_JWT && (!PINATA_API_KEY || !PINATA_SECRET)) {
    throw new Error(
      'Pinata API credentials not found. Please add NEXT_PUBLIC_PINATA_JWT (recommended) or NEXT_PUBLIC_PINATA_API_KEY + NEXT_PUBLIC_PINATA_SECRET_API_KEY to your .env.local file'
    );
  }
}

/**
 * Upload JSON metadata to IPFS
 */
export async function uploadJSON(jsonData) {
  checkCredentials();
  
  const url = 'https://api.pinata.cloud/pinning/pinJSONToIPFS';
  
  try {
    console.log('📤 Uploading JSON to Pinata...');
    
    const response = await axios.post(url, jsonData, {
      headers: {
        'Content-Type': 'application/json',
        ...getAuthHeaders(),
      },
      timeout: 30000, // 30 second timeout
    });
    
    const ipfsHash = response.data.IpfsHash;
    console.log('✅ JSON uploaded successfully:', ipfsHash);
    return `ipfs://${ipfsHash}`;
  } catch (error) {
    console.error('❌ Error uploading JSON to IPFS:', error);
    
    if (error.response) {
      // Server responded with error
      console.error('Response data:', error.response.data);
      console.error('Response status:', error.response.status);
      
      if (error.response.status === 401) {
        throw new Error('Invalid Pinata API credentials. Please check your API keys.');
      } else if (error.response.status === 429) {
        throw new Error('Rate limit exceeded. Please try again later.');
      } else {
        throw new Error(`Pinata API error: ${error.response.data.error || error.response.statusText}`);
      }
    } else if (error.request) {
      // Request made but no response
      console.error('No response received:', error.request);
      throw new Error('No response from Pinata. Please check your internet connection.');
    } else {
      // Error in request setup
      console.error('Error message:', error.message);
      throw new Error(`Failed to upload JSON: ${error.message}`);
    }
  }
}

/**
 * Upload file (image) to IPFS
 */
export async function uploadFile(file) {
  checkCredentials();
  
  const url = 'https://api.pinata.cloud/pinning/pinFileToIPFS';
  
  if (!file) {
    throw new Error('No file provided for upload');
  }
  
  // Check file size (10MB limit)
  const maxSize = 10 * 1024 * 1024; // 10MB
  if (file.size > maxSize) {
    throw new Error(`File size (${(file.size / 1024 / 1024).toFixed(2)}MB) exceeds 10MB limit`);
  }
  
  const formData = new FormData();
  formData.append('file', file);
  
  // Add metadata
  const metadata = JSON.stringify({
    name: file.name,
  });
  formData.append('pinataMetadata', metadata);
  
  try {
    console.log(`📤 Uploading file to Pinata: ${file.name} (${(file.size / 1024).toFixed(2)} KB)`);
    
    const response = await axios.post(url, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        ...getAuthHeaders(),
      },
      timeout: 60000, // 60 second timeout for file uploads
      maxContentLength: Infinity,
      maxBodyLength: Infinity,
    });
    
    const ipfsHash = response.data.IpfsHash;
    console.log('✅ File uploaded successfully:', ipfsHash);
    return `ipfs://${ipfsHash}`;
  } catch (error) {
    console.error('❌ Error uploading file to IPFS:', error);
    
    if (error.response) {
      console.error('Response data:', error.response.data);
      console.error('Response status:', error.response.status);
      
      if (error.response.status === 401) {
        throw new Error('Invalid Pinata API credentials. Please check your API keys.');
      } else if (error.response.status === 429) {
        throw new Error('Rate limit exceeded. Please try again later.');
      } else if (error.response.status === 413) {
        throw new Error('File too large. Please use a smaller image.');
      } else {
        throw new Error(`Pinata API error: ${error.response.data.error || error.response.statusText}`);
      }
    } else if (error.request) {
      console.error('No response received');
      throw new Error('No response from Pinata. Please check your internet connection.');
    } else {
      console.error('Error message:', error.message);
      throw new Error(`Failed to upload file: ${error.message}`);
    }
  }
}

/**
 * Fetch data from IPFS
 */
export async function fetchFromIPFS(ipfsUrl) {
  if (!ipfsUrl) return null;
  
  const hash = ipfsUrl.replace('ipfs://', '');
  const url = `${PINATA_GATEWAY}/ipfs/${hash}`;
  
  try {
    const response = await axios.get(url, {
      timeout: 15000, // 15 second timeout
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching from IPFS:', error);
    throw new Error(`Failed to fetch from IPFS: ${error.message}`);
  }
}

/**
 * Convert IPFS URL to HTTP URL
 */
export function ipfsToHttp(ipfsUrl, gateway = 'pinata') {
  if (!ipfsUrl) return '';
  
  const hash = ipfsUrl.replace('ipfs://', '');
  
  const gateways = {
    pinata: `https://gateway.pinata.cloud/ipfs/${hash}`,
    ipfs: `https://ipfs.io/ipfs/${hash}`,
    cloudflare: `https://cloudflare-ipfs.com/ipfs/${hash}`,
  };
  
  return gateways[gateway] || gateways.pinata;
}

/**
 * Test Pinata connection
 */
export async function testConnection() {
  try {
    checkCredentials();
    
    console.log('🔍 Testing Pinata connection...');
    
    // Test authentication endpoint
    const authUrl = 'https://api.pinata.cloud/data/testAuthentication';
    const authResponse = await axios.get(authUrl, {
      headers: getAuthHeaders(),
    });
    
    console.log('✅ Pinata authentication successful!');
    console.log('Message:', authResponse.data.message);
    
    // Test with a small JSON upload
    const testData = {
      message: 'Test from CraftChain',
      timestamp: new Date().toISOString(),
    };
    
    const ipfsUrl = await uploadJSON(testData);
    console.log('✅ Test upload successful!');
    console.log('Test file URL:', ipfsToHttp(ipfsUrl));
    
    return { success: true, testUrl: ipfsUrl };
  } catch (error) {
    console.error('❌ Pinata connection test failed:', error.message);
    return { success: false, error: error.message };
  }
}
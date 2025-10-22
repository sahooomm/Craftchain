// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract CraftBatch721 is ERC721, AccessControl {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");

    mapping(uint256 => string) private _tokenURIs;

    struct Step {
        address actor;
        string descriptionCID;
        uint256 timestamp;
    }

    mapping(uint256 => Step[]) private _steps;

    event StepRecorded(
        uint256 indexed tokenId,
        address indexed actor,
        string descriptionCID,
        uint256 timestamp
    );

    constructor() ERC721("CraftBatch", "CBATCH") {
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _grantRole(MINTER_ROLE, msg.sender);
    }

    // ✅ Renamed parameter 'uri' to avoid shadowing warning
    function mintBatch(address to, string memory uri)
        external
        onlyRole(MINTER_ROLE)
        returns (uint256)
    {
        _tokenIds.increment();
        uint256 newTokenId = _tokenIds.current();
        _mint(to, newTokenId);
        _setTokenURI(newTokenId, uri);
        return newTokenId;
    }

    function recordStep(uint256 tokenId, string memory stepCID) external {
        require(_exists(tokenId), "Token does not exist");
        require(ownerOf(tokenId) == msg.sender, "Only owner can record step");

        Step memory newStep = Step(msg.sender, stepCID, block.timestamp);
        _steps[tokenId].push(newStep);
        emit StepRecorded(tokenId, msg.sender, stepCID, block.timestamp);
    }

    function getSteps(uint256 tokenId)
        external
        view
        returns (Step[] memory)
    {
        require(_exists(tokenId), "Token does not exist");
        return _steps[tokenId];
    }

    function tokenURI(uint256 tokenId)
        public
        view
        override
        returns (string memory)
    {
        require(_exists(tokenId), "ERC721Metadata: URI query for nonexistent token");
        return _tokenURIs[tokenId];
    }

    function _setTokenURI(uint256 tokenId, string memory uri) internal {
        require(_exists(tokenId), "ERC721Metadata: URI set of nonexistent token");
        _tokenURIs[tokenId] = uri;
    }

    // ✅ Required override for multiple inheritance
    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, AccessControl)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}

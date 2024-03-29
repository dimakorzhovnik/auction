/* eslint-disable prettier/prettier */
export const abi = [{
  "constant": true,
  "inputs": [{"name": "interfaceId", "type": "bytes4"}],
  "name": "supportsInterface",
  "outputs": [{"name": "", "type": "bool"}],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "name",
  "outputs": [{"name": "", "type": "string"}],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{"name": "tokenId", "type": "uint256"}],
  "name": "getApproved",
  "outputs": [{"name": "", "type": "address"}],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{"name": "to", "type": "address"}, {"name": "tokenId", "type": "uint256"}],
  "name": "approve",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "totalSupply",
  "outputs": [{"name": "", "type": "uint256"}],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{"name": "_talkId", "type": "uint256"}],
  "name": "checkinSpeaker",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{"name": "_fromBid", "type": "uint256"}, {"name": "_toBid", "type": "uint256"}],
  "name": "distributeOverbids",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{"name": "from", "type": "address"}, {"name": "to", "type": "address"}, {
    "name": "tokenId",
    "type": "uint256"
  }],
  "name": "transferFrom",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{"name": "_talkId", "type": "uint256"}],
  "name": "selfDeclineTalk",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "getAuctionStartBlock",
  "outputs": [{"name": "", "type": "uint256"}],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{"name": "_talkId", "type": "uint256"}, {"name": "_descSpeaker", "type": "string"}, {
    "name": "_deskTalk",
    "type": "string"
  }, {"name": "_proof", "type": "string"}],
  "name": "updateTalkDescription",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{"name": "owner", "type": "address"}, {"name": "index", "type": "uint256"}],
  "name": "tokenOfOwnerByIndex",
  "outputs": [{"name": "", "type": "uint256"}],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "getMinimalPrice",
  "outputs": [{"name": "", "type": "uint256"}],
  "payable": false,
  "stateMutability": "pure",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{"name": "from", "type": "address"}, {"name": "to", "type": "address"}, {
    "name": "tokenId",
    "type": "uint256"
  }],
  "name": "safeTransferFrom",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "getTicketsFunds",
  "outputs": [{"name": "", "type": "uint256"}],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "getEventStartTime",
  "outputs": [{"name": "", "type": "uint256"}],
  "payable": false,
  "stateMutability": "pure",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{"name": "_messageID", "type": "uint256"}],
  "name": "getCommunityBuilderMessage",
  "outputs": [{"name": "", "type": "string"}, {"name": "", "type": "string"}, {
    "name": "",
    "type": "string"
  }, {"name": "", "type": "uint256"}],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{"name": "index", "type": "uint256"}],
  "name": "tokenByIndex",
  "outputs": [{"name": "", "type": "uint256"}],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{"name": "_id", "type": "uint256"}],
  "name": "checkinMember",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "getWorkshopsGrid",
  "outputs": [{"name": "", "type": "string"}],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{"name": "_talkId", "type": "uint256"}, {"name": "_message", "type": "string"}, {
    "name": "_link1",
    "type": "string"
  }, {"name": "_link2", "type": "string"}],
  "name": "sendCommunityBuilderMessage",
  "outputs": [],
  "payable": true,
  "stateMutability": "payable",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "getCommunityBuildersBoardSize",
  "outputs": [{"name": "", "type": "uint256"}],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{"name": "_id", "type": "uint256"}],
  "name": "getTalkById",
  "outputs": [{"name": "", "type": "string"}, {"name": "", "type": "string"}, {
    "name": "",
    "type": "string"
  }, {"name": "", "type": "uint256"}, {"name": "", "type": "uint256"}, {"name": "", "type": "address"}, {
    "name": "",
    "type": "uint256"
  }, {"name": "", "type": "bool"}, {"name": "", "type": "uint8"}, {"name": "", "type": "string"}],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{"name": "tokenId", "type": "uint256"}],
  "name": "ownerOf",
  "outputs": [{"name": "", "type": "address"}],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "getSpeakersShares",
  "outputs": [{"name": "", "type": "uint256"}],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": false,
  "inputs": [],
  "name": "distributeRewards",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "getEventEndTime",
  "outputs": [{"name": "", "type": "uint256"}],
  "payable": false,
  "stateMutability": "pure",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{"name": "owner", "type": "address"}],
  "name": "balanceOf",
  "outputs": [{"name": "", "type": "uint256"}],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": false,
  "inputs": [],
  "name": "renounceOwnership",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "getEndPrice",
  "outputs": [{"name": "", "type": "uint256"}],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "getDistributionTime",
  "outputs": [{"name": "", "type": "uint256"}],
  "payable": false,
  "stateMutability": "pure",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "getAuctionEndTime",
  "outputs": [{"name": "", "type": "uint256"}],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "getAvailableSpeaksersSlots",
  "outputs": [{"name": "", "type": "uint256"}],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{"name": "_id", "type": "uint256"}],
  "name": "getTicket",
  "outputs": [{"name": "", "type": "uint256"}, {"name": "", "type": "address"}, {
    "name": "",
    "type": "bool"
  }, {"name": "", "type": "bool"}],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{"name": "_speakerName", "type": "string"}, {
    "name": "_descSpeaker",
    "type": "string"
  }, {"name": "_deskTalk", "type": "string"}, {"name": "_duration", "type": "uint256"}, {
    "name": "_proof",
    "type": "string"
  }],
  "name": "applyForTalk",
  "outputs": [],
  "payable": true,
  "stateMutability": "payable",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "owner",
  "outputs": [{"name": "", "type": "address"}],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "isOwner",
  "outputs": [{"name": "", "type": "bool"}],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "symbol",
  "outputs": [{"name": "", "type": "string"}],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "getSpeakersSlots",
  "outputs": [{"name": "", "type": "uint256"}],
  "payable": false,
  "stateMutability": "pure",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{"name": "_grid", "type": "string"}],
  "name": "setTalksGrid",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{"name": "to", "type": "address"}, {"name": "approved", "type": "bool"}],
  "name": "setApprovalForAll",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "getTicketsAmount",
  "outputs": [{"name": "", "type": "uint256"}],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "getTalksGrid",
  "outputs": [{"name": "", "type": "string"}],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "getAuctionStartTime",
  "outputs": [{"name": "", "type": "uint256"}],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{"name": "from", "type": "address"}, {"name": "to", "type": "address"}, {
    "name": "tokenId",
    "type": "uint256"
  }, {"name": "_data", "type": "bytes"}],
  "name": "safeTransferFrom",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "getAmountReturnedOverbids",
  "outputs": [{"name": "", "type": "uint256"}],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{"name": "tokenId", "type": "uint256"}],
  "name": "tokenURI",
  "outputs": [{"name": "", "type": "string"}],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "getPlace",
  "outputs": [{"name": "", "type": "string"}],
  "payable": false,
  "stateMutability": "pure",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "getMinimalSpeakerDeposit",
  "outputs": [{"name": "", "type": "uint256"}],
  "payable": false,
  "stateMutability": "pure",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "getOrganizersShares",
  "outputs": [{"name": "", "type": "uint256"}],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{"name": "_grid", "type": "string"}],
  "name": "setWorkshopsGrid",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{"name": "owner", "type": "address"}, {"name": "operator", "type": "address"}],
  "name": "isApprovedForAll",
  "outputs": [{"name": "", "type": "bool"}],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "getCurrentPrice",
  "outputs": [{"name": "", "type": "uint256"}],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{"name": "_talkId", "type": "uint256"}],
  "name": "acceptTalk",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": false,
  "inputs": [],
  "name": "buyTicket",
  "outputs": [],
  "payable": true,
  "stateMutability": "payable",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{"name": "newOwner", "type": "address"}],
  "name": "transferOwnership",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{"name": "_talkId", "type": "uint256"}],
  "name": "declineTalk",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {"inputs": [], "payable": false, "stateMutability": "nonpayable", "type": "constructor"}, {
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "fallback"
}, {
  "anonymous": false,
  "inputs": [{"indexed": false, "name": "_id", "type": "uint256"}, {
    "indexed": false,
    "name": "_member",
    "type": "address"
  }, {"indexed": false, "name": "_value", "type": "uint256"}],
  "name": "TicketBid",
  "type": "event"
}, {
  "anonymous": false,
  "inputs": [{"indexed": false, "name": "_name", "type": "string"}, {
    "indexed": false,
    "name": "_member",
    "type": "address"
  }, {"indexed": false, "name": "_value", "type": "uint256"}],
  "name": "TalkApplication",
  "type": "event"
}, {
  "anonymous": false,
  "inputs": [{"indexed": true, "name": "from", "type": "address"}, {
    "indexed": true,
    "name": "to",
    "type": "address"
  }, {"indexed": true, "name": "tokenId", "type": "uint256"}],
  "name": "Transfer",
  "type": "event"
}, {
  "anonymous": false,
  "inputs": [{"indexed": true, "name": "owner", "type": "address"}, {
    "indexed": true,
    "name": "approved",
    "type": "address"
  }, {"indexed": true, "name": "tokenId", "type": "uint256"}],
  "name": "Approval",
  "type": "event"
}, {
  "anonymous": false,
  "inputs": [{"indexed": true, "name": "owner", "type": "address"}, {
    "indexed": true,
    "name": "operator",
    "type": "address"
  }, {"indexed": false, "name": "approved", "type": "bool"}],
  "name": "ApprovalForAll",
  "type": "event"
}, {
  "anonymous": false,
  "inputs": [{"indexed": true, "name": "previousOwner", "type": "address"}, {
    "indexed": true,
    "name": "newOwner",
    "type": "address"
  }],
  "name": "OwnershipTransferred",
  "type": "event"
}];

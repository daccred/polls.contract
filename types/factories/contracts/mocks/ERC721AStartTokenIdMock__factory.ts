/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  ERC721AStartTokenIdMock,
  ERC721AStartTokenIdMockInterface,
} from "../../../contracts/mocks/ERC721AStartTokenIdMock";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol_",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "startTokenId_",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "ApprovalCallerNotOwnerNorApproved",
    type: "error",
  },
  {
    inputs: [],
    name: "ApprovalQueryForNonexistentToken",
    type: "error",
  },
  {
    inputs: [],
    name: "ApprovalToCurrentOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "ApproveToCaller",
    type: "error",
  },
  {
    inputs: [],
    name: "BalanceQueryForZeroAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "MintToZeroAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "MintZeroQuantity",
    type: "error",
  },
  {
    inputs: [],
    name: "OwnerQueryForNonexistentToken",
    type: "error",
  },
  {
    inputs: [],
    name: "TransferCallerNotOwnerNorApproved",
    type: "error",
  },
  {
    inputs: [],
    name: "TransferFromIncorrectOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "TransferToNonERC721ReceiverImplementer",
    type: "error",
  },
  {
    inputs: [],
    name: "TransferToZeroAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "URIQueryForNonexistentToken",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "baseURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "approvalCheck",
        type: "bool",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "contractURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "exists",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "getAux",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "quantity",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "numberMinted",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "predictionOf",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "quantity",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeMint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "quantity",
        type: "uint256",
      },
    ],
    name: "safeMint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint64",
        name: "aux",
        type: "uint64",
      },
    ],
    name: "setAux",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "startTokenId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalMinted",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x69383932b234b1ba34b7b760b11b60a052600a60805260aa6040527f4b233c1d5eda54dd2330e1ce9ccbcdb1a9390a9bdab218af102142220baf833a6009553480156200004b57600080fd5b5060405162001cc338038062001cc38339810160408190526200006e916200022e565b60008190558251839083908290829062000090906003906020850190620000bb565b508051620000a6906004906020840190620000bb565b5060005460015550620002de95505050505050565b828054620000c990620002a1565b90600052602060002090601f016020900481019282620000ed576000855562000138565b82601f106200010857805160ff191683800117855562000138565b8280016001018555821562000138579182015b82811115620001385782518255916020019190600101906200011b565b50620001469291506200014a565b5090565b5b808211156200014657600081556001016200014b565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200018957600080fd5b81516001600160401b0380821115620001a657620001a662000161565b604051601f8301601f19908116603f01168101908282118183101715620001d157620001d162000161565b81604052838152602092508683858801011115620001ee57600080fd5b600091505b83821015620002125785820183015181830184015290820190620001f3565b83821115620002245760008385830101525b9695505050505050565b6000806000606084860312156200024457600080fd5b83516001600160401b03808211156200025c57600080fd5b6200026a8783880162000177565b945060208601519150808211156200028157600080fd5b50620002908682870162000177565b925050604084015190509250925092565b600181811c90821680620002b657607f821691505b60208210811415620002d857634e487b7160e01b600052602260045260246000fd5b50919050565b6119d580620002ee6000396000f3fe608060405234801561001057600080fd5b50600436106101a95760003560e01c80638832e6e3116100f9578063bf0b175e11610097578063e6798baa11610071578063e6798baa146103b8578063e8a3d485146103c1578063e985e9c5146103c9578063f6fba19b1461040557600080fd5b8063bf0b175e14610367578063c87b56dd14610392578063dc33e681146103a557600080fd5b8063a1448194116100d3578063a144819414610258578063a22cb46514610335578063a2309ff814610348578063b88d4fde1461035457600080fd5b80638832e6e31461030757806395d89b411461031a5780639fac68cb1461032257600080fd5b806340c10f19116101665780634f558e79116101405780634f558e79146102c65780636352211e146102d95780636c0360eb146102ec57806370a08231146102f457600080fd5b806340c10f191461025857806342842e0e1461026b578063453ab1411461027e57600080fd5b806301ffc9a7146101ae57806306fdde03146101d6578063081812fc146101eb578063095ea7b31461021657806318160ddd1461022b57806323b872dd14610245575b600080fd5b6101c16101bc3660046113ef565b610418565b60405190151581526020015b60405180910390f35b6101de61046a565b6040516101cd9190611464565b6101fe6101f9366004611477565b6104fc565b6040516001600160a01b0390911681526020016101cd565b6102296102243660046114ac565b610540565b005b60005460025460015403035b6040519081526020016101cd565b6102296102533660046114d6565b6105c7565b6102296102663660046114ac565b6105d2565b6102296102793660046114d6565b6105e3565b61022961028c366004611512565b6001600160a01b038216600090815260066020526040902080546001600160c01b0316600160c01b6001600160401b038416021790555050565b6101c16102d4366004611477565b6105fe565b6101fe6102e7366004611477565b610609565b6101de61061b565b610237610302366004611555565b61062a565b610229610315366004611612565b610678565b6101de610686565b610229610330366004611678565b610695565b6102296103433660046116a4565b61069f565b60005460015403610237565b6102296103623660046116ce565b610735565b61037a610375366004611555565b61077f565b6040516001600160401b0390911681526020016101cd565b6101de6103a0366004611477565b6107ad565b6102376103b3366004611555565b610844565b61023760005481565b6101de610872565b6101c16103d7366004611735565b6001600160a01b03918216600090815260086020908152604080832093909416825291909152205460ff1690565b610237610413366004611477565b6108b2565b60006001600160e01b031982166380ac58cd60e01b148061044957506001600160e01b03198216635b5e139f60e01b145b8061046457506301ffc9a760e01b6001600160e01b03198316145b92915050565b6060600380546104799061175f565b80601f01602080910402602001604051908101604052809291908181526020018280546104a59061175f565b80156104f25780601f106104c7576101008083540402835291602001916104f2565b820191906000526020600020905b8154815290600101906020018083116104d557829003601f168201915b5050505050905090565b6000610507826108c7565b610524576040516333d1c03960e21b815260040160405180910390fd5b506000908152600760205260409020546001600160a01b031690565b600061054b82610609565b9050806001600160a01b0316836001600160a01b031614156105805760405163250fdee360e21b815260040160405180910390fd5b336001600160a01b038216146105b75761059a81336103d7565b6105b7576040516367d9dca160e11b815260040160405180910390fd5b6105c2838383610907565b505050565b6105c2838383610963565b6105df8282600954610b61565b5050565b6105c283838360405180602001604052806000815250610735565b6000610464826108c7565b600061061482610b7c565b5192915050565b6060610625610cbe565b905090565b60006001600160a01b038216610653576040516323d3ad8160e21b815260040160405180910390fd5b506001600160a01b03166000908152600660205260409020546001600160401b031690565b6105c2838360095484610cde565b6060600480546104799061175f565b6105df8282610e7a565b6001600160a01b0382163314156106c95760405163b06307db60e01b815260040160405180910390fd5b3360008181526008602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b610740848484610963565b6001600160a01b0383163b156107795761075c8484848461103c565b610779576040516368d2bf6b60e11b815260040160405180910390fd5b50505050565b6001600160a01b038116600090815260066020526040812054600160c01b90046001600160401b0316610464565b60606107b8826108c7565b6107d557604051630a14c4b560e41b815260040160405180910390fd5b60006107df610cbe565b905060006107ee306014611133565b905081516000141561080f576040518060200160405280600081525061083c565b818161081a866112d9565b60405160200161082c9392919061179a565b6040516020818303038152906040525b949350505050565b6001600160a01b038116600090815260066020526040812054600160401b90046001600160401b0316610464565b60606000610881306014611133565b905061088b610cbe565b8160405160200161089d9291906117ea565b60405160208183030381529060405291505090565b60006108bd82610b7c565b6060015192915050565b6000816108d360005490565b111580156108e2575060015482105b8015610464575050600090815260056020526040902054600160e01b900460ff161590565b60008281526007602052604080822080546001600160a01b0319166001600160a01b0387811691821790925591518593918516917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591a4505050565b600061096e82610b7c565b60608101518151919250906001600160a01b038681169116146109a35760405162a1148160e81b815260040160405180910390fd5b6000336001600160a01b03871614806109c157506109c186336103d7565b806109dc5750336109d1856104fc565b6001600160a01b0316145b9050806109fc57604051632ce44b5f60e11b815260040160405180910390fd5b6001600160a01b038516610a2357604051633a954ecd60e21b815260040160405180910390fd5b610a2f60008588610907565b6001600160a01b038681166000908152600660209081526040808320805467ffffffffffffffff198082166001600160401b0392831660001901831617909255948a168085528285208054928316928716600101871692909217909155888452600590925290912080546001600160e01b0319168217600160a01b429094169390930292909217825515610ac557600181018390555b60018501600081815260056020526040902080546001600160a01b0316610b27576001548214610b2757805460208701516001600160401b0316600160a01b026001600160e01b03199091166001600160a01b038b1617178155600181018590555b50505083856001600160a01b0316876001600160a01b031660008051602061198083398151915260405160405180910390a4505050505050565b6105c283838360405180602001604052806000815250610cde565b6040805160808101825260008082526020820181905291810182905260608101919091528180610bab60005490565b11610ca557600154811015610ca557600081815260056020908152604091829020825160808101845281546001600160a01b0381168252600160a01b81046001600160401b031693820193909352600160e01b90920460ff16151592820183905260010154606082015290610ca35780516001600160a01b031615610c31579392505050565b5060001901600081815260056020908152604091829020825160808101845281546001600160a01b038116808352600160a01b82046001600160401b031694830194909452600160e01b900460ff1615159381019390935260010154606083015215610c9e579392505050565b610c31565b505b604051636f96cda160e11b815260040160405180910390fd5b606060405180606001604052806022815260200161195e60229139905090565b6001546001600160a01b038516610d0757604051622e076360e81b815260040160405180910390fd5b83610d255760405163b562e8dd60e01b815260040160405180910390fd5b6001600160a01b038516600081815260066020908152604080832080546fffffffffffffffffffffffffffffffff1981166001600160401b038083168c018116918217600160401b67ffffffffffffffff1990941690921783900481168c01811690920217909155858452600590925290912080546001600160e01b0319168317600160a01b42909316929092029190911781556001018490558190818601903b15610e3c575b60405182906001600160a01b03891690600090600080516020611980833981519152908290a4610e05600088848060010195508761103c565b610e22576040516368d2bf6b60e11b815260040160405180910390fd5b808210610dcc578260015414610e3757600080fd5b610e6f565b5b6040516001830192906001600160a01b03891690600090600080516020611980833981519152908290a4808210610e3d575b506001555050505050565b6000610e8583610b7c565b60608101518151919250908315610ef1576000336001600160a01b0383161480610eb45750610eb482336103d7565b80610ecf575033610ec4876104fc565b6001600160a01b0316145b905080610eef57604051632ce44b5f60e11b815260040160405180910390fd5b505b610efd60008683610907565b6001600160a01b0380821660008181526006602090815260408083208054600160801b6000196001600160401b0380841691909101811667ffffffffffffffff198416811783900482166001908101831690930277ffffffffffffffff0000000000000000ffffffffffffffff19909416179290921783558c86526005909452828520805460ff60e01b1942909316600160a01b026001600160e01b03199091169097179690961716600160e01b178555918a0180845292208054919490911661100257600154821461100257805460208801516001600160401b0316600160a01b026001600160e01b03199091166001600160a01b03871617178155600181018690555b5050604051879250600091506001600160a01b03841690600080516020611980833981519152908390a45050600280546001019055505050565b604051630a85bd0160e11b81526000906001600160a01b0385169063150b7a0290611071903390899088908890600401611819565b602060405180830381600087803b15801561108b57600080fd5b505af19250505080156110bb575060408051601f3d908101601f191682019092526110b891810190611856565b60015b611116573d8080156110e9576040519150601f19603f3d011682016040523d82523d6000602084013e6110ee565b606091505b50805161110e576040516368d2bf6b60e11b815260040160405180910390fd5b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050949350505050565b60606000611142836002611889565b61114d9060026118a8565b6001600160401b0381111561116457611164611570565b6040519080825280601f01601f19166020018201604052801561118e576020820181803683370190505b509050600360fc1b816000815181106111a9576111a96118c0565b60200101906001600160f81b031916908160001a905350600f60fb1b816001815181106111d8576111d86118c0565b60200101906001600160f81b031916908160001a90535060006111fc846002611889565b6112079060016118a8565b90505b600181111561127f576f181899199a1a9b1b9c1cb0b131b232b360811b85600f166010811061123b5761123b6118c0565b1a60f81b828281518110611251576112516118c0565b60200101906001600160f81b031916908160001a90535060049490941c93611278816118d6565b905061120a565b5083156112d25760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e74604482015260640160405180910390fd5b9392505050565b6060816112fd5750506040805180820190915260018152600360fc1b602082015290565b8160005b81156113275780611311816118ed565b91506113209050600a8361191e565b9150611301565b6000816001600160401b0381111561134157611341611570565b6040519080825280601f01601f19166020018201604052801561136b576020820181803683370190505b5090505b841561083c57611380600183611932565b915061138d600a86611949565b6113989060306118a8565b60f81b8183815181106113ad576113ad6118c0565b60200101906001600160f81b031916908160001a9053506113cf600a8661191e565b945061136f565b6001600160e01b0319811681146113ec57600080fd5b50565b60006020828403121561140157600080fd5b81356112d2816113d6565b60005b8381101561142757818101518382015260200161140f565b838111156107795750506000910152565b6000815180845261145081602086016020860161140c565b601f01601f19169290920160200192915050565b6020815260006112d26020830184611438565b60006020828403121561148957600080fd5b5035919050565b80356001600160a01b03811681146114a757600080fd5b919050565b600080604083850312156114bf57600080fd5b6114c883611490565b946020939093013593505050565b6000806000606084860312156114eb57600080fd5b6114f484611490565b925061150260208501611490565b9150604084013590509250925092565b6000806040838503121561152557600080fd5b61152e83611490565b915060208301356001600160401b038116811461154a57600080fd5b809150509250929050565b60006020828403121561156757600080fd5b6112d282611490565b634e487b7160e01b600052604160045260246000fd5b600082601f83011261159757600080fd5b81356001600160401b03808211156115b1576115b1611570565b604051601f8301601f19908116603f011681019082821181831017156115d9576115d9611570565b816040528381528660208588010111156115f257600080fd5b836020870160208301376000602085830101528094505050505092915050565b60008060006060848603121561162757600080fd5b61163084611490565b92506020840135915060408401356001600160401b0381111561165257600080fd5b61165e86828701611586565b9150509250925092565b803580151581146114a757600080fd5b6000806040838503121561168b57600080fd5b8235915061169b60208401611668565b90509250929050565b600080604083850312156116b757600080fd5b6116c083611490565b915061169b60208401611668565b600080600080608085870312156116e457600080fd5b6116ed85611490565b93506116fb60208601611490565b92506040850135915060608501356001600160401b0381111561171d57600080fd5b61172987828801611586565b91505092959194509250565b6000806040838503121561174857600080fd5b61175183611490565b915061169b60208401611490565b600181811c9082168061177357607f821691505b6020821081141561179457634e487b7160e01b600052602260045260246000fd5b50919050565b600084516117ac81846020890161140c565b8451908301906117c081836020890161140c565b602f60f81b910190815283516117dd81600184016020880161140c565b0160010195945050505050565b600083516117fc81846020880161140c565b83519083019061181081836020880161140c565b01949350505050565b6001600160a01b038581168252841660208201526040810183905260806060820181905260009061184c90830184611438565b9695505050505050565b60006020828403121561186857600080fd5b81516112d2816113d6565b634e487b7160e01b600052601160045260246000fd5b60008160001904831182151516156118a3576118a3611873565b500290565b600082198211156118bb576118bb611873565b500190565b634e487b7160e01b600052603260045260246000fd5b6000816118e5576118e5611873565b506000190190565b600060001982141561190157611901611873565b5060010190565b634e487b7160e01b600052601260045260246000fd5b60008261192d5761192d611908565b500490565b60008282101561194457611944611873565b500390565b60008261195857611958611908565b50069056fe68747470733a2f2f6e66742e62626e706f6c6c732e78797a2f6170692f6d6574612fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa26469706673582212206f43f17547b881ebb93cbe28db95f238dc850e435afd69a18e54c0f0001fa62764736f6c63430008090033";

type ERC721AStartTokenIdMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC721AStartTokenIdMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC721AStartTokenIdMock__factory extends ContractFactory {
  constructor(...args: ERC721AStartTokenIdMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    name_: PromiseOrValue<string>,
    symbol_: PromiseOrValue<string>,
    startTokenId_: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ERC721AStartTokenIdMock> {
    return super.deploy(
      name_,
      symbol_,
      startTokenId_,
      overrides || {}
    ) as Promise<ERC721AStartTokenIdMock>;
  }
  override getDeployTransaction(
    name_: PromiseOrValue<string>,
    symbol_: PromiseOrValue<string>,
    startTokenId_: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      name_,
      symbol_,
      startTokenId_,
      overrides || {}
    );
  }
  override attach(address: string): ERC721AStartTokenIdMock {
    return super.attach(address) as ERC721AStartTokenIdMock;
  }
  override connect(signer: Signer): ERC721AStartTokenIdMock__factory {
    return super.connect(signer) as ERC721AStartTokenIdMock__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC721AStartTokenIdMockInterface {
    return new utils.Interface(_abi) as ERC721AStartTokenIdMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC721AStartTokenIdMock {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ERC721AStartTokenIdMock;
  }
}

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
  ERC721ABurnableStartTokenIdMock,
  ERC721ABurnableStartTokenIdMockInterface,
} from "../../../contracts/mocks/ERC721ABurnableStartTokenIdMock";

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
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
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
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "getOwnershipAt",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "addr",
            type: "address",
          },
          {
            internalType: "uint64",
            name: "startTimestamp",
            type: "uint64",
          },
          {
            internalType: "bool",
            name: "burned",
            type: "bool",
          },
          {
            internalType: "bytes32",
            name: "prediction",
            type: "bytes32",
          },
        ],
        internalType: "struct INN.TokenOwnership",
        name: "",
        type: "tuple",
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
  "0x60806040523480156200001157600080fd5b5060405162001b4b38038062001b4b833981016040819052620000349162000228565b60008190558251839083908290829062000056906003906020850190620000b5565b5080516200006c906004906020840190620000b5565b50600054600155505060405169383932b234b1ba34b7b760b11b6020820152602a01604051602081830303815290604052805190602001206009819055505050505050620002d8565b828054620000c3906200029b565b90600052602060002090601f016020900481019282620000e7576000855562000132565b82601f106200010257805160ff191683800117855562000132565b8280016001018555821562000132579182015b828111156200013257825182559160200191906001019062000115565b506200014092915062000144565b5090565b5b8082111562000140576000815560010162000145565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200018357600080fd5b81516001600160401b0380821115620001a057620001a06200015b565b604051601f8301601f19908116603f01168101908282118183101715620001cb57620001cb6200015b565b81604052838152602092508683858801011115620001e857600080fd5b600091505b838210156200020c5785820183015181830184015290820190620001ed565b838211156200021e5760008385830101525b9695505050505050565b6000806000606084860312156200023e57600080fd5b83516001600160401b03808211156200025657600080fd5b620002648783880162000171565b945060208601519150808211156200027b57600080fd5b506200028a8682870162000171565b925050604084015190509250925092565b600181811c90821680620002b057607f821691505b60208210811415620002d257634e487b7160e01b600052602260045260246000fd5b50919050565b61186380620002e86000396000f3fe608060405234801561001057600080fd5b50600436106101425760003560e01c806395d89b41116100b8578063c87b56dd1161007c578063c87b56dd1461029d578063e6798baa146102b0578063e8a3d485146102b9578063e985e9c5146102c1578063f2523633146102fd578063f6fba19b146103d857600080fd5b806395d89b4114610250578063a144819414610258578063a22cb4651461026b578063a2309ff81461027e578063b88d4fde1461028a57600080fd5b806323b872dd1161010a57806323b872dd146101de57806342842e0e146101f157806342966c68146102045780634f558e79146102175780636352211e1461022a57806370a082311461023d57600080fd5b806301ffc9a71461014757806306fdde031461016f578063081812fc14610184578063095ea7b3146101af57806318160ddd146101c4575b600080fd5b61015a61015536600461134f565b6103eb565b60405190151581526020015b60405180910390f35b61017761043d565b60405161016691906113c4565b6101976101923660046113d7565b6104cf565b6040516001600160a01b039091168152602001610166565b6101c26101bd36600461140c565b610513565b005b60005460025460015403035b604051908152602001610166565b6101c26101ec366004611436565b61059a565b6101c26101ff366004611436565b6105a5565b6101c26102123660046113d7565b6105c0565b61015a6102253660046113d7565b6105ce565b6101976102383660046113d7565b6105d9565b6101d061024b366004611472565b6105eb565b610177610639565b6101c261026636600461140c565b610648565b6101c261027936600461148d565b610659565b600054600154036101d0565b6101c26102983660046114df565b6106ef565b6101776102ab3660046113d7565b610739565b6101d060005481565b6101776107d0565b61015a6102cf3660046115ba565b6001600160a01b03918216600090815260086020908152604080832093909416825291909152205460ff1690565b61039161030b3660046113d7565b60408051608081018252600080825260208201819052918101829052606081019190915250600090815260056020908152604091829020825160808101845281546001600160a01b0381168252600160a01b81046001600160401b031693820193909352600160e01b90920460ff16151592820192909252600190910154606082015290565b604051610166919081516001600160a01b031681526020808301516001600160401b0316908201526040808301511515908201526060918201519181019190915260800190565b6101d06103e63660046113d7565b610810565b60006001600160e01b031982166380ac58cd60e01b148061041c57506001600160e01b03198216635b5e139f60e01b145b8061043757506301ffc9a760e01b6001600160e01b03198316145b92915050565b60606003805461044c906115ed565b80601f0160208091040260200160405190810160405280929190818152602001828054610478906115ed565b80156104c55780601f1061049a576101008083540402835291602001916104c5565b820191906000526020600020905b8154815290600101906020018083116104a857829003601f168201915b5050505050905090565b60006104da82610825565b6104f7576040516333d1c03960e21b815260040160405180910390fd5b506000908152600760205260409020546001600160a01b031690565b600061051e826105d9565b9050806001600160a01b0316836001600160a01b031614156105535760405163250fdee360e21b815260040160405180910390fd5b336001600160a01b0382161461058a5761056d81336102cf565b61058a576040516367d9dca160e11b815260040160405180910390fd5b610595838383610865565b505050565b6105958383836108c1565b610595838383604051806020016040528060008152506106ef565b6105cb816001610abf565b50565b600061043782610825565b60006105e482610c81565b5192915050565b60006001600160a01b038216610614576040516323d3ad8160e21b815260040160405180910390fd5b506001600160a01b03166000908152600660205260409020546001600160401b031690565b60606004805461044c906115ed565b6106558282600954610dc3565b5050565b6001600160a01b0382163314156106835760405163b06307db60e01b815260040160405180910390fd5b3360008181526008602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b6106fa8484846108c1565b6001600160a01b0383163b156107335761071684848484610dde565b610733576040516368d2bf6b60e11b815260040160405180910390fd5b50505050565b606061074482610825565b61076157604051630a14c4b560e41b815260040160405180910390fd5b600061076b610ed5565b9050600061077a306014610ef5565b905081516000141561079b57604051806020016040528060008152506107c8565b81816107a68661109b565b6040516020016107b893929190611628565b6040516020818303038152906040525b949350505050565b606060006107df306014610ef5565b90506107e9610ed5565b816040516020016107fb929190611678565b60405160208183030381529060405291505090565b600061081b82610c81565b6060015192915050565b60008161083160005490565b11158015610840575060015482105b8015610437575050600090815260056020526040902054600160e01b900460ff161590565b60008281526007602052604080822080546001600160a01b0319166001600160a01b0387811691821790925591518593918516917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591a4505050565b60006108cc82610c81565b60608101518151919250906001600160a01b038681169116146109015760405162a1148160e81b815260040160405180910390fd5b6000336001600160a01b038716148061091f575061091f86336102cf565b8061093a57503361092f856104cf565b6001600160a01b0316145b90508061095a57604051632ce44b5f60e11b815260040160405180910390fd5b6001600160a01b03851661098157604051633a954ecd60e21b815260040160405180910390fd5b61098d60008588610865565b6001600160a01b038681166000908152600660209081526040808320805467ffffffffffffffff198082166001600160401b0392831660001901831617909255948a168085528285208054928316928716600101871692909217909155888452600590925290912080546001600160e01b0319168217600160a01b429094169390930292909217825515610a2357600181018390555b60018501600081815260056020526040902080546001600160a01b0316610a85576001548214610a8557805460208701516001600160401b0316600160a01b026001600160e01b03199091166001600160a01b038b1617178155600181018590555b50505083856001600160a01b0316876001600160a01b031660008051602061180e83398151915260405160405180910390a4505050505050565b6000610aca83610c81565b60608101518151919250908315610b36576000336001600160a01b0383161480610af95750610af982336102cf565b80610b14575033610b09876104cf565b6001600160a01b0316145b905080610b3457604051632ce44b5f60e11b815260040160405180910390fd5b505b610b4260008683610865565b6001600160a01b0380821660008181526006602090815260408083208054600160801b6000196001600160401b0380841691909101811667ffffffffffffffff198416811783900482166001908101831690930277ffffffffffffffff0000000000000000ffffffffffffffff19909416179290921783558c86526005909452828520805460ff60e01b1942909316600160a01b026001600160e01b03199091169097179690961716600160e01b178555918a01808452922080549194909116610c47576001548214610c4757805460208801516001600160401b0316600160a01b026001600160e01b03199091166001600160a01b03871617178155600181018690555b5050604051879250600091506001600160a01b0384169060008051602061180e833981519152908390a45050600280546001019055505050565b6040805160808101825260008082526020820181905291810182905260608101919091528180610cb060005490565b11610daa57600154811015610daa57600081815260056020908152604091829020825160808101845281546001600160a01b0381168252600160a01b81046001600160401b031693820193909352600160e01b90920460ff16151592820183905260010154606082015290610da85780516001600160a01b031615610d36579392505050565b5060001901600081815260056020908152604091829020825160808101845281546001600160a01b038116808352600160a01b82046001600160401b031694830194909452600160e01b900460ff1615159381019390935260010154606083015215610da3579392505050565b610d36565b505b604051636f96cda160e11b815260040160405180910390fd5b61059583838360405180602001604052806000815250611198565b604051630a85bd0160e11b81526000906001600160a01b0385169063150b7a0290610e139033908990889088906004016116a7565b602060405180830381600087803b158015610e2d57600080fd5b505af1925050508015610e5d575060408051601f3d908101601f19168201909252610e5a918101906116e4565b60015b610eb8573d808015610e8b576040519150601f19603f3d011682016040523d82523d6000602084013e610e90565b606091505b508051610eb0576040516368d2bf6b60e11b815260040160405180910390fd5b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050949350505050565b60606040518060600160405280602281526020016117ec60229139905090565b60606000610f04836002611717565b610f0f906002611736565b6001600160401b03811115610f2657610f266114c9565b6040519080825280601f01601f191660200182016040528015610f50576020820181803683370190505b509050600360fc1b81600081518110610f6b57610f6b61174e565b60200101906001600160f81b031916908160001a905350600f60fb1b81600181518110610f9a57610f9a61174e565b60200101906001600160f81b031916908160001a9053506000610fbe846002611717565b610fc9906001611736565b90505b6001811115611041576f181899199a1a9b1b9c1cb0b131b232b360811b85600f1660108110610ffd57610ffd61174e565b1a60f81b8282815181106110135761101361174e565b60200101906001600160f81b031916908160001a90535060049490941c9361103a81611764565b9050610fcc565b5083156110945760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e74604482015260640160405180910390fd5b9392505050565b6060816110bf5750506040805180820190915260018152600360fc1b602082015290565b8160005b81156110e957806110d38161177b565b91506110e29050600a836117ac565b91506110c3565b6000816001600160401b03811115611103576111036114c9565b6040519080825280601f01601f19166020018201604052801561112d576020820181803683370190505b5090505b84156107c8576111426001836117c0565b915061114f600a866117d7565b61115a906030611736565b60f81b81838151811061116f5761116f61174e565b60200101906001600160f81b031916908160001a905350611191600a866117ac565b9450611131565b6001546001600160a01b0385166111c157604051622e076360e81b815260040160405180910390fd5b836111df5760405163b562e8dd60e01b815260040160405180910390fd5b6001600160a01b038516600081815260066020908152604080832080546fffffffffffffffffffffffffffffffff1981166001600160401b038083168c0181169182176801000000000000000067ffffffffffffffff1990941690921783900481168c01811690920217909155858452600590925290912080546001600160e01b0319168317600160a01b42909316929092029190911781556001018490558190818601903b156112fb575b60405182906001600160a01b0389169060009060008051602061180e833981519152908290a46112c46000888480600101955087610dde565b6112e1576040516368d2bf6b60e11b815260040160405180910390fd5b80821061128b5782600154146112f657600080fd5b61132e565b5b6040516001830192906001600160a01b0389169060009060008051602061180e833981519152908290a48082106112fc575b506001555050505050565b6001600160e01b0319811681146105cb57600080fd5b60006020828403121561136157600080fd5b813561109481611339565b60005b8381101561138757818101518382015260200161136f565b838111156107335750506000910152565b600081518084526113b081602086016020860161136c565b601f01601f19169290920160200192915050565b6020815260006110946020830184611398565b6000602082840312156113e957600080fd5b5035919050565b80356001600160a01b038116811461140757600080fd5b919050565b6000806040838503121561141f57600080fd5b611428836113f0565b946020939093013593505050565b60008060006060848603121561144b57600080fd5b611454846113f0565b9250611462602085016113f0565b9150604084013590509250925092565b60006020828403121561148457600080fd5b611094826113f0565b600080604083850312156114a057600080fd5b6114a9836113f0565b9150602083013580151581146114be57600080fd5b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b600080600080608085870312156114f557600080fd5b6114fe856113f0565b935061150c602086016113f0565b92506040850135915060608501356001600160401b038082111561152f57600080fd5b818701915087601f83011261154357600080fd5b813581811115611555576115556114c9565b604051601f8201601f19908116603f0116810190838211818310171561157d5761157d6114c9565b816040528281528a602084870101111561159657600080fd5b82602086016020830137600060208483010152809550505050505092959194509250565b600080604083850312156115cd57600080fd5b6115d6836113f0565b91506115e4602084016113f0565b90509250929050565b600181811c9082168061160157607f821691505b6020821081141561162257634e487b7160e01b600052602260045260246000fd5b50919050565b6000845161163a81846020890161136c565b84519083019061164e81836020890161136c565b602f60f81b9101908152835161166b81600184016020880161136c565b0160010195945050505050565b6000835161168a81846020880161136c565b83519083019061169e81836020880161136c565b01949350505050565b6001600160a01b03858116825284166020820152604081018390526080606082018190526000906116da90830184611398565b9695505050505050565b6000602082840312156116f657600080fd5b815161109481611339565b634e487b7160e01b600052601160045260246000fd5b600081600019048311821515161561173157611731611701565b500290565b6000821982111561174957611749611701565b500190565b634e487b7160e01b600052603260045260246000fd5b60008161177357611773611701565b506000190190565b600060001982141561178f5761178f611701565b5060010190565b634e487b7160e01b600052601260045260246000fd5b6000826117bb576117bb611796565b500490565b6000828210156117d2576117d2611701565b500390565b6000826117e6576117e6611796565b50069056fe68747470733a2f2f6e66742e62626e706f6c6c732e78797a2f6170692f6d6574612fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa2646970667358221220cfdb2caba8200bc0131d8f6df686550f2c7aae5828f570f4c987beaecd84c12464736f6c63430008090033";

type ERC721ABurnableStartTokenIdMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC721ABurnableStartTokenIdMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC721ABurnableStartTokenIdMock__factory extends ContractFactory {
  constructor(...args: ERC721ABurnableStartTokenIdMockConstructorParams) {
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
  ): Promise<ERC721ABurnableStartTokenIdMock> {
    return super.deploy(
      name_,
      symbol_,
      startTokenId_,
      overrides || {}
    ) as Promise<ERC721ABurnableStartTokenIdMock>;
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
  override attach(address: string): ERC721ABurnableStartTokenIdMock {
    return super.attach(address) as ERC721ABurnableStartTokenIdMock;
  }
  override connect(signer: Signer): ERC721ABurnableStartTokenIdMock__factory {
    return super.connect(signer) as ERC721ABurnableStartTokenIdMock__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC721ABurnableStartTokenIdMockInterface {
    return new utils.Interface(
      _abi
    ) as ERC721ABurnableStartTokenIdMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC721ABurnableStartTokenIdMock {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ERC721ABurnableStartTokenIdMock;
  }
}
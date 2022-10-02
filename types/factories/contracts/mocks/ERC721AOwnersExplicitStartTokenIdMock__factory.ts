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
  ERC721AOwnersExplicitStartTokenIdMock,
  ERC721AOwnersExplicitStartTokenIdMockInterface,
} from "../../../contracts/mocks/ERC721AOwnersExplicitStartTokenIdMock";

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
    name: "AllOwnershipsHaveBeenSet",
    type: "error",
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
    name: "NoTokensMintedYet",
    type: "error",
  },
  {
    inputs: [],
    name: "OwnerQueryForNonexistentToken",
    type: "error",
  },
  {
    inputs: [],
    name: "QuantityMustBeNonZero",
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
        name: "tokenId",
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
    inputs: [],
    name: "nextOwnerToExplicitlySet",
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
        internalType: "uint256",
        name: "quantity",
        type: "uint256",
      },
    ],
    name: "setOwnersExplicit",
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
  "0x60806040523480156200001157600080fd5b5060405162001aba38038062001aba833981016040819052620000349162000228565b60008190558251839083908290829062000056906003906020850190620000b5565b5080516200006c906004906020840190620000b5565b50600054600155505060405169383932b234b1ba34b7b760b11b6020820152602a0160405160208183030381529060405280519060200120600a819055505050505050620002d8565b828054620000c3906200029b565b90600052602060002090601f016020900481019282620000e7576000855562000132565b82601f106200010257805160ff191683800117855562000132565b8280016001018555821562000132579182015b828111156200013257825182559160200191906001019062000115565b506200014092915062000144565b5090565b5b8082111562000140576000815560010162000145565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200018357600080fd5b81516001600160401b0380821115620001a057620001a06200015b565b604051601f8301601f19908116603f01168101908282118183101715620001cb57620001cb6200015b565b81604052838152602092508683858801011115620001e857600080fd5b600091505b838210156200020c5785820183015181830184015290820190620001ed565b838211156200021e5760008385830101525b9695505050505050565b6000806000606084860312156200023e57600080fd5b83516001600160401b03808211156200025657600080fd5b620002648783880162000171565b945060208601519150808211156200027b57600080fd5b506200028a8682870162000171565b925050604084015190509250925092565b600181811c90821680620002b057607f821691505b60208210811415620002d257634e487b7160e01b600052602260045260246000fd5b50919050565b6117d280620002e86000396000f3fe608060405234801561001057600080fd5b50600436106101375760003560e01c806395d89b41116100b8578063d7224ba01161007c578063d7224ba014610286578063e6798baa1461028f578063e8a3d48514610298578063e985e9c5146102a0578063f2523633146102dc578063f6fba19b146103b957600080fd5b806395d89b4114610232578063a14481941461023a578063a22cb4651461024d578063b88d4fde14610260578063c87b56dd1461027357600080fd5b806323b872dd116100ff57806323b872dd146101d35780632d20fb60146101e657806342842e0e146101f95780636352211e1461020c57806370a082311461021f57600080fd5b806301ffc9a71461013c57806306fdde0314610164578063081812fc14610179578063095ea7b3146101a457806318160ddd146101b9575b600080fd5b61014f61014a3660046112dd565b6103cc565b60405190151581526020015b60405180910390f35b61016c61041e565b60405161015b9190611352565b61018c610187366004611365565b6104b0565b6040516001600160a01b03909116815260200161015b565b6101b76101b236600461139a565b6104f4565b005b60005460025460015403035b60405190815260200161015b565b6101b76101e13660046113c4565b61057b565b6101b76101f4366004611365565b610586565b6101b76102073660046113c4565b610592565b61018c61021a366004611365565b6105ad565b6101c561022d366004611400565b6105bf565b61016c61060e565b6101b761024836600461139a565b61061d565b6101b761025b36600461141b565b61062e565b6101b761026e36600461146d565b6106c4565b61016c610281366004611365565b61070e565b6101c560095481565b6101c560005481565b61016c6107a5565b61014f6102ae366004611549565b6001600160a01b03918216600090815260086020908152604080832093909416825291909152205460ff1690565b6103716102ea366004611365565b60408051608081018252600080825260208201819052918101829052606081019190915250600090815260056020908152604091829020825160808101845281546001600160a01b0381168252600160a01b810467ffffffffffffffff1693820193909352600160e01b90920460ff16151592820192909252600190910154606082015290565b60405161015b919081516001600160a01b0316815260208083015167ffffffffffffffff16908201526040808301511515908201526060918201519181019190915260800190565b6101c56103c7366004611365565b6107e5565b60006001600160e01b031982166380ac58cd60e01b14806103fd57506001600160e01b03198216635b5e139f60e01b145b8061041857506301ffc9a760e01b6001600160e01b03198316145b92915050565b60606003805461042d9061157c565b80601f01602080910402602001604051908101604052809291908181526020018280546104599061157c565b80156104a65780601f1061047b576101008083540402835291602001916104a6565b820191906000526020600020905b81548152906001019060200180831161048957829003601f168201915b5050505050905090565b60006104bb826107fa565b6104d8576040516333d1c03960e21b815260040160405180910390fd5b506000908152600760205260409020546001600160a01b031690565b60006104ff826105ad565b9050806001600160a01b0316836001600160a01b031614156105345760405163250fdee360e21b815260040160405180910390fd5b336001600160a01b0382161461056b5761054e81336102ae565b61056b576040516367d9dca160e11b815260040160405180910390fd5b61057683838361083a565b505050565b610576838383610896565b61058f81610aa8565b50565b610576838383604051806020016040528060008152506106c4565b60006105b882610be6565b5192915050565b60006001600160a01b0382166105e8576040516323d3ad8160e21b815260040160405180910390fd5b506001600160a01b031660009081526006602052604090205467ffffffffffffffff1690565b60606004805461042d9061157c565b61062a8282600a54610d2a565b5050565b6001600160a01b0382163314156106585760405163b06307db60e01b815260040160405180910390fd5b3360008181526008602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b6106cf848484610896565b6001600160a01b0383163b15610708576106eb84848484610d45565b610708576040516368d2bf6b60e11b815260040160405180910390fd5b50505050565b6060610719826107fa565b61073657604051630a14c4b560e41b815260040160405180910390fd5b6000610740610e3c565b9050600061074f306014610e5c565b9050815160001415610770576040518060200160405280600081525061079d565b818161077b86611003565b60405160200161078d939291906115b7565b6040516020818303038152906040525b949350505050565b606060006107b4306014610e5c565b90506107be610e3c565b816040516020016107d0929190611607565b60405160208183030381529060405291505090565b60006107f082610be6565b6060015192915050565b60008161080660005490565b11158015610815575060015482105b8015610418575050600090815260056020526040902054600160e01b900460ff161590565b60008281526007602052604080822080546001600160a01b0319166001600160a01b0387811691821790925591518593918516917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591a4505050565b60006108a182610be6565b60608101518151919250906001600160a01b038681169116146108d65760405162a1148160e81b815260040160405180910390fd5b6000336001600160a01b03871614806108f457506108f486336102ae565b8061090f575033610904856104b0565b6001600160a01b0316145b90508061092f57604051632ce44b5f60e11b815260040160405180910390fd5b6001600160a01b03851661095657604051633a954ecd60e21b815260040160405180910390fd5b6109626000858861083a565b6001600160a01b038681166000908152600660209081526040808320805467ffffffffffffffff1980821667ffffffffffffffff92831660001901831617909255948a168085528285208054928316928716600101871692909217909155888452600590925290912080546001600160e01b0319168217600160a01b4290941693909302929092178255156109f957600181018390555b60018501600081815260056020526040902080546001600160a01b0316610a5c576001548214610a5c578054602087015167ffffffffffffffff16600160a01b026001600160e01b03199091166001600160a01b038b1617178155600181018590555b50505083856001600160a01b0316876001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050505050565b80610ac6576040516356be441560e01b815260040160405180910390fd5b6000546001541415610aeb5760405163c0367cab60e01b815260040160405180910390fd5b60095480610af857506000545b6001548110610b1a576040516370e89b1b60e01b815260040160405180910390fd5b6001548282016000198101911015610b355750600154600019015b815b818111610bdb576000818152600560205260409020546001600160a01b0316158015610b795750600081815260056020526040902054600160e01b900460ff16155b15610bd3576000610b8982610be6565b805160008481526005602090815260409091208054919093015167ffffffffffffffff16600160a01b026001600160e01b03199091166001600160a01b0390921691909117179055505b600101610b37565b506001016009555050565b6040805160808101825260008082526020820181905291810182905260608101919091528180610c1560005490565b11610d1157600154811015610d1157600081815260056020908152604091829020825160808101845281546001600160a01b0381168252600160a01b810467ffffffffffffffff1693820193909352600160e01b90920460ff16151592820183905260010154606082015290610d0f5780516001600160a01b031615610c9c579392505050565b5060001901600081815260056020908152604091829020825160808101845281546001600160a01b038116808352600160a01b820467ffffffffffffffff1694830194909452600160e01b900460ff1615159381019390935260010154606083015215610d0a579392505050565b610c9c565b505b604051636f96cda160e11b815260040160405180910390fd5b61057683838360405180602001604052806000815250611101565b604051630a85bd0160e11b81526000906001600160a01b0385169063150b7a0290610d7a903390899088908890600401611636565b602060405180830381600087803b158015610d9457600080fd5b505af1925050508015610dc4575060408051601f3d908101601f19168201909252610dc191810190611673565b60015b610e1f573d808015610df2576040519150601f19603f3d011682016040523d82523d6000602084013e610df7565b606091505b508051610e17576040516368d2bf6b60e11b815260040160405180910390fd5b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050949350505050565b606060405180606001604052806022815260200161177b60229139905090565b60606000610e6b8360026116a6565b610e769060026116c5565b67ffffffffffffffff811115610e8e57610e8e611457565b6040519080825280601f01601f191660200182016040528015610eb8576020820181803683370190505b509050600360fc1b81600081518110610ed357610ed36116dd565b60200101906001600160f81b031916908160001a905350600f60fb1b81600181518110610f0257610f026116dd565b60200101906001600160f81b031916908160001a9053506000610f268460026116a6565b610f319060016116c5565b90505b6001811115610fa9576f181899199a1a9b1b9c1cb0b131b232b360811b85600f1660108110610f6557610f656116dd565b1a60f81b828281518110610f7b57610f7b6116dd565b60200101906001600160f81b031916908160001a90535060049490941c93610fa2816116f3565b9050610f34565b508315610ffc5760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e74604482015260640160405180910390fd5b9392505050565b6060816110275750506040805180820190915260018152600360fc1b602082015290565b8160005b8115611051578061103b8161170a565b915061104a9050600a8361173b565b915061102b565b60008167ffffffffffffffff81111561106c5761106c611457565b6040519080825280601f01601f191660200182016040528015611096576020820181803683370190505b5090505b841561079d576110ab60018361174f565b91506110b8600a86611766565b6110c39060306116c5565b60f81b8183815181106110d8576110d86116dd565b60200101906001600160f81b031916908160001a9053506110fa600a8661173b565b945061109a565b6001546001600160a01b03851661112a57604051622e076360e81b815260040160405180910390fd5b836111485760405163b562e8dd60e01b815260040160405180910390fd5b6001600160a01b038516600081815260066020908152604080832080546fffffffffffffffffffffffffffffffff19811667ffffffffffffffff8083168c0181169182176801000000000000000067ffffffffffffffff1990941690921783900481168c01811690920217909155858452600590925290912080546001600160e01b0319168317600160a01b42909316929092029190911781556001018490558190818601903b15611277575b60405182906001600160a01b038916906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a46112406000888480600101955087610d45565b61125d576040516368d2bf6b60e11b815260040160405180910390fd5b8082106111f557826001541461127257600080fd5b6112bc565b5b6040516001830192906001600160a01b038916906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a4808210611278575b506001555050505050565b6001600160e01b03198116811461058f57600080fd5b6000602082840312156112ef57600080fd5b8135610ffc816112c7565b60005b838110156113155781810151838201526020016112fd565b838111156107085750506000910152565b6000815180845261133e8160208601602086016112fa565b601f01601f19169290920160200192915050565b602081526000610ffc6020830184611326565b60006020828403121561137757600080fd5b5035919050565b80356001600160a01b038116811461139557600080fd5b919050565b600080604083850312156113ad57600080fd5b6113b68361137e565b946020939093013593505050565b6000806000606084860312156113d957600080fd5b6113e28461137e565b92506113f06020850161137e565b9150604084013590509250925092565b60006020828403121561141257600080fd5b610ffc8261137e565b6000806040838503121561142e57600080fd5b6114378361137e565b91506020830135801515811461144c57600080fd5b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b6000806000806080858703121561148357600080fd5b61148c8561137e565b935061149a6020860161137e565b925060408501359150606085013567ffffffffffffffff808211156114be57600080fd5b818701915087601f8301126114d257600080fd5b8135818111156114e4576114e4611457565b604051601f8201601f19908116603f0116810190838211818310171561150c5761150c611457565b816040528281528a602084870101111561152557600080fd5b82602086016020830137600060208483010152809550505050505092959194509250565b6000806040838503121561155c57600080fd5b6115658361137e565b91506115736020840161137e565b90509250929050565b600181811c9082168061159057607f821691505b602082108114156115b157634e487b7160e01b600052602260045260246000fd5b50919050565b600084516115c98184602089016112fa565b8451908301906115dd8183602089016112fa565b602f60f81b910190815283516115fa8160018401602088016112fa565b0160010195945050505050565b600083516116198184602088016112fa565b83519083019061162d8183602088016112fa565b01949350505050565b6001600160a01b038581168252841660208201526040810183905260806060820181905260009061166990830184611326565b9695505050505050565b60006020828403121561168557600080fd5b8151610ffc816112c7565b634e487b7160e01b600052601160045260246000fd5b60008160001904831182151516156116c0576116c0611690565b500290565b600082198211156116d8576116d8611690565b500190565b634e487b7160e01b600052603260045260246000fd5b60008161170257611702611690565b506000190190565b600060001982141561171e5761171e611690565b5060010190565b634e487b7160e01b600052601260045260246000fd5b60008261174a5761174a611725565b500490565b60008282101561176157611761611690565b500390565b60008261177557611775611725565b50069056fe68747470733a2f2f6e66742e62626e706f6c6c732e78797a2f6170692f6d6574612fa26469706673582212205620132faaa724bb9097596363a11bf39ea050611cfd62c29f8078aefda8115664736f6c63430008090033";

type ERC721AOwnersExplicitStartTokenIdMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC721AOwnersExplicitStartTokenIdMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC721AOwnersExplicitStartTokenIdMock__factory extends ContractFactory {
  constructor(...args: ERC721AOwnersExplicitStartTokenIdMockConstructorParams) {
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
  ): Promise<ERC721AOwnersExplicitStartTokenIdMock> {
    return super.deploy(
      name_,
      symbol_,
      startTokenId_,
      overrides || {}
    ) as Promise<ERC721AOwnersExplicitStartTokenIdMock>;
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
  override attach(address: string): ERC721AOwnersExplicitStartTokenIdMock {
    return super.attach(address) as ERC721AOwnersExplicitStartTokenIdMock;
  }
  override connect(
    signer: Signer
  ): ERC721AOwnersExplicitStartTokenIdMock__factory {
    return super.connect(
      signer
    ) as ERC721AOwnersExplicitStartTokenIdMock__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC721AOwnersExplicitStartTokenIdMockInterface {
    return new utils.Interface(
      _abi
    ) as ERC721AOwnersExplicitStartTokenIdMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC721AOwnersExplicitStartTokenIdMock {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ERC721AOwnersExplicitStartTokenIdMock;
  }
}

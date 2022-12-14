/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export interface AuthProxyInterface extends utils.Interface {
  functions: {
    "addAdminUser(address,address,bytes4)": FunctionFragment;
    "can(address,address,bytes4)": FunctionFragment;
  };

  getFunction(nameOrSignatureOrTopic: "addAdminUser" | "can"): FunctionFragment;

  encodeFunctionData(
    functionFragment: "addAdminUser",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "can",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "addAdminUser",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "can", data: BytesLike): Result;

  events: {};
}

export interface AuthProxy extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: AuthProxyInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    addAdminUser(
      user_: PromiseOrValue<string>,
      target: PromiseOrValue<string>,
      func: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    can(
      user: PromiseOrValue<string>,
      target: PromiseOrValue<string>,
      func: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  addAdminUser(
    user_: PromiseOrValue<string>,
    target: PromiseOrValue<string>,
    func: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  can(
    user: PromiseOrValue<string>,
    target: PromiseOrValue<string>,
    func: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    addAdminUser(
      user_: PromiseOrValue<string>,
      target: PromiseOrValue<string>,
      func: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    can(
      user: PromiseOrValue<string>,
      target: PromiseOrValue<string>,
      func: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    addAdminUser(
      user_: PromiseOrValue<string>,
      target: PromiseOrValue<string>,
      func: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    can(
      user: PromiseOrValue<string>,
      target: PromiseOrValue<string>,
      func: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addAdminUser(
      user_: PromiseOrValue<string>,
      target: PromiseOrValue<string>,
      func: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    can(
      user: PromiseOrValue<string>,
      target: PromiseOrValue<string>,
      func: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}

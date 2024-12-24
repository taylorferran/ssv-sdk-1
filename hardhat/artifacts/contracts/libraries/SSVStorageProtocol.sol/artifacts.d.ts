// This file was autogenerated by hardhat-viem, do not edit it.
// prettier-ignore
// tslint:disable
// eslint-disable

import "hardhat/types/artifacts";
import type { GetContractReturnType } from "@nomicfoundation/hardhat-viem/types";

import { SSVStorageProtocol$Type } from "./SSVStorageProtocol";

declare module "hardhat/types/artifacts" {
  interface ArtifactsMap {
    ["SSVStorageProtocol"]: SSVStorageProtocol$Type;
    ["contracts/libraries/SSVStorageProtocol.sol:SSVStorageProtocol"]: SSVStorageProtocol$Type;
  }

  interface ContractTypesMap {
    ["SSVStorageProtocol"]: GetContractReturnType<SSVStorageProtocol$Type["abi"]>;
    ["contracts/libraries/SSVStorageProtocol.sol:SSVStorageProtocol"]: GetContractReturnType<SSVStorageProtocol$Type["abi"]>;
  }
}
// This file was autogenerated by hardhat-viem, do not edit it.
// prettier-ignore
// tslint:disable
// eslint-disable

import "hardhat/types/artifacts";
import type { GetContractReturnType } from "@nomicfoundation/hardhat-viem/types";

import { SSVProxy$Type } from "./SSVProxy";

declare module "hardhat/types/artifacts" {
  interface ArtifactsMap {
    ["SSVProxy"]: SSVProxy$Type;
    ["contracts/SSVProxy.sol:SSVProxy"]: SSVProxy$Type;
  }

  interface ContractTypesMap {
    ["SSVProxy"]: GetContractReturnType<SSVProxy$Type["abi"]>;
    ["contracts/SSVProxy.sol:SSVProxy"]: GetContractReturnType<SSVProxy$Type["abi"]>;
  }
}
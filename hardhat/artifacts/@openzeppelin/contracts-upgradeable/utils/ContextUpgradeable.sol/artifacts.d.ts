// This file was autogenerated by hardhat-viem, do not edit it.
// prettier-ignore
// tslint:disable
// eslint-disable

import "hardhat/types/artifacts";
import type { GetContractReturnType } from "@nomicfoundation/hardhat-viem/types";

import { ContextUpgradeable$Type } from "./ContextUpgradeable";

declare module "hardhat/types/artifacts" {
  interface ArtifactsMap {
    ["ContextUpgradeable"]: ContextUpgradeable$Type;
    ["@openzeppelin/contracts-upgradeable/utils/ContextUpgradeable.sol:ContextUpgradeable"]: ContextUpgradeable$Type;
  }

  interface ContractTypesMap {
    ["ContextUpgradeable"]: GetContractReturnType<ContextUpgradeable$Type["abi"]>;
    ["@openzeppelin/contracts-upgradeable/utils/ContextUpgradeable.sol:ContextUpgradeable"]: GetContractReturnType<ContextUpgradeable$Type["abi"]>;
  }
}
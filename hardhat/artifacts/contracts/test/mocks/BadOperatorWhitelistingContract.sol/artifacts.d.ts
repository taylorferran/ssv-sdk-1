// This file was autogenerated by hardhat-viem, do not edit it.
// prettier-ignore
// tslint:disable
// eslint-disable

import "hardhat/types/artifacts";
import type { GetContractReturnType } from "@nomicfoundation/hardhat-viem/types";

import { BadOperatorWhitelistingContract$Type } from "./BadOperatorWhitelistingContract";

declare module "hardhat/types/artifacts" {
  interface ArtifactsMap {
    ["BadOperatorWhitelistingContract"]: BadOperatorWhitelistingContract$Type;
    ["contracts/test/mocks/BadOperatorWhitelistingContract.sol:BadOperatorWhitelistingContract"]: BadOperatorWhitelistingContract$Type;
  }

  interface ContractTypesMap {
    ["BadOperatorWhitelistingContract"]: GetContractReturnType<BadOperatorWhitelistingContract$Type["abi"]>;
    ["contracts/test/mocks/BadOperatorWhitelistingContract.sol:BadOperatorWhitelistingContract"]: GetContractReturnType<BadOperatorWhitelistingContract$Type["abi"]>;
  }
}
// This file was autogenerated by hardhat-viem, do not edit it.
// prettier-ignore
// tslint:disable
// eslint-disable

import "hardhat/types/artifacts";
import type { GetContractReturnType } from "@nomicfoundation/hardhat-viem/types";

import { MockWhitelistingContract$Type } from "./MockWhitelistingContract";

declare module "hardhat/types/artifacts" {
  interface ArtifactsMap {
    ["MockWhitelistingContract"]: MockWhitelistingContract$Type;
    ["contracts/test/mocks/MockWhitelistingContract.sol:MockWhitelistingContract"]: MockWhitelistingContract$Type;
  }

  interface ContractTypesMap {
    ["MockWhitelistingContract"]: GetContractReturnType<MockWhitelistingContract$Type["abi"]>;
    ["contracts/test/mocks/MockWhitelistingContract.sol:MockWhitelistingContract"]: GetContractReturnType<MockWhitelistingContract$Type["abi"]>;
  }
}

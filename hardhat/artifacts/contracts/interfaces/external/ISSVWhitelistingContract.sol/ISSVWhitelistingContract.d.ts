// This file was autogenerated by hardhat-viem, do not edit it.
// prettier-ignore
// tslint:disable
// eslint-disable

import type { Address } from "viem";
import type { GetContractReturnType } from "@nomicfoundation/hardhat-viem/types";
import "@nomicfoundation/hardhat-viem/types";

export interface ISSVWhitelistingContract$Type {
  "_format": "hh-sol-artifact-1",
  "contractName": "ISSVWhitelistingContract",
  "sourceName": "contracts/interfaces/external/ISSVWhitelistingContract.sol",
  "abi": [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "operatorId",
          "type": "uint256"
        }
      ],
      "name": "isWhitelisted",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ],
  "bytecode": "0x",
  "deployedBytecode": "0x",
  "linkReferences": {},
  "deployedLinkReferences": {}
}

declare module "@nomicfoundation/hardhat-viem/types" {
  export function deployContract(
    contractName: "ISSVWhitelistingContract",
    constructorArgs?: [],
    config?: DeployContractConfig
  ): Promise<GetContractReturnType<ISSVWhitelistingContract$Type["abi"]>>;
  export function deployContract(
    contractName: "contracts/interfaces/external/ISSVWhitelistingContract.sol:ISSVWhitelistingContract",
    constructorArgs?: [],
    config?: DeployContractConfig
  ): Promise<GetContractReturnType<ISSVWhitelistingContract$Type["abi"]>>;

  export function sendDeploymentTransaction(
    contractName: "ISSVWhitelistingContract",
    constructorArgs?: [],
    config?: SendDeploymentTransactionConfig
  ): Promise<{
    contract: GetContractReturnType<ISSVWhitelistingContract$Type["abi"]>;
    deploymentTransaction: GetTransactionReturnType;
  }>;
  export function sendDeploymentTransaction(
    contractName: "contracts/interfaces/external/ISSVWhitelistingContract.sol:ISSVWhitelistingContract",
    constructorArgs?: [],
    config?: SendDeploymentTransactionConfig
  ): Promise<{
    contract: GetContractReturnType<ISSVWhitelistingContract$Type["abi"]>;
    deploymentTransaction: GetTransactionReturnType;
  }>;

  export function getContractAt(
    contractName: "ISSVWhitelistingContract",
    address: Address,
    config?: GetContractAtConfig
  ): Promise<GetContractReturnType<ISSVWhitelistingContract$Type["abi"]>>;
  export function getContractAt(
    contractName: "contracts/interfaces/external/ISSVWhitelistingContract.sol:ISSVWhitelistingContract",
    address: Address,
    config?: GetContractAtConfig
  ): Promise<GetContractReturnType<ISSVWhitelistingContract$Type["abi"]>>;
}
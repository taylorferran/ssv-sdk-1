import { MainnetV4SetterABI } from '@/abi/mainnet/v4/setter'
import { TokenABI } from '@/abi/token'
import { AbiInputsToParams, MainnetEvent, paramsToArray } from '@/types/contract-interactions'
import { Prettify } from '@/types/utils'
import { Address, ExtractAbiFunctions } from 'abitype'
import { TokenEvent } from 'dist/types/contract'
import {
  Hash,
  PublicClient,
  WaitForTransactionReceiptReturnType,
  WalletClient,
  decodeEventLog,
} from 'viem'

type Props = {
  walletClient: WalletClient
  publicClient: PublicClient
  contractAddress: Address
}

type WriteFns = ExtractAbiFunctions<typeof MainnetV4SetterABI>

// This type maps through each function in WriteFns and creates the desired structure
type WriterFunctions = {
  [K in WriteFns as K['name']]: (args: Prettify<AbiInputsToParams<K['inputs']>>) => Promise<{
    hash: Hash
    wait: () => Promise<
      WaitForTransactionReceiptReturnType & {
        events: (MainnetEvent | TokenEvent)[]
      }
    >
  }>
}

export const createWriters = ({
  walletClient,
  publicClient,
  contractAddress,
}: Props): WriterFunctions => {
  const writeFnsMainnet = MainnetV4SetterABI.filter(
    (item) =>
      item.type === 'function' &&
      item.stateMutability !== 'view' &&
      item.stateMutability !== 'pure',
  ) as WriteFns[]

  return Object.fromEntries(
    writeFnsMainnet.map((fn) => {
      const func = async (args: any) => {
        const { request } = await publicClient.simulateContract({
          address: contractAddress,
          abi: MainnetV4SetterABI,
          functionName: fn.name as any,
          args: paramsToArray({ params: args, abiFunction: fn }),
          account: walletClient.account!,
        })
        const hash = await walletClient.writeContract(request)
        return {
          hash,
          wait: () =>
            publicClient.waitForTransactionReceipt({ hash }).then((receipt) => ({
              ...receipt,
              events: receipt.logs.reduce(
                (acc, log) => {
                  try {
                    acc.push(
                      decodeEventLog({
                        abi: MainnetV4SetterABI,
                        data: log.data,
                        topics: log.topics,
                      }),
                    )
                  } catch (e) {
                    try {
                      acc.push(
                        decodeEventLog({
                          abi: TokenABI,
                          data: log.data,
                          topics: log.topics,
                        }),
                      )
                    } catch (e) {
                      console.error(e)
                    }
                  }
                  return acc
                },
                [] as (MainnetEvent | TokenEvent)[],
              ),
            })),
        }
      }
      return [fn.name, func]
    }),
  ) as WriterFunctions
}
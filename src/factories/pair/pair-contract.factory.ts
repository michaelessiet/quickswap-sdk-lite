import { BigNumberish } from 'ethers';
import { ContractContext as PairContractContext } from '../../ABI/types/quickswap-pair';
import { ContractContext } from '../../common/contract-context';
import { EthersProvider } from '../../ethers-provider';

export class QuickswapPairContractFactory {
  private _quickswapPairFactory = this._ethersProvider.getContract<PairContractContext>(
    JSON.stringify(ContractContext.pairAbi),
    new ContractContext(this.chainId).pairAddress()
  );

  constructor(private _ethersProvider: EthersProvider,private chainId:number) {}

  public async allPairs(parameter0: BigNumberish): Promise<string> {
    return await this._quickswapPairFactory.allPairs(parameter0);
  }

  public async allPairsLength(): Promise<string> {
    return (await this._quickswapPairFactory.allPairsLength()).toHexString();
  }

  public createPair(tokenA: string, tokenB: string): string {
    return this._quickswapPairFactory.interface.encodeFunctionData(
      'createPair',
      [tokenA, tokenB]
    );
  }

  public async feeTo(): Promise<string> {
    return await this._quickswapPairFactory.feeTo();
  }

  public async feeToSetter(): Promise<string> {
    return await this._quickswapPairFactory.feeToSetter();
  }

  public async getPair(
    parameter0: string,
    parameter1: string
  ): Promise<string> {
    return await this._quickswapPairFactory.getPair(parameter0, parameter1);
  }

  public async setFeeTo(_feeTo: string): Promise<string> {
    return this._quickswapPairFactory.interface.encodeFunctionData('setFeeTo', [
      _feeTo,
    ]);
  }

  public async setFeeToSetter(_feeToSetter: string): Promise<string> {
    return this._quickswapPairFactory.interface.encodeFunctionData(
      'setFeeToSetter',
      [_feeToSetter]
    );
  }
}

const contract = artifacts.require('erc20');
describe('ERC20 runtime', () => {

  describe('test global', () => {
    it('Get global var', async () => {
        console.log(halva_accounts[0].address);
    });
  });

  describe('test contract', () => {
    it('Get contract data', async () => {
      const res = await contract.total_supply(alicePair);
      expect(eventEmitted(res.txResult, 'ExtrinsicSuccess', 'system'));
      expect(res.rpcResult.data.toString()).equal('0xe8030000000000000000000000000000'); // u8a:: 1000
      });
    });
  });

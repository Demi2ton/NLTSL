import { Blockchain, SandboxContract } from '@ton-community/sandbox';
import { Cell, toNano } from 'ton-core';
import { Nll3 } from '../wrappers/Nll3';
import '@ton-community/test-utils';
import { compile } from '@ton-community/blueprint';

describe('Nll3', () => {
    let code: Cell;

    beforeAll(async () => {
        code = await compile('Nll3');
    });

    let blockchain: Blockchain;
    let nll3: SandboxContract<Nll3>;

    beforeEach(async () => {
        blockchain = await Blockchain.create();

        nll3 = blockchain.openContract(Nll3.createFromConfig({}, code));

        const deployer = await blockchain.treasury('deployer');

        const deployResult = await nll3.sendDeploy(deployer.getSender(), toNano('0.05'));

        expect(deployResult.transactions).toHaveTransaction({
            from: deployer.address,
            to: nll3.address,
            deploy: true,
        });
    });

    it('should deploy', async () => {
        // the check is done inside beforeEach
        // blockchain and nll3 are ready to use
    });
});

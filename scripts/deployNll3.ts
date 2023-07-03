import { Address, Dictionary, toNano } from 'ton-core';
import { Nll3 } from '../wrappers/Nll3';
import { compile, NetworkProvider } from '@ton-community/blueprint';
import { mainModule } from 'process';

export async function run(provider: NetworkProvider) {
    let myAddress = Address.parse('EQAx52UtknauBxphqFHWCUEIAEtAbbowvaXIfhXyIVUCb8OW');
    let stAddress = Address.parse('EQCY4M6TZYnOMnGBQlqi_nyeaIB1LeBFfGgP4uXQ1VWhales');

    const nll3 = provider.open(Nll3.createFromConfig({
        ownerAddress: myAddress,
        stAddress: stAddress,
        key: 0,
        total: 0,
        bonus: 0,
        
    }, await compile('Nll3')));

    await nll3.sendDeploy(provider.sender(), toNano('0.1'));

    await provider.waitForDeploy(nll3.address);

    console.log('-', await nll3.getId());
    // run methods on `nll3`
} 

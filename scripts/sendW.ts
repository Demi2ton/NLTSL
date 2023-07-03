
import { Address, toNano } from 'ton-core';
import { Nll3 } from '../wrappers/Nll3';
import { NetworkProvider, sleep } from '@ton-community/blueprint';

export async function run(provider: NetworkProvider, args: string[]) {
    const ui = provider.ui();

    const address = Address.parse(args.length > 0 ? args[0] : await ui.input('NoLossLot address'));

    const nll3 = provider.open(Nll3.createFromAddress(address));


    await nll3.sendWid(provider.sender(), {
        op: 3435,
        value: toNano('0.16'),
        stake: Address.parse('EQCY4M6TZYnOMnGBQlqi_nyeaIB1LeBFfGgP4uXQ1VWhales')
    });


    ui.clearActionPrompt();
    ui.write('!sent!');
}
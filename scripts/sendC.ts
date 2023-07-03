
import { Address, toNano } from 'ton-core';
import { Nll3 } from '../wrappers/Nll3';
import { NetworkProvider, sleep } from '@ton-community/blueprint';

export async function run(provider: NetworkProvider, args: string[]) {
    const ui = provider.ui();

    const address = Address.parse(args.length > 0 ? args[0] : await ui.input('NoLossLot address'));

    const nll3 = provider.open(Nll3.createFromAddress(address));


    await nll3.sendChoose(provider.sender(), {
        op: 3433,
        value: toNano('0.3'),
    });


    ui.clearActionPrompt();
    ui.write('!sent!');
    console.log('tot', await nll3.getId());
    console.log('keys', await nll3.getKeys());

}
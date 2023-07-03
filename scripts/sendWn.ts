
import { Address, toNano } from 'ton-core';
import { Nll3 } from '../wrappers/Nll3';
import { NetworkProvider, sleep } from '@ton-community/blueprint';

export async function run(provider: NetworkProvider, args: string[]) {
    const ui = provider.ui();

    const address = Address.parse(args.length > 0 ? args[0] : await ui.input('NoLossLot address'));

    const nll3 = provider.open(Nll3.createFromAddress(address));


    await nll3.sendWidn(provider.sender(), {
        op: 3535,
        value: toNano('0.1'),
        stake: Address.parse('Ef8h5pd9_ZuWJOlilBH6a_LOACxl_R6DJbWHhut7QLDLWSgf'),
    });


    ui.clearActionPrompt();
    ui.write('!sent!');
}
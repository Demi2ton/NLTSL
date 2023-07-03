import { Address, beginCell, Cell, Contract, contractAddress, ContractProvider, Dictionary, DictionaryKey, DictionaryValue, Sender, SendMode, Slice } from 'ton-core';

export type Nll3Config = {
    ownerAddress: Address;
    stAddress: Address;
    key: number;
    total: number;
    bonus: number;


};

export function nll3ConfigToCell(config: Nll3Config): Cell {
    return beginCell().storeAddress(config.ownerAddress).storeAddress(config.stAddress).storeUint(config.key, 32).storeUint(config.total, 32).storeUint(config.bonus, 32).endCell(); 
}

export class Nll3 implements Contract {
    constructor(readonly address: Address, readonly init?: { code: Cell; data: Cell }) {}

    static createFromAddress(address: Address) {
        return new Nll3(address);
    }

    static createFromConfig(config: Nll3Config, code: Cell, workchain = 0) {
        const data = nll3ConfigToCell(config);
        const init = { code, data };
        return new Nll3(contractAddress(workchain, init), init);
    }

    async sendDeploy(provider: ContractProvider, via: Sender, value: bigint) {
        await provider.internal(via, {
            value,
            sendMode: SendMode.PAY_GAS_SEPARATELY,
            body: beginCell().endCell(),
        });
    }
    async getId(provider: ContractProvider){
       const result = await provider.get('get_id', []);
        return result.stack.readNumber();
    }
    async getKeys(provider: ContractProvider){
        const result = await provider.get('get_keys', []);
         return result.stack.readNumber();
         
     }

     async getDict(provider: ContractProvider){
        const result = await provider.get('get_dict', []);
         return result.stack.readCell();
         
         
     }

    async sendStake(
        provider: ContractProvider,
        via: Sender,
        opts: {
            op: number;
            value: bigint;
            stake: Address;
        }
    ) {
        await provider.internal(via, {
            value: opts.value,
            sendMode: SendMode.PAY_GAS_SEPARATELY,
            body: beginCell()
                .storeUint(opts.op, 32)
                .storeAddress(opts.stake)
                .endCell(),
        });
    }

    async sendWid(
        provider: ContractProvider,
        via: Sender,
        opts: {
            op: number;
            value: bigint;
            stake: Address;
        }
    ) {
        await provider.internal(via, {
            value: opts.value,
            sendMode: SendMode.PAY_GAS_SEPARATELY,
            body: beginCell()
                .storeUint(opts.op, 32)
                .storeAddress(opts.stake)
                .endCell(),
        });
    }

    async sendChoose(
        provider: ContractProvider,
        via: Sender,
        opts: {
            op: number;
            value: bigint;
        }
    ) {
        await provider.internal(via, {
            value: opts.value,
            sendMode: SendMode.PAY_GAS_SEPARATELY,
            body: beginCell()
                .storeUint(opts.op, 32)
                .endCell(),
        });
    }

    async sendStakeN(
        provider: ContractProvider,
        via: Sender,
        opts: {
            op: number;
            value: bigint;
            stake: Address;
            
        }
    ) {
        await provider.internal(via, {
            value: opts.value,
            sendMode: SendMode.PAY_GAS_SEPARATELY,
            body: beginCell()
                .storeUint(opts.op, 32)
                .storeAddress(opts.stake)
                .endCell(),
        });
    }

    async sendFreeN(
        provider: ContractProvider,
        via: Sender,
        opts: {
            op: number;
            value: bigint;
            stake: Address;
            
        }
    ) {
        await provider.internal(via, {
            value: opts.value,
            sendMode: SendMode.PAY_GAS_SEPARATELY,
            body: beginCell()
                .storeUint(opts.op, 32)
                .storeAddress(opts.stake)
                .endCell(),
        });
    }

    async sendWidn(
        provider: ContractProvider,
        via: Sender,
        opts: {
            op: number;
            value: bigint;
            stake: Address;
        }
    ) {
        await provider.internal(via, {
            value: opts.value,
            sendMode: SendMode.PAY_GAS_SEPARATELY,
            body: beginCell()
                .storeUint(opts.op, 32)
                .storeAddress(opts.stake)
                .endCell(),
        });
    }
    async sendWith(
        provider: ContractProvider,
        via: Sender,
        opts: {
            op: number;
            value: bigint;
            am: number;
            opv: number;
        }
    ) {
        await provider.internal(via, {
            value: opts.value,
            sendMode: SendMode.PAY_GAS_SEPARATELY,
            body: beginCell()
                .storeUint(opts.op, 32)
                .storeUint(opts.am, 32)
                .storeUint(opts.opv, 32)
                .endCell(),
        });
    }

    async sendFund(
        provider: ContractProvider,
        via: Sender,
        opts: {
            op: number;
            value: bigint;
        }
    ) {
        await provider.internal(via, {
            value: opts.value,
            sendMode: SendMode.PAY_GAS_SEPARATELY,
            body: beginCell()
                .storeUint(opts.op, 32)
                .endCell(),
        });
    }

  

    async sendBonus(
        provider: ContractProvider,
        via: Sender,
        opts: {
            op: number;
            value: bigint;
            bo: number;
            
        }
    ) {
        await provider.internal(via, {
            value: opts.value,
            sendMode: SendMode.PAY_GAS_SEPARATELY,
            body: beginCell()
                .storeUint(opts.op, 32)
                .storeUint(opts.bo, 32)
                .endCell(),
        });
    }
}

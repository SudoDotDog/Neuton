/**
 * @author WMXPY
 * @namespace Neuton
 * @description Network
 * @override Unit
 */

import { expect } from 'chai';
import * as Chance from 'chance';
import { INetwork } from '../../src/declare';
import { Network } from '../../src/network';

describe('Given {Network} Class', (): void => {

    const chance: Chance.Chance = new Chance('neuton-network');

    it('should be able to construct', (): void => {

        const network: INetwork = Network.create();

        expect(network).to.be.instanceOf(Network);
    });
});

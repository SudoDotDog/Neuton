/**
 * @author WMXPY
 * @namespace Neuton
 * @description Network
 * @override Unit
 */

import { expect } from 'chai';
import * as Chance from 'chance';
import { Network } from '../../src/network';

describe('Given {Network} Class', (): void => {

    const chance: Chance.Chance = new Chance('neuton-network');

    it('should be able to construct', (): void => {

        const network: Network = Network.create();

        expect(network).to.be.instanceOf(Network);
    });
});

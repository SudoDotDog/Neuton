/**
 * @author WMXPY
 * @namespace Neuton
 * @description Instance
 * @override Unit
 */

import { expect } from 'chai';
import * as Chance from 'chance';
import { NeutonInstance } from '../../src/instance';

describe('Given {Instance} Class', (): void => {

    const chance: Chance.Chance = new Chance('neuton-instance');

    it('should be able to construct', (): void => {

        const instance: NeutonInstance = NeutonInstance.create();

        expect(instance).to.be.instanceOf(NeutonInstance);
    });
});

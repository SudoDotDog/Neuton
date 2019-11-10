/**
 * @author WMXPY
 * @namespace Neuton
 * @description Neuron
 * @override Unit
 */

import { expect } from 'chai';
import * as Chance from 'chance';
import { Neuron } from '../../src';

describe('Given {Neuron} Class', (): void => {

    const chance: Chance.Chance = new Chance('neuton-neuron');

    it('should be able to construct', (): void => {

        const neuron: Neuron = Neuron.create();

        expect(neuron).to.be.instanceOf(Neuron);
    });
});

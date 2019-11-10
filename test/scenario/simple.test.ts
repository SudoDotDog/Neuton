/**
 * @author WMXPY
 * @namespace Neuton
 * @description Simple
 * @override Scenario
 */

import { expect } from 'chai';
import * as Chance from 'chance';
import { Layer } from '../../src';

describe('Given <Simple> Scenario', (): void => {

    const chance: Chance.Chance = new Chance('scenario-neuton-simple');

    it('should be able to construct', (): void => {

        const layer: Layer = Layer.create();

        expect(layer).to.be.instanceOf(Layer);
    });
});

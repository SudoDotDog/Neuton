/**
 * @author WMXPY
 * @namespace Neuton
 * @description Layer
 * @override Unit
 */

import { expect } from 'chai';
import * as Chance from 'chance';
import { Layer } from '../../src';

describe('Given {Layer} Class', (): void => {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const chance: Chance.Chance = new Chance('neuton-layer');

    it('should be able to construct', (): void => {

        const layer: Layer = Layer.create();

        expect(layer).to.be.instanceOf(Layer);
    });
});

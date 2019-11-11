/**
 * @author WMXPY
 * @namespace Neuton
 * @description Simple
 * @override Scenario
 */

import * as Chance from 'chance';
import { Layer, Network } from '../../src';
import { ILayer, INetwork, NetworkFunction } from '../../src/declare';

describe('Given <Simple> Scenario', (): void => {

    const chance: Chance.Chance = new Chance('scenario-neuton-simple');

    it('should be able to execute', (): void => {

        const network: INetwork = Network.create();

        const timesTwoLayer: ILayer = Layer.create();
        timesTwoLayer.requireInput();

        const func: NetworkFunction = network.build();


    });
});

/**
 * @author WMXPY
 * @namespace Neuton
 * @description Simple
 * @override Scenario
 */

import { expect } from 'chai';
import * as Chance from 'chance';
import { Layer, Network, Neuron } from '../../src';
import { IInstance, ILayer, INetwork, NetworkFunction } from '../../src/declare';

describe('Given <Simple> Scenario', (): void => {

    const chance: Chance.Chance = new Chance('scenario-neuton-simple');

    it('should be able to times two', (): void => {

        const key: string = chance.string();
        const value: number = chance.natural();

        const network: INetwork = Network.create();

        const timesTwoLayer: ILayer = Layer.create();
        timesTwoLayer.requireInput();

        const inputPassNeuron = Neuron.create((instance: IInstance) => {
            const input = instance.getInputs();
            return input[key];
        });

        timesTwoLayer.addNeurons(inputPassNeuron);
        network.addLayers(timesTwoLayer);

        const outputLayer: ILayer = Layer.create();
        outputLayer.requires(timesTwoLayer);

        const outputNeuron = Neuron.create((instance: IInstance) => {
            return instance.getNeuronResult(inputPassNeuron) * 2;
        });
        outputLayer.addNeurons(outputNeuron);
        network.addOutputLayers(outputLayer);

        const func: NetworkFunction = network.build();

        const result: IInstance = func({
            [key]: value,
        });
        expect(result.getNeuronResult(outputNeuron)).to.be.equal(value * 2);
    });
});

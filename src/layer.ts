/**
 * @author WMXPY
 * @namespace Neuton
 * @description Layer
 */

import { Neuron } from "./neuron";

export class Layer {

    public static create(): Layer {

        return new Layer();
    }

    private readonly _neurons: Neuron[];
    private readonly _requires: Layer[];

    private constructor() {

        this._neurons = [];
        this._requires = [];
    }

    public addNeuron(neuron: Neuron): this {

        return this.addNeurons(neuron);
    }

    public addNeurons(...neurons: Neuron[]): this {

        return this.addNeuronList(neurons);
    }

    public addNeuronList(neuronList: Neuron[]): this {

        this._neurons.push(...neuronList);
        return this;
    }

    public requires(...layers: Layer[]): this {

        this._requires.push(...layers);
        return this;
    }
}

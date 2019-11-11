/**
 * @author WMXPY
 * @namespace Neuton
 * @description Layer
 */

import { ILayer, INeuron } from "./declare";

export class Layer implements ILayer {

    public static create(): Layer {

        return new Layer();
    }

    private readonly _neurons: INeuron[];
    private readonly _requires: ILayer[];

    private constructor() {

        this._neurons = [];
        this._requires = [];
    }

    public addNeurons(...neurons: INeuron[]): this {

        return this.addNeuronList(neurons);
    }

    public addNeuronList(neuronList: INeuron[]): this {

        this._neurons.push(...neuronList);
        return this;
    }

    public getNeurons(): INeuron[] {

        return this._neurons;
    }

    public requires(...layers: ILayer[]): this {

        this._requires.push(...layers);
        return this;
    }
}

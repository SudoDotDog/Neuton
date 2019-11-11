/**
 * @author WMXPY
 * @namespace Neuton
 * @description Instance
 */

import { IInstance, ILayer, INeuron } from "./declare";

export class NeutonInstance implements IInstance {

    public static create(): NeutonInstance {

        return new NeutonInstance();
    }

    private readonly _results: Map<INeuron, any>;

    private constructor() {

        this._results = new Map<INeuron, any>();
    }

    public checkResult(layer: ILayer) {

        const neurons: INeuron[] = layer.getNeurons();
        for (const neuron of neurons) {
            if (!this._results.has(neuron)) {
                return false;
            }
        }
        return true;
    }

    public getNeuronResult(neuron: INeuron): any {

        if (this._results.has(neuron)) {
            return this._results.get(neuron);
        }
        return null;
    }

    public setNeuronResult(neuron: INeuron, value: any): this {

        this._results.set(neuron, value);
        return this;
    }
}

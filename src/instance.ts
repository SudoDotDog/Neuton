/**
 * @author WMXPY
 * @namespace Neuton
 * @description Instance
 */

import { IInstance, ILayer, INeuron } from "./declare";

export class NeutonInstance implements IInstance {

    public static create(inputs: Record<string, any>): NeutonInstance {

        return new NeutonInstance(inputs);
    }

    private readonly _results: Map<INeuron, any>;
    private _inputs: Record<string, any>;

    private constructor(inputs?: Record<string, any>) {

        this._results = new Map<INeuron, any>();
        this._inputs = inputs || {};
    }

    public setInputs(inputs: Record<string, any>): this {

        this._inputs = inputs;
        return this;
    }

    public getInputs(): Record<string, any> {

        return this._inputs;
    }

    public checkRequires(layer: ILayer): boolean {

        const requires: ILayer[] = layer.getRequires();

        for (const each of requires) {
            if (!this.checkResult(each)) {
                return false;
            }
        }
        return true;
    }

    public checkResult(layer: ILayer): boolean {

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

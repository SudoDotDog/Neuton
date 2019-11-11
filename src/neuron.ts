/**
 * @author WMXPY
 * @namespace Neuton
 * @description Neuron
 */

import { IInstance, INeuron, NeuronExecutionFunction } from "./declare";

export class Neuron implements INeuron {

    public static create(executionFunction: NeuronExecutionFunction): Neuron {

        return new Neuron(executionFunction);
    }

    private readonly _executionFunction: NeuronExecutionFunction;

    private constructor(executionFunction: NeuronExecutionFunction) {

        this._executionFunction = executionFunction;
    }

    public execute(instance: IInstance): this {

        const result: any = this._executionFunction(instance);
        instance.setNeuronResult(this, result);
        return this;
    }
}

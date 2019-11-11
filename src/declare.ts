/**
 * @author WMXPY
 * @namespace Neuton
 * @description Declare
 */

export interface INetwork {

    addLayerList(layerList: ILayer[]): this;
    build(): NetworkFunction;
}

export interface ILayer {

    getNeurons(): INeuron[];
    addNeuronList(neuronList: INeuron[]): this;
}

export interface INeuron {

    execute(instance: IInstance): this;
}

export interface IInstance {

    checkResult(layer: ILayer): boolean;
    setNeuronResult(neuron: INeuron, value: any): this;
}

export type NeuronExecutionFunction = (instance: IInstance) => any;
export type NetworkFunction = (inputs: Record<string, any>) => Record<string, any>;

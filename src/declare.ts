/**
 * @author WMXPY
 * @namespace Neuton
 * @description Declare
 */

export interface INetwork {

    addLayers(...layers: ILayer[]): this;
    addLayerList(layerList: ILayer[]): this;
    build(): NetworkFunction;
}

export interface ILayer {

    addNeurons(...neurons: INeuron[]): this;
    addNeuronList(neuronList: INeuron[]): this;
    getNeurons(): INeuron[];

    requires(...layers: ILayer[]): this;
    getRequires(): ILayer[];
}

export interface INeuron {

    execute(instance: IInstance): this;
}

export interface IInstance {

    checkResult(layer: ILayer): boolean;
    getNeuronResult(neuron: INeuron): this;
    setNeuronResult(neuron: INeuron, value: any): this;
}

export type NeuronExecutionFunction = (instance: IInstance) => any;
export type NetworkFunction = (inputs: Record<string, any>) => Record<string, any>;

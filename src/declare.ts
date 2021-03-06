/**
 * @author WMXPY
 * @namespace Neuton
 * @description Declare
 */

export interface INetwork {

    addLayers(...layers: ILayer[]): this;
    addLayerList(layerList: ILayer[]): this;
    getLayers(): ILayer[];

    addOutputLayers(...layers: ILayer[]): this;
    addOutputLayerList(layersList: ILayer[]): this;
    getOutputLayers(): ILayer[];

    getExecutableLayers(): ILayer[];

    build(): NetworkFunction;
}

export interface ILayer {

    addNeurons(...neurons: INeuron[]): this;
    addNeuronList(neuronList: INeuron[]): this;
    getNeurons(): INeuron[];

    requires(...layers: ILayer[]): this;
    requireInput(): this;
    getRequires(): ILayer[];
}

export interface INeuron {

    execute(instance: IInstance): this;
}

export interface IInstance {

    setInputs(inputs: Record<string, any>): this;
    getInputs(): Record<string, any>;

    checkRequires(layer: ILayer): boolean;
    checkResult(layer: ILayer): boolean;
    getNeuronResult(neuron: INeuron): any;
    setNeuronResult(neuron: INeuron, value: any): this;
}

export type NeuronExecutionFunction = (instance: IInstance) => any;
export type NetworkFunction = (inputs: Record<string, any>, instance?: IInstance) => IInstance;

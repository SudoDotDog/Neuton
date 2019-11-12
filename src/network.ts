/**
 * @author WMXPY
 * @namespace Neuton
 * @description Network
 */

import { IInstance, ILayer, INetwork, NetworkFunction } from "./declare";
import { NeutonInstance } from "./instance";
import { concludeLayersResult } from "./util";

export class Network implements INetwork {

    public static create(): INetwork {

        return new Network();
    }

    private readonly _layers: ILayer[];
    private readonly _outputLayers: ILayer[];

    private constructor() {

        this._layers = [];
        this._outputLayers = [];
    }

    public addLayers(...layers: ILayer[]): this {

        return this.addLayerList(layers);
    }

    public addLayerList(layerList: ILayer[]): this {

        this._layers.push(...layerList);
        return this;
    }

    public getOutputLayers(): ILayer[] {

        return this._outputLayers;
    }

    public addOutputLayers(...layers: ILayer[]): this {

        return this.addOutputLayerList(layers);
    }

    public addOutputLayerList(layerList: ILayer[]): this {

        this._outputLayers.push(...layerList);
        return this;
    }

    public getLayers(): ILayer[] {

        return this._layers;
    }

    public getExecutableLayers(): ILayer[] {

        return [...this._layers, ...this._outputLayers];
    }

    public build(): NetworkFunction {

        if (this._outputLayers.length < 1) {
            throw new Error('[Newton] No Output Layer');
        }

        const built: NetworkFunction = (inputs: Record<string, any>, instance?: IInstance): IInstance => {

            if (!instance) {
                return built(inputs, NeutonInstance.create(inputs));
            }

            if (concludeLayersResult(instance, this.getOutputLayers())) {
                return instance;
            }

            layerLoop: for (const layer of this.getExecutableLayers()) {

                if (instance.checkResult(layer)) {
                    continue layerLoop;
                }

                if (instance.checkRequires(layer)) {
                    for (const neuron of layer.getNeurons()) {
                        neuron.execute(instance);
                    }
                }
            }
            return built(inputs, instance);
        };

        return built;
    }
}

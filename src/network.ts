/**
 * @author WMXPY
 * @namespace Neuton
 * @description Network
 */

import { ILayer, INetwork, NetworkFunction, IInstance } from "./declare";
import { NeutonInstance } from "./instance";

export class Network implements INetwork {

    public static create(): INetwork {

        return new Network();
    }

    private readonly _layers: ILayer[];

    private constructor() {

        this._layers = [];
    }

    public addLayers(...layers: ILayer[]): this {

        return this.addLayerList(layers);
    }

    public addLayerList(layerList: ILayer[]): this {

        this._layers.push(...layerList);
        return this;
    }

    public getLayers(): ILayer[] {

        return this._layers;
    }

    public build(): NetworkFunction {

        const instance: IInstance = NeutonInstance.create();

        const built: NetworkFunction = (inputs: Record<string, any>) => {

            layerLoop: for (const layer of this.getLayers()) {

                if (instance.checkResult(layer)) {
                    continue layerLoop;
                }

                if (instance.checkRequires(layer)) {
                    for (const neuron of layer.getNeurons()) {
                        neuron.execute(instance);
                    }
                }
            }
        };

        return built;
    }
}

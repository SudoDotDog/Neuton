/**
 * @author WMXPY
 * @namespace Neuton
 * @description Network
 */

import { ILayer, INetwork, NetworkFunction } from "./declare";

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

    public build(): NetworkFunction {

        return (inputs: Record<string, any>) => {

            return {};
        };
    }
}

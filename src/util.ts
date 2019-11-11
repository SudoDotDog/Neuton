/**
 * @author WMXPY
 * @namespace Neuton
 * @description Util
 */

import { IInstance, ILayer } from "./declare";

export const concludeLayersResult = (instance: IInstance, layerList: ILayer[]): boolean => {

    for (const layer of layerList) {

        if (!instance.checkResult(layer)) {
            return false;
        }
    }
    return true;
};

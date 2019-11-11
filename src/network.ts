/**
 * @author WMXPY
 * @namespace Neuton
 * @description Network
 */

export class Network {

    public static create(): Network {

        return new Network();
    }

    private constructor() {

    }

    public build() {

        return () => {
            return 1;
        };
    }
}

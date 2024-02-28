function createProjectedObject(proto, src) {

    const projectedObj = {};

    for (let protoProperty in proto) {
        if (protoProperty in src) {
            projectedObj[protoProperty] = src[protoProperty];

            if ((typeof src[protoProperty] === 'object' && src[protoProperty] !== null) && !Array.isArray(src[protoProperty]) && (typeof proto[protoProperty] === 'object' && proto[protoProperty] !== null && !Array.isArray(proto[protoProperty]))) {
                projectedObj[protoProperty] = createProjectedObject(proto[protoProperty], src[protoProperty])
            }
        }
    }

    return projectedObj;
}

const projectedObj = createProjectedObject(
    {
        prop11: {
            prop22: null
        }
    },
    {
        prop11: {
            prop21: 21,
            prop22: {
                prop31: 31,
                prop32: 32
            }
        },

        prop12: 12
    }
)

console.log('PROJECTED OBJECT:', projectedObj);

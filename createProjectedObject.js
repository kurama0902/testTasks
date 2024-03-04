function createProjectedObject(proto, src) {

    try {

        if(
            (typeof proto?.valueOf() !== 'object' || proto === null || Array.isArray(proto))
            ||
            (typeof src?.valueOf() !== 'object' || src === null || Array.isArray(src))
        ) {
            throw new Error('Entered invalid data..')
        }

        const projectedObj = {};

        for (let protoProperty in proto) {
            if (protoProperty in src) {
                projectedObj[protoProperty] = src[protoProperty];
            }
        }

        return projectedObj;
    } catch (error) {
        console.error(error)
    }
}


const src = {
    prop22: null,           
    prop33: {
        prop331: 1,         
        prop332: 2          
    },
    prop11: {
        prop111: "value",   
        prop112: {
            prop112: null
        }
    },
    prop54: 22
};

const proto = {
    prop11:
    {
        prop22: null,
        prop111: {
            prop111: null   
        },
        prop112: null       
    },
    prop33: {},                
    prop22: 2                   
};


const projectedObj = createProjectedObject(
    proto,
    src
)

console.log('PROTO OBJECT:', proto, '\n');
console.log('SRC OBJECT:', src, '\n');
console.log('PROJECTED OBJECT:', projectedObj);

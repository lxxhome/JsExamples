/**
 * 判断两对象中是否有相同元素
 * @param {Object} obj  
 */
function isObject(obj) {
    return Object.prototype.toString.call(obj) === '[object Object]';
};
/**
 * 判断此类型是否是Array类型
 * @param {Array} arr 
 */
function isArray(arr) {
    return Object.prototype.toString.call(arr) === '[object Array]';
};
/**
 *  深度比较两个对象是否有相同元素
 * @param {Object} oldData 
 * @param {Object} newData 
 */
let sedOldData;
let sedNewData;
let flag = 0;
function equalsObj(oldData, newData) {
    //       类型为基本类型时,如果相同,则返回true
    if (oldData === newData) return true;
    if (isObject(oldData) && isObject(newData)) {
        //      遍历所有对象中所有属性,判断元素是否相同
        for (const key in oldData) {
            for (const nkey in newData) {
                if (equalsObj(oldData[key], newData[nkey]))
                //      对象中有相同属性 返回true 
                {
                    return true;
                }
            }
            // if (oldData.hasOwnProperty(key)) {
            //     // console.log(oldData[key]);
            //     console.log(isObject(oldData[key]));
            //     if (equalsObj(oldData[key], newData[key]))
            //     //      对象中有相同属性 返回true 
            //     {
            //         return true;
            //     } else {
            //         equalsObj(oldData, newData);
            //     }
            // }
        }
    } else if (isArray(oldData) && isArray(oldData)) {
        //      类型为数组

        for (let i = 0, length = oldData.length; i < length; i++) {
            if (equalsObj(oldData[i], newData[i]))
                //      如果数组元素中具有相同元素,返回true
                return true;
        }
    } else {
        //      其它类型,均返回false
        return false;
    }

    //      走到这里,说明数组或者对象中所有元素不相同,返回false
    return false;
};


// let oldData = { data: { sex: 'mail', name: 'test' }, orderToken: '123232' };
// let newData = { data: { name: 'test' }, orderToken: '1232324' }


let oldData = {
    0: {
        name: 3,
        sex: 0
    },
    1: {
        name: 4,
        sex: 0
    },
    2: {
        name: 5,
        sex: 0
    },
    3: 0
}

let newData = {
    3: {
        name: 1,
        sex: 1
    },
    1: {
        name: 2,
        sex: 1
    }
}

let result = equalsObj(oldData, newData);
console.log(result);
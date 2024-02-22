/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        const ele = arr[i];
        if (fn(ele, i)) newArr.push(ele);
    }
    return newArr;
};
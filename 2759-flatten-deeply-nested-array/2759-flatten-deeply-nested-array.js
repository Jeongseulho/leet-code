/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
    const stack = arr.map((item) => [item, n]);
    const result = [];

    while(stack.length) {
        const [item, depth] = stack.pop();
        
        if(Array.isArray(item) && depth) stack.push(...item.map((subItem) => [subItem, depth - 1]));
        else result.push(item);
    }

    return result.reverse();
};
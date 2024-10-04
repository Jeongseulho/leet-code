/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    const arr = [...arr1, ...arr2];
    const ans = {};
    for(const obj of arr) {
        if(!obj.id in ans) ans[obj.id] = obj;
        else ans[obj.id] = {...ans[obj.id], ...obj};
    }

    return Object.values(ans).sort((a, b) => a.id - b.id);
};
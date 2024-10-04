/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    const ans = [];
    let sub = [];
    for(let i = 0; i < arr.length; i++) {
        sub.push(arr[i]);
        if((i + 1) % size === 0) {
            ans.push(sub);
            sub = [];
        }
    }
    if(sub.length) ans.push(sub);
    return ans;
};

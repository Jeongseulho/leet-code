/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    const cnt = new Map();
    for(const num of arr) {
        if(cnt.has(num)) cnt.set(num, cnt.get(num) + 1);
        else cnt.set(num, 1);
    }

    const cntList = [...cnt.values()];
    
    return [...cntList].length === new Set(cntList).size;
};
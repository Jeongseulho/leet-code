/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    const cache = {};
    const getNextNum = (num) => {
        return String(num).split('').map((ele) => Number(ele) ** 2).reduce((acc, cur) => acc + cur, 0);
    };
    n = getNextNum(n);
    while(true) {
        if(n === 1) return true;
        if(cache.hasOwnProperty(n)) return false;
        cache[n] = 1;
        n = getNextNum(n);
    }
};
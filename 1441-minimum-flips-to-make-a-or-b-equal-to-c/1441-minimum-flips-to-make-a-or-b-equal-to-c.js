/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var minFlips = function(a, b, c) {
    let cnt = 0;

    while(a > 0 || b > 0 || c > 0) {
        const bitA = a & 1;
        const bitB = b & 1;
        const bitC = c & 1;

        if(bitC === 0) cnt += (bitA + bitB);
        else {
            if((bitA | bitB) === 0) cnt += 1;
        }

        a >>= 1;
        b >>= 1;
        c >>= 1;
    }

    return cnt;
};
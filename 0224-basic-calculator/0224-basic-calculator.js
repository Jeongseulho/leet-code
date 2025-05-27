/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    let num = 0;
    let res = 0;
    let sign = 1;
    const stack = [];

    for(const str of s) {
        if(str === ' ') continue;
        else if(!isNaN(str)) {
            num = 10 * num + Number(str);
        } else if(str === '+' || str === '-') {
            res += num * sign;
            sign = str === '-' ? -1 : 1;
            num = 0;
        } else if(str === '(') {
            stack.push(sign);
            stack.push(res);
            res = 0;
            sign = 1;
        } else if(str === ')') {
            const prevRes = stack.pop();
            const parenSign = stack.pop();
            res += num * sign;
            res *= parenSign;
            res += prevRes;
            num = 0;
        }
    }

    return res + num * sign;
};
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    if(gas.reduce((acc, cur) => acc + cur, 0) < cost.reduce((acc, cur) => acc + cur, 0)) return -1;

    let curGas = 0;
    let start = 0;
    for(let i = 0; i < gas.length; i++) {
        curGas += gas[i] - cost[i];
        if(curGas < 0) {
            curGas = 0;
            start = i + 1;
        }
    }

    return start;
};
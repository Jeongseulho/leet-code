/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let s = 0;
    let e = numbers.length - 1;

    while(true) {
        const sum = numbers[s] + numbers[e];
        if(target === sum) return [s + 1, e + 1];
        if(target > sum) s++;
        if(target < sum) e--; 
    }
};
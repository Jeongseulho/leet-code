/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;

    while(target !== numbers[left] + numbers[right]) {
        if(target < numbers[left] + numbers[right]) right -= 1;
        else left += 1;
    }

    return [left + 1, right + 1];
};
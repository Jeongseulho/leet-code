/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    return s.split(' ').filter((ele) => ele).at(-1).length;
};
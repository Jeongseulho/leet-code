/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    s = s.split(' ').filter((char) => char).reverse();
    return s.join(' ');
};
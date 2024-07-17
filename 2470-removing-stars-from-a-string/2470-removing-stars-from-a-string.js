/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
    const stack = [];
    for(const str of s) {
        if(str === '*') stack.pop();
        else stack.push(str);
    }
    return stack.join('');
};
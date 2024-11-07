/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;
    const hash = {};
    for(const letter of s) {
        if(hash.hasOwnProperty(letter)) hash[letter] += 1;
        else hash[letter] = 1;
    }
    for(const letter of t) {
        if(hash.hasOwnProperty(letter) && hash[letter] > 0) hash[letter] -= 1;
        else return false;
    }
    return true;
};
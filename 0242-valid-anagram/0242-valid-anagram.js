/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;
    const map = {};
    for(const letter of s) {
        map[letter] = (map[letter] || 0) + 1;
    }

    for(const letter of t) {
        if(!map.hasOwnProperty(letter) || map[letter] === 0) return false;
        map[letter] -= 1;
    }

    return true;
};
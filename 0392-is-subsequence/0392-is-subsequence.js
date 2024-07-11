/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let is = 0;
    for(let it = 0; it < t.length; it++) {
        if(s[is] === t[it]) is++;
    }
    return is === s.length ? true : false;
};
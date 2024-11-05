/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    if(s.length > t.length) return false;

    let j = 0;
    let cnt = 0;
    for(let i = 0; i < s.length; i++) {
        while(j < t.length && s[i] !== t[j]) j++;
        if(j >= t.length) break;
        if(s[i] === t[j]) cnt += 1;
    }

    return cnt === s.length;
};
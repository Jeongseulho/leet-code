/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    const map = {};
    const reverseMap = {};
    for(let i = 0; i < s.length; i++) {
        if(s[i] in map || t[i] in reverseMap) {
            if(map[s[i]] !== t[i]) return false;
        } else {
            map[s[i]] = t[i];
            reverseMap[t[i]] = s[i];
        }
    }

    return true;
};
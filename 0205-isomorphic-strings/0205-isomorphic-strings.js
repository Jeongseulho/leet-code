/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    const map = {};
    const revMap = {};

    for(let i = 0; i < s.length; i++) {
        const sl = s[i];
        const tl = t[i];
        if(map[sl] || revMap[tl]) {
            if(map[sl] !== tl) return false;
        } else {
            map[sl] = tl;
            revMap[tl] = sl;
        }
    }

    return true;
};
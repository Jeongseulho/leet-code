/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    const map = {};
    const reverseMap = {};
    s = s.split(' ');
    if(s.length !== pattern.length) return false;

    for(let i = 0; i < pattern.length; i++) {
        if(map.hasOwnProperty(pattern[i]) || reverseMap.hasOwnProperty(s[i])) {
            if(map[pattern[i]] !== s[i]) return false;
        } else {
            map[pattern[i]] = s[i];
            reverseMap[s[i]] = pattern[i];
        }
    }

    return true;
};

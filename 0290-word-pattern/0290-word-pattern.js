/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    s = s.split(' ');
    if (s.length !== pattern.length) return false;

    const map = new Map();
    const revMap = new Map();

    for (let i = 0; i < s.length; i++) {
        const p = pattern[i];
        const word = s[i];

        if (map.has(p)) {
            if (map.get(p) !== word) return false;
        } else {
            if (revMap.has(word)) return false;
            map.set(p, word);
            revMap.set(word, p);
        }
    }

    return true;
};

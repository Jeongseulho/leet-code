/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const letter = {};
    for(const m of magazine) {
        letter[m] = (letter[m] || 0) + 1;
    }

    for(const r of ransomNote) {
        if(letter[r]) letter[r] -= 1;
        else return false;
    }

    return true;
};
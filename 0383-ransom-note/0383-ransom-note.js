/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const letterCnt = {};
    for(const letter of magazine) {
        if(letter in letterCnt) letterCnt[letter] += 1;
        else letterCnt[letter] = 1;
    }

    for(const letter of ransomNote) {
        if(letter in letterCnt && letterCnt[letter] > 0) letterCnt[letter] -= 1;
        else return false;
    }
    
    return true;
};
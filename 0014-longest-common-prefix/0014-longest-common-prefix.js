/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let prefix = '';
    let i = 0;
    while(true) {
        const letter = strs[0][i];
        for(const str of strs) {
            if(str.length === i || letter !== str[i]) return prefix;
        }
        prefix += letter;
        i += 1;
    }
};
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    for(let s = 0; s <= haystack.length - needle.length; s++) {
        let cnt = 0;
        for(let i = s; i < s + needle.length; i++) {
            if(haystack[i] === needle[i - s]) cnt += 1;
            else break;
        }
        if(cnt === needle.length) return s;
    }

    return -1;
};
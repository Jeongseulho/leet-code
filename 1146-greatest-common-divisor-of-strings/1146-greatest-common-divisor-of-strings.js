/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    const [shortStr, longStr] = str1.length > str2.length ? [str2, str1] : [str2, str1];

    for(let i = shortStr.length; i > 0; i--) {
        const checkStr = shortStr.slice(0, i);
        if(shortStr.length % checkStr.length || longStr.length % checkStr.length) continue;

        const repeatShortStr = shortStr.length / checkStr.length;
        const repeatLongStr = longStr.length / checkStr.length;
        if(checkStr.repeat(repeatShortStr) === shortStr && checkStr.repeat(repeatLongStr) === longStr) return checkStr;
    }

    return '';
};
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {

    const getPalindromePos = (left, right) => {
        while(left >= 0 && right < s.length && s[left] === s[right]) {
            right += 1;
            left -= 1;
        }
        return [left + 1, right - 1];
    }

    let start = 0, end = 0, maxLen = 1;

    for(let mid = 0; mid < s.length; mid++) {
        const [evenLeft, evenRight] = getPalindromePos(mid, mid + 1);
        const [oddLeft, oddRight] = getPalindromePos(mid - 1, mid + 1);

        if(evenRight - evenLeft >= oddRight - oddLeft && evenRight - evenLeft + 1 > maxLen) {
            start = evenLeft;
            end = evenRight;
            maxLen = evenRight - evenLeft + 1;
        } 
        if(evenRight - evenLeft <= oddRight - oddLeft && oddRight - oddLeft + 1 > maxLen) {
            start = oddLeft;
            end = oddRight;
            maxLen = oddRight - oddLeft + 1;
        }
    }

    return s.substring(start, end + 1);
};
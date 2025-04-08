/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    const ans = [];
    const wordCnt = {};
    for (const word of words) {
        if (wordCnt[word]) wordCnt[word] += 1;
        else wordCnt[word] = 1;
    }

    const wordLength = words[0].length;
    const windowSize = wordLength * words.length;
    const sLength = s.length;

    // Iterate over each possible starting position
    for (let i = 0; i <= sLength - windowSize; i++) {
        const seenWords = {};
        let j = 0;

        // Slide through the string and check if words exist
        while (j < words.length) {
            const word = s.slice(i + j * wordLength, i + (j + 1) * wordLength);

            if (!wordCnt[word]) break;

            // Count the words in the current window
            if (seenWords[word]) seenWords[word] += 1;
            else seenWords[word] = 1;

            // If we find more instances of a word than needed, break
            if (seenWords[word] > wordCnt[word]) break;

            j++;
        }

        if (j === words.length) ans.push(i);
    }

    return ans;
};

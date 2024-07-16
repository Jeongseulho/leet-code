/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function(word1, word2) {
    if (word1.length !== word2.length) return false;

    const getFrequencyMap = (word) => {
        const freqMap = new Map();
        for (const char of word) {
            freqMap.set(char, (freqMap.get(char) || 0) + 1);
        }
        return freqMap;
    };

    const freqMap1 = getFrequencyMap(word1);
    const freqMap2 = getFrequencyMap(word2);

    if ([...freqMap1.keys()].sort().toString() !== [...freqMap2.keys()].sort().toString()) {
        return false;
    }

    if ([...freqMap1.values()].sort().toString() !== [...freqMap2.values()].sort().toString()) {
        return false;
    }

    return true;
};
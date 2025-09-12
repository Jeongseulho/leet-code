/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    const adj = (word1, word2) => {
        let diffCnt = 0;
        for(let i = 0; i < 8; i++) {
            if (word1[i] !== word2[i]) diffCnt += 1;
            if (diffCnt > 1) return false;
        }
        return true;
    }
    const needVisit = [[beginWord, 1]];
    const visited = new Set(beginWord);
    while (needVisit.length) {
        const [word, count] = needVisit.shift();
        for (const nextWord of wordList) {
            if(!visited.has(nextWord) && adj(word, nextWord)) {
                if(nextWord === endWord) return count + 1;
                needVisit.push([nextWord, count + 1]);
                visited.add(nextWord);
            }
        }
    }

    return 0;
};
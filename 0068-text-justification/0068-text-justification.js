/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
    // 1. 각 원소에 들어갈 수 있는 최대 단어 수 찾기
        // 단어 길이 합 + 공백(단어 수 - 1) 길이 합 <= maxWidth인 최대 단어 수 찾기
    // 2. 해당 자리에 단어 넣고 정렬
    // 2-1. 단어가 2개 이상
        // maxWidth - 총 길이(단어 길이 합 + 최소 공백 길이) = 남는 칸
        // 남는 칸 / 공백 수(단어 수 - 1) => 몫만큼 각 공백 칸에 할당, 나머지는 앞에서 부터 차례로 더 할당
    // 2-2. 단어가 1개
        // 처음에 채워 넣고 나머지는 오른쪽은 모두 공백
    // 2-3. 마지막 줄
        // 최소 공백만 채워넣고 나머지 오른쪽은 모두 공백

    const ans = [];
    let idx = 0;
    while(idx < words.length) {
        const inputWords = [];
        let wordsLen = 0;
        let inputIdx = idx;
        while(true) {
            if(inputIdx === words.length) {
                idx = words.length;
                break;
            }
            const word = words[inputIdx];
            const blankCnt = inputWords.length - 1;
            const totalLen = wordsLen + word.length + blankCnt + 1;
            if(totalLen > maxWidth) {
                idx = inputIdx;
                break;
            }
            wordsLen += word.length;
            inputWords.push(words[inputIdx]);
            inputIdx += 1;
        }
        const inputWordsStr = inputWords.join(' ');
        if(idx === words.length || inputWords.length === 1) {
            ans.push(inputWordsStr + ' '.repeat(maxWidth - inputWordsStr.length));
        } else {
            const remainLen = maxWidth - inputWordsStr.length;
            const addPerBlank = remainLen / (inputWords.length - 1);
            let addFront = remainLen % (inputWords.length - 1);
            for(let i = 0; i < inputWords.length - 1; i++) {
                inputWords[i] += ' '.repeat(addPerBlank);
                if(addFront > 0) {
                    inputWords[i] += ' ';
                    addFront -= 1;
                }
            }
            ans.push(inputWords.join(' '))
        }
    }

    return ans;
};
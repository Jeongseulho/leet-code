
var WordDictionary = function() {
    this.trie = {};
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    let node = this.trie;
    for (let letter of word) {
        if(!node.hasOwnProperty(letter)) node[letter] = {};
        node = node[letter];
    }
    node.isEnd = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
    const dfs = (node, idx) => {
        // 1. 가장 먼저 종료 조건 확인
        if (idx === word.length) {
            // 단어 끝까지 탐색했고, 해당 노드가 단어의 끝이라면 true
            return !!node.isEnd; // node.isEnd가 true면 true, undefined면 false 반환
        }

        const letter = word[idx];

        // 2. 와일드카드 '.' 처리
        if (letter === '.') {
            // 현재 노드의 모든 자식 노드를 탐색
            for (const key in node) {
                // isEnd는 자식 노드가 아니므로 건너뜀
                if (key === 'isEnd') continue;
                
                // 자식 노드 중 하나라도 true를 반환하면, 바로 true를 반환하고 탐색 종료
                if (dfs(node[key], idx + 1)) {
                    return true;
                }
            }
            // 모든 자식 노드를 탐색했는데도 찾지 못하면 false
            return false;
        } 
        // 3. 일반 문자 처리
        else {
            // 해당 문자에 대한 자식 노드가 없으면 false
            if (!node.hasOwnProperty(letter)) {
                return false;
            }
            // 자식 노드가 있으면, 그 노드에서 계속 탐색한 결과를 반환
            return dfs(node[letter], idx + 1);
        }
    };

    return dfs(this.trie, 0);
};

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
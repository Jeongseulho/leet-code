/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {
    const m = board.length;
    const n = board[0].length;
    const result = [];
    
    // 1. words로 Trie(사전) 만들기
    const root = {};
    for (const word of words) {
        let node = root;
        for (const char of word) {
            if (!node[char]) {
                node[char] = {};
            }
            node = node[char];
        }
        node.word = word; // Trie의 끝에 단어 자체를 저장
    }

    const dfs = (i, j, node) => {
        // 경계 및 방문 확인
        if (i < 0 || i >= m || j < 0 || j >= n) {
            return;
        }
        
        const char = board[i][j];
        // 방문했거나, 현재 경로가 Trie에 없는 경우 (가지치기)
        if (char === '#' || !node[char]) {
            return;
        }

        node = node[char];
        
        // 2. 단어를 찾았을 경우
        if (node.word) {
            result.push(node.word);
            node.word = null; // 중복 추가 방지
        }
        
        // 현재 위치 방문 처리
        board[i][j] = '#';
        
        // 상하좌우 탐색
        dfs(i + 1, j, node);
        dfs(i - 1, j, node);
        dfs(i, j + 1, node);
        dfs(i, j - 1, node);
        
        // 백트래킹: 다른 경로에서 사용할 수 있도록 원래 문자로 복원
        board[i][j] = char;
    };

    // 3. board의 모든 지점에서 DFS 시작
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            dfs(i, j, root);
        }
    }
    
    return result;
};
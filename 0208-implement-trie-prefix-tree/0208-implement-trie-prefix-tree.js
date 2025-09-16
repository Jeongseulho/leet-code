
var Trie = function() {
    this.trie = {};
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let node = this.trie;
    for (let i = 0; i < word.length; i++) {
        const letter = word[i];
        if (!node.hasOwnProperty(letter)) node[letter] = {};
        node = node[letter];
    }
    node.isEnd = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let node = this.trie;
    for (const letter of word) {
        if (node.hasOwnProperty(letter)) node = node[letter];
        else return false;
    }
    return !!node.isEnd
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let node = this.trie;
    for (const letter of prefix) {
        if (node.hasOwnProperty(letter)) node = node[letter];
        else return false;
    }
    return true;
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
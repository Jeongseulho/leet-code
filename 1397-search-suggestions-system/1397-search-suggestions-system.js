/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function(products, searchWord) {
    products.sort();
    const ans = [];
    for(let i = 0; i < searchWord.length; i++) {
        products = products.filter((product) => product[i] === searchWord[i]);
        ans.push(products.slice(0, 3));
    }
    return ans;
};
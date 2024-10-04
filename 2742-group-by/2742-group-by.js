/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
    const ans = {};
    this.forEach((ele) => {
        const key = fn(ele);
        if(key in ans) ans[key].push(ele);
        else ans[key] = [ele];
    })
    return ans;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */
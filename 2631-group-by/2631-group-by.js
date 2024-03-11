/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
    const result = {};
    for(const ele of this) {
        const std = String(fn(ele));
        if(result.hasOwnProperty(std)) {
            result[std].push(ele);
        } else {
            result[std] = [];
            result[std].push(ele);
        }
    }
    return result;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */
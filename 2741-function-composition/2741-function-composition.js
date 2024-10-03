/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    return function(x) {
        let num = x;
        for(let i = functions.length - 1; i > -1; i--) {
            num = functions[i](num);
        }
        return num;
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */
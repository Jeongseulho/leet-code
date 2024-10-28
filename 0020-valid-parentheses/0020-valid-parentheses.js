/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    for(const str of s) {
        if(str === '(' || str === '{' || str === '[') stack.push(str);
        else {
            if(!stack.length) return false;
            const last = stack.pop();
            if((str === ')' && !(last === '('))
            || (str === '}' && !(last === '{'))
            || (str === ']' && !(last === '['))
            ) return false;
        }
    }

    return stack.length ? false : true;
};
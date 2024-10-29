/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    const stack = [];

    for(const char of s) {
        if(char === ']') {
            let str = '';
            let times = '';
            while(stack.at(-1) !== '[') str = stack.pop() + str;
            stack.pop();
            while(stack.length && !isNaN(stack.at(-1))) times = stack.pop() + times;
            const completeStr = str.repeat(Number(times));
            stack.push(completeStr);
        } else {
            stack.push(char);
        }
    }

    return stack.join('');
};
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
    const stack = [];

    for (const char of s) {
        if (char === "]") {
            let str = '';
            let num = '';

            while (stack.length && stack.at(-1) !== '[') str = stack.pop() + str;
            
            stack.pop();

            while (stack.length && !isNaN(stack.at(-1))) num = stack.pop() + num;

            stack.push(str.repeat(Number(num)));
        } else {
            stack.push(char);
        }
    }

    return stack.join("");
};

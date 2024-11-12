/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const stack = [];
    for(const token of tokens) {
        const num = Number(token);
        if(!isNaN(num)) stack.push(num);
        else {
            const num1 = stack.pop();
            const num2 = stack.pop();
            if(token === '+') stack.push(num2 + num1);
            else if(token === '-') stack.push(num2 - num1);
            else if(token === '*') stack.push(num2 * num1);
            else stack.push(parseInt(num2 / num1));
        }
    }

    return stack[0];
};
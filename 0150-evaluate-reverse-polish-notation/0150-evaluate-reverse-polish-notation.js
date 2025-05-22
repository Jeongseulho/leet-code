/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const stack = [];
    for(const t of tokens) {
        if(!isNaN(t)) stack.push(Number(t));
        else {
            const num1 = stack.pop();
            const num2 = stack.pop();
            let res;
            if(t === '+') res = num2 + num1;
            else if(t === '-') res = num2 - num1;
            else if(t === '/') res = parseInt(num2 / num1);
            else res = num1 * num2;
            stack.push(res); 
        }
    }

    return stack[0];
};
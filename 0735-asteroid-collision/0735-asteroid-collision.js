/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    const stack = [];
    const arr = [...asteroids];

    while(arr.length) {
        const num = arr.shift();
        if(stack.length && stack.at(-1) > 0 && num < 0) {
            const last = stack.at(-1);
            if(Math.abs(num) > last) {
                stack.pop();
                arr.unshift(num);
            } else if(Math.abs(num) === last) stack.pop();
        } else stack.push(num);
    }
    return stack;
};
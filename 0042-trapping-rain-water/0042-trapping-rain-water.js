/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let water = 0;
    const stack = [];

    for(let i = 0; i < height.length; i++) {
        while(stack.length && (height[stack.at(-1)] < height[i])) {
            const lastI = stack.pop();
            if(!stack.length) break;

            const prevPeekI = stack.at(-1);
            if(prevPeekI === lastI) continue;

            const x = i - prevPeekI - 1;
            const y = Math.min(height[i], height[prevPeekI]) - height[lastI];
            water += x * y;
        }
        stack.push(i);
    }

    return water;
};
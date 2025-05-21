
var MinStack = function() {
    this.stack = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    const min = this.getMin();
    if(min === null || val < min) {
        this.stack.push([val, val]);
    } else {
        this.stack.push([val, min]);
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack.length ? this.stack.at(-1)[0] : null;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.stack.length ? this.stack.at(-1)[1] : null;
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

var SmallestInfiniteSet = function() {
    this.addNums = [];
    this.minNum = 1;
};

/**
 * @return {number}
 */
SmallestInfiniteSet.prototype.popSmallest = function() {
    if(this.addNums.length) return this.addNums.shift();
    this.minNum += 1;
    return this.minNum - 1;
};

/** 
 * @param {number} num
 * @return {void}
 */
SmallestInfiniteSet.prototype.addBack = function(num) {
    if(num < this.minNum && !this.addNums.includes(num)) {
        this.addNums.push(num);
        this.addNums.sort((a, b) => a - b);
    }
};

/** 
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */
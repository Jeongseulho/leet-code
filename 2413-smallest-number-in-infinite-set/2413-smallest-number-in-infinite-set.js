
var SmallestInfiniteSet = function() {
    this.set = Array(1000).fill(true);
};

/**
 * @return {number}
 */
SmallestInfiniteSet.prototype.popSmallest = function() {
    const num = this.set.findIndex((bool) => bool);
    this.set[num] = false;
    return num + 1;
};

/** 
 * @param {number} num
 * @return {void}
 */
SmallestInfiniteSet.prototype.addBack = function(num) {
    this.set[num - 1] = true;
};

/** 
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */

var RandomizedSet = function() {
    this.mySet = new Set();
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if(!this.mySet.has(val)) {
        this.mySet.add(val);
        return true;
    }
    return false;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if(this.mySet.has(val)) {
        this.mySet.delete(val);
        return true;
    }
    return false;   
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    const idx = Math.floor(Math.random() * this.mySet.size);
    return Array.from(this.mySet)[idx];
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
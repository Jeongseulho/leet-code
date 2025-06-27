/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.map = new Map();
    this.cap = capacity;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    const { map } = this;
    if (map.has(key)) {
        const val = map.get(key);
        map.delete(key);
        map.set(key, val);
        return val;
    }

    return -1;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    const { map, cap } = this;

    if (map.has(key)) {
        map.delete(key);
    }
    
    map.set(key, value);

    if (map.size > cap) {
        const oldKey = map.keys().next().value;
        map.delete(oldKey);
    }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
var TimeLimitedCache = function() {
    this.cache = {};
    this.expireTime = {};
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
    const { cache, expireTime } = this;
    let returnVal = false;
    if(cache[key] && expireTime[key] > Date.now()) returnVal = true;

    cache[key] = value;
    expireTime[key] = Date.now() + duration;
    return returnVal;
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
    const { cache, expireTime } = this;
    if(cache[key] && expireTime[key] > Date.now()) return cache[key];
    else return -1;
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
    const { expireTime } = this;
    return Object.values(expireTime).reduce((acc, cur) => {
        return cur > Date.now() ? acc + 1 : acc;
    }, 0)
};

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */
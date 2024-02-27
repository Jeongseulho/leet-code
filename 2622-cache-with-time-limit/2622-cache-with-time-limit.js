var TimeLimitedCache = function() {
    this.cache = {};
    this.timers = {}; // 타이머 식별자 저장을 위한 객체
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
    const isAlreadyExist = this.cache.hasOwnProperty(key);
    this.cache[key] = value;

    // 이전 타이머가 있으면 취소
    if (this.timers[key]) {
        clearTimeout(this.timers[key]);
    }

    // 새 타이머 설정
    this.timers[key] = setTimeout(() => {
        delete this.cache[key];
        delete this.timers[key]; // 타이머도 삭제
    }, duration);

    return isAlreadyExist;
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
    return this.cache.hasOwnProperty(key) ? this.cache[key] : -1;
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
    return Object.keys(this.cache).length; // 만료되지 않은 키의 수 직접 계산
};
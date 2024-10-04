/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function(functions) {
    return new Promise((resolve, reject) => {
        const results = Array(functions.length).fill();
        let cnt = 0;
        functions.forEach((func, idx) => {
            func().then((val) => {
                results[idx] = val;
                cnt += 1;
                if(cnt === functions.length) resolve(results);
                }, (reason) => reject(reason));
        })
    })
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */
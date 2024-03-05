/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function(functions) {
    return new Promise((resolve, reject) => {
        const results = new Array(functions.length).fill();
        let resolveCnt = 0;
        
        functions.forEach((fn, idx) => {
            fn().then((result) => {
                results[idx] = result;
                resolveCnt++;
                if(resolveCnt === functions.length) resolve(results);
            }).catch((reason) => reject(reason))
        })
    })
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */
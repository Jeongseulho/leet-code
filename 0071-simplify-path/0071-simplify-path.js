/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    const paths = path.split('/').filter((p) => p !== '' && p !== '.');
    const stack = [];
    for(const p of paths) {
        if(p === '..') stack.pop();
        else stack.push(p);
    }

    return '/' + stack.join('/');
};
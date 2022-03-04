// Time O(n^3 + m) | Space O(n+m)
const numbersInPi = (pi, numbers) => {
    let hash = new Set();
    for (let num of numbers) {
        hash.add(num);
    }
    let cache = {};
    const checkMinSpaces = (idx) => {
        if (idx == pi.length)
            return -1;
        if (idx in cache)
            return cache[idx];
        let minSpace = Infinity;
        for (let i=idx; i<pi.length;i++) {
            let prefix = pi.slice(idx,i+1);
            if (hash.has(prefix)) {
                let minSpaceInSuffix = checkMinSpaces(i+1);
                minSpace = Math.min(minSpace, minSpaceInSuffix + 1);
            }
        }
        cache[idx] = minSpace;
        return cache[idx];
    }
    let t = checkMinSpaces(0);
    return t === Infinity ? -1 : t; // O(n*m)
}
console.log(numbersInPi("3141592653589793238462643383279", ["314159265358979323846", "26433", "8", "3279", "314159265", "35897932384626433832", "79"]));
//console.log(numbersInPi("3141592", ["3141", "31", "5", "2", "9", "4159", "42"]));
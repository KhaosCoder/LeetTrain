var minDominoRotations = function(tops, bottoms) {
    for (common of [tops[0], bottoms[0]]) {
        let rotateTop = 0, rotateBot = 0;
        for (let i = 0; i < tops.length; i++) {
            let top = tops[i];
            let bot = bottoms[i];
            //console.log(top, bot, common);
            if (common !== top && common !== bot)
                break;
            if (common !== top)
                rotateTop++;
            if (common !== bot)
                rotateBot++;
            if (i+1 === tops.length)
                return Math.min(rotateBot, rotateTop);
        }
    }
    return -1;
};

// Feb 27
// Runtime: 76 ms, faster than 99.19% of JavaScript online submissions for Minimum Domino Rotations For Equal Row.
// Memory Usage: 51.5 MB, less than 26.02% of JavaScript online submissions for Minimum Domino Rotations For Equal Row.

// console.log(minDominoRotations([2,1,2,4,2,2],[5,2,6,2,3,2]));
// console.log(minDominoRotations([3,5,1,2,3],[3,6,3,3,4]));
console.log(minDominoRotations([1,2,1,1,1,2,2,2],[2,1,2,2,2,2,2,2]));

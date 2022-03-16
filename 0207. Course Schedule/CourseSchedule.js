/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
    let result = kahnAlgo(numCourses, prerequisites);
    console.log(result);
    return result !== null;
};
// O(N+E) Time, O(N+E) Space
const kahnAlgo = (numNodes, edges) => {
    let inDegree = Array(numNodes).fill(0);
    let adjList = new Map();
    for (let [from,to] of edges) {
        inDegree[to]++;
        if (!adjList.has(from))
            adjList.set(from, []);
        adjList.get(from).push(to);
    }
    let processed = 0;
    let topoSorted = Array(numNodes).fill(0);
    let queue = [];
    for (let i=0; i<numNodes;i++) {
        if (inDegree[i] == 0)
            queue.push(i);
    }
    while (queue.length > 0) {
        let curr = queue.shift();
        topoSorted[processed++] = curr;
        if (adjList.has(curr))
            for (let dep of adjList.get(curr)) {
                inDegree[dep]--;
                if (inDegree[dep] == 0)
                    queue.push(dep);
            }
    }
    if (processed !== numNodes)
        return null;
    return topoSorted;
}

// Mar 9
// Runtime: 80 ms, faster than 93.64% of JavaScript online submissions for Course Schedule.
// Memory Usage: 46.7 MB, less than 59.60% of JavaScript online submissions for Course Schedule.

// console.log(canFinish(2, [[0,1]])); // True
console.log(canFinish(2, [[0,1], [1,0]])); // False
// console.log(canFinish(5, [[1,4],[2,4],[3,1],[3,2]])); // True
console.log(canFinish(1, [])); // True
console.log(canFinish(3, [[0,1],[0,2],[1,2]])); // True
/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function(envelopes) {
    envelopes.sort((a,b) => { // O (nlogn)
        if (a[0] < b[0])
            return -1;
        if (a[0] == b[0])
            return b[1] - a[1];
    });
    
    let dolled = [envelopes[0]];
    let heights = [envelopes[0][1]];
    for (let i=1; i<envelopes.length; i++) { // O (n) 
        let currentEnv = envelopes[i];
        let lastEnvelope = dolled[dolled.length-1];
        console.log(currentEnv,lastEnvelope);
        if (currentEnv[0] === lastEnvelope[0]) {
            console.log("eq", currentEnv[0]);
            if (heights[heights.length-1] < currentEnv[1]) {
                heights[heights.length-1] = currentEnv[1];
                dolled[dolled.length-1] = currentEnv;
            }
        }
        else if (heights[heights.length-1] < currentEnv[1]) {
            console.log("add => ", currentEnv);
            dolled.push(currentEnv);
            heights.push(currentEnv[1]);
        }
        // if (currentEnv[0] === lastEnvelope[0]) {
            
        // }
        
    }
    console.log(dolled);
    console.log(heights);
    console.log(dolled.length);
    console.log(heights.length);
    return dolled.length;
};

// maxEnvelopes([[5,4],[6,4],[6,7],[2,3]]);
// maxEnvelopes([[1,1],[1,1],[1,1]]);
maxEnvelopes([[15,8],[2,20],[2,14],[4,17],[8,19],[8,9],[5,7],[11,19],[8,11],[13,11],[2,13],[11,19],[8,11],[13,11],[2,13],[11,19],[16,1],[18,13],[14,17],[18,19]]);

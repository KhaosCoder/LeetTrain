var findMedianSortedArrays = function(nums1, nums2) {
    const totalLength = nums1.length + nums2.length;
    
    const mid = totalLength / 2 + 1 | 0;
    
    let i = 0, j =0, k=0, last, beforeLast;
    
    while(i++ < mid){
        beforeLast = last;
        last = nums1[j] < (nums2[k]??Infinity) ? nums1[j++] : nums2[k++]
    }
    
    return totalLength % 2 === 1 ? last : (last + beforeLast) / 2.0
};

// Copy paste
// Runtime: 95 ms, faster than 95.18% of JavaScript online submissions for Median of Two Sorted Arrays.
// Memory Usage: 46.1 MB, less than 93.02% of JavaScript online submissions for Median of Two Sorted Arrays.

findMedianSortedArrays([1,3],[2]);
findMedianSortedArrays([1,2],[3,4]);

// var findMedianSortedArrays = function(nums1, nums2) {
//     let merged = mergeSorted(nums1, nums2);
//     let isEven = merged.length % 2 === 0;
//     let median = 0;
//     let half = Math.floor(merged.length/2);
//     if (isEven) {
//         median = (merged[half] + merged[half-1]) / 2;
//     } else median = merged[half];

//     return median;
// };

// const mergeSorted = (arr1, arr2) => {
//     let p1=0, p2 =0;
//     let result = [];
//     while (p1 < arr1.length && p2 < arr2.length) {
//         if (arr1[p1] < arr2[p2]) {
//             result.push(arr1[p1++]);
//         } else result.push(arr2[p2++]);
//     }
    
//     if (p1 < arr1.length) result = result.concat(arr1.slice(p1, arr1.length));
//     if (p2 < arr2.length) result = result.concat(arr2.slice(p2, arr2.length));
//     return result;
// }

// findMedianSortedArrays([1,3],[2]);
// findMedianSortedArrays([1,2],[3,4]);

// April 12, 2022
// Runtime: 108 ms, faster than 86.54% of JavaScript online submissions for Median of Two Sorted Arrays.
// Memory Usage: 47.4 MB, less than 65.62% of JavaScript online submissions for Median of Two Sorted Arrays.
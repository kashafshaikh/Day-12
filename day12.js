// Day 12
// ### Question 1: Remove Duplicates from Sorted Array
// *Problem:*
// You are given a sorted array that may contain duplicate elements. Your task is to remove the duplicates in-place (without creating a new array) and return the length of the resulting array. The array should be compressed so that the unique elements are placed first.
// *Example:*
// typescript
// Input: [1, 1, 2, 2, 3, 4, 4, 5]
// Output: 5
// Explanation: The resulting array is [1, 2, 3, 4, 5] and its length is 5.
// *Note:*
// * Only return the length of the unique elements.
// * Duplicate elements should be ignored.
function removeDuplicates(arr) {
    if (arr.length === 0)
        return 0;
    var uniqueIndex = 0;
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[uniqueIndex]) {
            uniqueIndex++;
            arr[uniqueIndex] = arr[i];
        }
    }
    return uniqueIndex + 1;
}
var array = [1, 1, 2, 2, 3, 4, 4, 5];
var Length = removeDuplicates(array);
console.log(Length); // Output: 5
console.log(array.splice(0, Length)); // Output [1,2,3,4,5]
// ### Question 2: Move Zeroes
// *Problem:*
// You are given an array that contains some zero elements. Your task is to move all the zeroes to the end of the array, while keeping the relative order of the non-zero elements unchanged.
// *Example:*
// typescript
// Input: [0, 1, 0, 3, 12]
// Output: [1, 3, 12, 0, 0]
// *Note:*
// * You must modify the array in-place.
// * The relative order of the non-zero elements should remain the same.
function moveZeroes(nums) {
    var nonZeroIndex = 0;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[nonZeroIndex] = nums[i];
            nonZeroIndex++;
        }
    }
    for (var i = nonZeroIndex; i < nums.length; i++) {
        nums[i] = 0;
    }
}
var arr = [0, 1, 0, 3, 12];
//moveZeroes(arr);
console.log(moveZeroes(arr)); // Output: [1, 3, 12, 0, 0]

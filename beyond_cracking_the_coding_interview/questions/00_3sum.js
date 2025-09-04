/* 
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.
*/

const nums = [-1, 0, 1, 2, -1, -4];

/* 
-1 + 0 + 1 = 0 works
    if a + b + c = 0 
        result.push(a,b,c)

pair1: - 1 and 0 -> to get to 0 +1
    if + 1, add trio + current

pair2: 0 and 1 -> to get to 0 - 1 (does it exist already?)
    if yes, don't add this combination
    if no, add it

pair3: 1 and 2 -> to get to 0 -3

pair4: 
    

what can we reuse?

result -> [[-1,-1,2],[-1,0,1]] 
*/

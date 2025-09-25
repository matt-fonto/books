# Big O Notation

Based on: https://www.youtube.com/watch?v=Mo4vesaut8g

## What is Big O?

- Big O: Used to analyze the efficiency of an algorithm as its inputs grow
- Ignore the constants. But, what is a constant?
  - Constant: any step that doesn't scale with the input
  - We only care about the worst possible scenario

```js
function constants(arr) {
  const result = 100 * 1000; // constant -> doesn't scale with the input

  return resul;
}

// O(n)
function linearFunc(arr) {
  for (let i = 0; i < arr.length; i++) {
    const something = 4000 * 400000;
  }
}

// O(1)
function constantFunc(arr) {
  return 100 * 10000;
}
```

Orders of growth

| Order      | Growth rate                |
| ---------- | -------------------------- |
| O(1)       | Constant                   |
| O(log n)   | Logarithimic               |
| O(n)       | Linear                     |
| O(n log n) | Linearithimic / log-linear |
| O(n^2)     | Quadratic                  |
| O(n^3)     | Cubic                      |
| O(2^n)     | Exponential                |
| O(n!)      | Factorial                  |

## O(n^2) - Quadratic

```js
function square(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}

/* square(4)
             i j   i,j   i, j  i, j 
iteration 1: 0,0 | 0,1 | 0,2 | 0,3
iteration 2: 1,0 | 1,1 | 1,2 | 1,3
iteration 3: 2,0 | 2,1 | 3,2 | 2,3
iteration 4: 3,0 | 3,1 | 3,2 | 3,3

Matrix (square matrix)
col(0)|col(1)|col(2)|col(3) 
00 | 01 | 02 | 03 row(0) 
10 | 11 | 12 | 13 row(1)
20 | 21 | 22 | 23 row(2)
30 | 31 | 32 | 33 row(3)

To get the area of a square, we just multiple the height with the width (in this case the rows with the cols)
4x4 = 16
4^2 = 16
*/
```

## O(n^3) - Cubic

```js
// 3d dimensional array
function cube(n) {
  for (let y = 0; y < n; y++) {
    for (let x = 0; x < n; x++) {
      for (let z = 0; z < n; z++) {
        console.log(x, y, z);
      }
    }
  }
}

cube(2); // 2 * 2 * 2 => 4 * 2 => 8

/* 
// coordinates (x,y,z)
row col depth
x   y   z
0   0   0
0   0   1
---- => first "x" row
1   0   0
1   0   1
---- => we completed the first "floor"
0   1   0
0   1   1
---- => first "y" level built
1   1   0
1   1   1
...

Imagine creating a cube where, you begin at x: 0, y: 0, z: 0

then you fill in all z cubes in x: 0, with y:0
then, go to x: 1, then x:2, then:3

once this is ready, you go to the next level
*/
```

We could change this algorithm slightly to first fill in the x, then y, then z, meaning first the "front", then start adding to the back

```js
function cubeFillXThenYThenZ(n) {
  for (let z = 0; z < n; z++) {
    for (let y = 0; y < n; y++) {
      for (let x = 0; x < n; x++) {
        console.log({
          x,
          y,
          z,
        });
      }
    }
  }
}

// coordinates (x, y,z)
000
100
--- now go to "y"
010
110
--- "front" completed, now, we go to the back
001
101
---
011
111

// 8 => volume of this cube
```

## O(log n)

- Logarithm: number^number = some number
  - A power that a number needs to be raised to get some other number
- In computer science, the base number is usually two, therefore, if we want to know the log of 8, we do:
  - We want to raise some number to some power to get 8
  - In computer science, unless specified otherwise, we can always assume that the number we want to raise by some power is 2
    - 2^n = <some-number> (8, in this case)
      - How many times must I multiply 2 **by itself** to reach <some-number>? => that's the log
      - What power do we need to raise "2" by to get <some-value>?

```txt
- 2 is the base in computer science, only if specified otherwise that it's not
2^? = 8 => what exponent would work to get to 8?

2 * 2 = 4 -> exponent 2 doesn't work (2 repeated twice)
2 * 2 * 2 = 8 -> exponent 3 works (2 repeated three times works)

Therefore

2^3 = 8
log(2)8 = 3 => Log base 2 of 8 is 3

Meaning, we need to have a 3 exponent so that 2 is equal to 8
```

```js
function recursiveLogFunc(n) {
  if (n === 0) {
    return "Done";
  }

  n = Math.floor(n / 2);
  return recursiveLogFunc(n);
}

logFunc(8);

// 8 / 2 = 4 (level 1) -> this value is passed recursively to the function
// 4 / 2 = 2 (level 2)
// 2 / 2 = 1 (level 3) -> here we stop, since we can't continue without getting fractions

// we took 3 steps to get to the base case
```

- Division is the inverse of multiplication
- Log is the inverse of exponentiation

> We needed to multiply 2 by itself 3 times to get to 8, as we neeed to divide 8 by two (halve) three times to get to 1

### O(n log n) - Iterative/non-recursive

```js
// the base of halving is:
function log(n) {
  while (n > 1) {
    n = Math.floor(n / 2);
  }
}

/* 
Math.floor(5/2) => 2 (instead of 2)

n = 8
iteration 1: 8/2 = 4
iteration 2: 4/2 = 2
iteration 3: 2/2 = 1
*/
```

## Binary search & O(log n)

- Binary search needs ordered array

```js
/*
instead of checking the whole array, grab the midpoint
if midpoint is greater than value, remove right
if midpoint is less than value, remove left
[1, 5, 10, 15, 20, 25, 30];
left
                 right

       mid -> compare mid with value, then move either left or right pointers

=====
for example, let's say our target is 20
1. grab midpoint (in this case, 15)
2. compare midpoint to target (15 & 20) -> 15 < 20 (meaning, that we should only go up)
3. identify portion of discart (left or right)
    if target is greater than mid, keep only right
    if target is less than mid, keep only left
4. do steps 1-3 until target is found
    if no target is found, return -1
*/

function binarySearch(target, arr) {
  // initialize left and right indexes
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    // the mid shouldn't be the arr.length, instead it should be the two pointers
    // mid needs to take into account left and right!
    let mid = Math.floor((left + right) / 2); // in tihs case, 7 => 7/2 => floor(3.5) => 3

    // if found, return
    if (arr[mid] === target) {
      return arr[mid];
    }

    /*
    if target is greater
    arr[mid] = 15
    target = 20

    15 < 20 -> we need to increase left + 1, effectively removing prev left (1, 5, 10, 15)
     */
    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

binarySearch(20, [1, 5, 10, 15, 20, 25, 30]);
```

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

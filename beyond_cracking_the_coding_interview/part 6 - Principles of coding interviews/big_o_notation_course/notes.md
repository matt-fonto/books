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
```

## Chapter 21 - Big O Analysis

> **Being brilliant at the basis than a focus on complicated plays**

- Big O: How we measure optimality

  - How we measure the efficiency of the code
  - How many operations (time) or memory (space) is needed to perform your logic:
    - Time complexity: How does the runtime of your code scale as the input size grows?
    - Space complexity; How does the amount of memory needed grows with input?

- Big O shouldn't be an afterthought after coding your solution. Instead, it should tie into every aspect of the interview:

  - how you design the code
  - the tradeoff analysis
  - optimizations
  - how you communicate

- How to say it?: `big Oh of <brackets>`

  - O(n): big Oh of n
  - O(n^2): big Oh of n^2

- The expresion between parenthesis describe the increase in time and memory given the input size

> Big O is not an expression of HOW LONG YOUR CODE TAKES TO RUN, instead, it's HOW YOUR CODE SCALE AS INPUT SIZE INCREASES

Big O: the performance (time/space) of your code in relation to input size

- Provides a picture of the algorithm's scaling behavior

### The Rules of Big O

- Given a function, `f(n)`, which complexity class does it belong to? To calculate, we do:

1. Wrap f(n) inside big O -> `f(n) = O(f(n))`
   `3n = O(n)` -> `3n **is in** **big Oh of n**`

2. Apply the role roles of big O to simplify the complexity class

#### Rule 1: Remove additive and multiplicative constants

- Additive and multiplicative constants are called constant factors

```
f(n) = 3n + 5n + 3^2

f(n) = O(3n + 5n + 3^2) // wrap it inside big o
     = O(8n + 9) // simplifying
     = O(8n) // remove additive constant
     = O(n) // remove multiplicative constant
```

- When removing additive constants, this also includes negative ones: `n - 1 = O(n)`
- Similarly, we drop multiplicative constants like `n/2 = 0.5n = O(n)`
- We can't remove exponents of n -> n^2

#### Rule 2: Remove non-dominant additive terms

- Dominant term: the term that is the biggest for any value of n **after some point**.:
  - n^2 is bigger than n for any value of n, so n^2 dominates n

```
f(n) = n^2 + n * (2n + 2)

f(n) = O(n^2 + n * (2n + 2)) //wrap it inside big O
     = O(n^2 + 2n^2 + 2n) // simplifying it
     = O(n^2 + n^2 + n) // remove multiplicative constants
     = O(n^2) // remove non-dominant terms
```

- In the case above, we only keep one `n^2`
- To recognize the dominant term, it helps to be familiar with the hierarchy of class complexities

### Hierarchy of class complexities

- The following table is ordered from slowest to fastest growth, meaning, in the context of algorithm scale, from "best" to "worse"

| Complexity class          | Notation                       | Description                                                                                                      |
| ------------------------- | ------------------------------ | ---------------------------------------------------------------------------------------------------------------- |
| Constant                  | O(1)                           | Growth rate doesn't depend on input                                                                              |
| Logarithmic               | O(log n)                       | Slow growth rate. When input doubles, the value increases by a constant                                          |
| Linear                    | O(n)                           | Operations proportional to growth rate                                                                           |
| Linearithmic              | O(n log n)                     | Slightly faster growth than linear                                                                               |
| Quadratic                 | O(n^2) (Big Oh of n `squared`) | When the input doubles, the value quadruples                                                                     |
| Cubic                     | O(n^3) (Big Oh of n `cubed`)   | When the input doubles, the value increases eight-fold                                                           |
| Exponential (with base 2) | O(2^n)                         | Extremely fast growth rate. When the input grows by one, the value can double                                    |
| Exponential (with base 3) | O(3^n)                         | Extremely fast growth. When the input grows by one, the value can triple                                         |
| Factorial                 | O(n!)                          | Fastest growth rate. When the input grows by one, the value gets multiplied by a factor that increases each time |

- One aspect is that O(n!) grows faster than O(2^n) and O(3^n). To see this, take into account:

  - `2 * 2 * 2 * 2 * 2` is less than `5 * 4 * 3 * 2 * 1`
  - A bunch of equal numbers multiplied together n times is going to be smaller (eventually) than the product of n numbers that keep getting bigger

#### How to say the powers

- O(n²): “Big Oh of n squared”
- O(n³): “Big Oh of n cubed”
- O(nᵏ): “Big Oh of n to the k”

### Time Complexities

#### Polynomial time complexity vs. Exponential time complexity

Polynomial time complexity: O(n^c) (Big Oh of n to the c)

- C is a constant
- e.g.: O(n), O(n^2)

Exponential time complexity: O(c^n) (Big Oh of c to the n)

- C is a constant and c > 1.
- e.g.: O(2^n), O(3^n)

- Any exponential time complexity grows faster than every polynomial time complexity
  - So, in algo, polynomial > exponential
- Factorial grows faster than any exponential time complexity

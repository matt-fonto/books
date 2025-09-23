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
| Linearithmic/Log-linear   | O(n log n)                     | Slightly faster growth than linear                                                                               |
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

- Constant: O(1)
- Logarithmic: O(log n)
- Linear: O(n)
- Linearithmic: O(n log n) (common in sorting)
- Polynomial: O(n^c), c > 1 (quadratic, cubic, etc.)
- Exponential: O(c^n), c > 1
- Factorial: O(n!)

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

![alt text](image.png)

> See chapter_21_big_o_challenge.md

### Runtime analysis with Big O

- Much like a mathematical function, an algorithm takes an input and computes an output
- What we care about is how long that computation takes as a function of input size (Big O notation)

- What really matters is counting how many instructions are executed. So how do we do it?
  - 1st: Look for loops in the code

> See chapter_21_loop_analysis.md

#### Time complexity of built-in methods

- The built-in methods also take space and time, therefore, they must be counted as part of your algorithm

> If you don't know the time and space complexity of the built-in method, think "How would I implement this?"

- During practice? you can look it up
- During interview? "Assuming this method takes <X> time, then the time complexity of my algo is <Y>"

### Worst-case, average-case, and best-case analysis

What do we do when we get different time complexities, for the same code, depending on the input?

- Worst-case runtime: the maximum
- Best case runtime: the minimum
- Average-case runtime: the average
  ... number of steps taken by the algorithm for an input of size n

```py
# worst case: O(n)
# best case: O(1)
# average case: depends on on how likely negative values are in the input
def has_negatives(arr):
  for elem in arr:
    if elem < 0:
      return True
    return False
```

> In an interview, you're expected to give the worst-case analysis

- The worst-case is the baseline and also needs to be fast

#### Big O, Big Omega (Ω), Big Theta(Θ)

- In practice, in the industry, big O is only used to give the smallest possible upper bound

- Big O (ceiling): upper bound | worst-case | how bad it can get

  - The maximum growth rate of an algorithm
  - "This algorithm won't be slower than this order, at scale"
  - "It can't get much worse"

  > Binary search: O(log n) -> it won't take more than logarithmic steps

- Big Omega (floor): lower bound | best-case | how good it can get

  - The minimum growth rate of an algorithm
  - "At least, these number of steps are needed"

  > Binary search: Ω(1), because if you're lucky, on the first attempt, the element is found

- Big Theta: tight bound | typical growth | equals both

  - When the upper and lower bounds match

  > Binary search: Θ(log n), because worst and average case both scale as log n

#### A good start: identify the input variables

Be clear about the variables that are represented in the Big O analysis

- Meaning, be clear on what the dependency of Big O relies on

  - Ex: Instead of saying "This algorithm runs in linear time", you should describe what the linear dependency is on. "This algorithm runs in linear time with respect to the length of the string s"

- What does these variables represent in the big O notation?

```
algo 1: binary search
n: the length of the array
T: O(...) // time
S: O(...) // space
```

##### Inputs

###### 1. a string, s

we often use the letter `n` for the size of simple inputs like an array of numbers or the length of a string, but we can use a different variable too

```
n: the length of s
```

###### 2. two strings (s1, s2) of different lenght:

Although it's possible to use n and m, they can get mixed up. It's better to use variables tied to the string's names

```
n1: the length of s1
n2: the length of s2

----
n1: the length of arr1
n2: the length of arr2
T: O(n1 + n2) = O(n1) -> because n1 >= n2
S: O(...)
```

###### 3. two strings (s1, s2) of the same length

Since they have the same length, it's okay to use only one variable

```
n: the length of s1 == the length of s2
```

> When the input contains multiple strings or arrays, it's an excellent clarifying question for the interviewer to ask if they have the same length

###### 4. an array (arr) of strings of different length

- We need a variable for the length of each string
- Good approach: analyze the algorithm assuming that all the strings are as long as the longest one

```
n: the number of strings in arr
k: the maximum length of any string in arr
```

###### 5. a two-dimensional matrix, mat

```
R: number of rows in mat
C: number of cols in mat
```

> Many candidates use n and m for matrix dimensions, but R and C are clearer as they are connected with rows and columns

###### 6. a square two-dimensional matrix mat

```
n: number of rows in mat == number of columns in mat
```

> Notice how, when using words like "linear" or "quadratic" to describe our runtime, **IT'S CRITICAL TO SPECIFY WHAT THE DEPENDENCY IS ON**

###### 7. a number n

- The only case where you do not need to define the variable is when the input (or one of the inputs) is a number

### Logarithms in Big O analysis

- The logarithm that comes up most often in algorithm analysis is the base-2 logarithm, denoted by log2(n)
- Mathematically, log2(n) -> 2^a = n
- There's an alternative way to think about it which is much more relevant to algorithm analysis
  - Think of log2(n) as **the number of times we have to halve n to reach 1**

```
log2(1) = 0 -> because n is already 1
log2(2) = 1 -> because 2/2 = 1 (1 step to halve it)
log2(4) = 2 (4/2 -> 2/2 -> 2) -> becase we needed to steps to halve it
log2(12) = 3 (12/2, 6/2, 3/2) -> somewhere between 3 and 4 -> log2(8) = 3 (3 steps), log2(16) = 4 (4 steps)
```

- Base-two log comes up in algorithms and data structures that employ halving
  - Binary search: classic example for sorted lists
    - Each step, we halve the search range
  - Balanced binary tree, the descendants of each node are split roughtly evenly between left and right subtrees
  - Merge sort: divide-and-conquer algo that splits the array to sort in half, sorts each half recursively, and finally merges the two sorted halves into a single sorted list

#### Exponential = very fast, logarithimic = very slow

- Logs are essentially the opposite of exponential
- To score points, the game on the interview is, O(n log n) will get you much more points on the interview than O(n)

### Space Analysis

- Time complexity is generally more important
- As computer memory became more available, we shifted the focus from time than space
- When you initialize a variable, you use memory to hold its value.

- The amount of memory depends on the variable's type:

1. Primitive: all of them don't take more than a few bytes of memory

- They all take O(1)

2. Composite: classes, objects, user-defined

- The space taken is the sum of each filed

```js
// composite
const point = {
  x: 10, // primitive
  y: 10, // primitive
};

// x: O(1) + y: O(1) => O(1)
```

3. Collection types: arrays, strings, sets, maps

- Contain a variable number of elements
- O(n)

#### Input space vs. extra space

- When analyzing the code's space complexity, it's helpful to differentiate between input memory and extra memory
- Input memory is the memory taken by our function's inputs
- Extra memory is memory allocated by our function itself

> Extra memory is what we should analyze, and talk about on interviews, since it's our code directly responsible for it

- When we're asked about the space complexity of an algorithm, we're referring to the extra memory

```
n: the length of the array
T: ...
S: O(1) extra space // write "extra space" to make it clear we're not including the input space
```

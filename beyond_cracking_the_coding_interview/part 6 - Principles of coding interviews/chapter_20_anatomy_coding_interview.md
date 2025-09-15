## Chapter 20 - Anatomy of a coding interview

0. Opening chat
1. Understand the problem
   - Read the statement (twice)
   - Work through examples out loud
   - Ask clarifying questions
     - Edge cases
     - Input/output format
     - Scale constraints
2. Design the algorithm
   - Minimially sketch naive solution
   - Identify upper & lower bounds
   - Look for triggers
   - Employ boosters
     - Booster: Brute force optmimization
     - Help: Hunt for properties
     - Developers: Decrease the difficulty
     - Crack: Cycle through the catalog
     - Algorithms: Articulate your blocker
3. Explain the solution
   - Examples
   - Indented English
   - Name & justify
4. Get buy-in
   - The magic question
5. Code the solution
   - Main logic
   - Helper functions
   - Stop if you get lost
6. Verify the solution
   - Top-to-bottom pass
   - Tricky expressions
   - Run through with tiny input
   - Check edge cases
   - Verify analysis
7. Closing chat & questions

### 1. Understand the problem

#### Read the statement twice

- 1st: general sense of the problem: input/output format, the goal, and the main constraints
- 2nd: read more carefully
  - identify possible pitfalls
  - something ambiguous? Clarify with interviewer!
  - identify loopholes
  - **Do not skip the second pass**

#### Work through examples out loud

- Use it to double-check our understanding
- Explain the examples outloud to the interviewer

##### Drawing advice

Based on: https://www.loom.com/share/e6e80e87b1b44d50ace901f5484498ba

1. Arrays linked lists, stacks

- This visualization is incredibly important for: two pointer problems, sliding windows, prefix sum
- for any problem that involves iterating through some sort of list

```js
// 1. Arrays, linked lists, stacks

// 1.1. Arrays
//     0  1  2  3  4  5  -> good to have the indices
arr = [1, 2, 3, 4, 5, 6];
//     i => pointer -> it can move forward/backward
//     j -> second pointer on another line!

// 1.2. Linked Lists
// don't get fancy, simplify
1 - 2 - 3 - 4;
```

2. Matrices

- Forget brackets and commas, just do:
- Matrices can be incredibly useful also when representing DFS and BFS

```js
// 3x3
10000;
11111;
12345;

// start and end
s000e; // start and end
11111;
12345;
```

3. Trees

- Don't try to draw the tree

```
        a
    b       c
d      e  f   g
```

#### Ask clarifying questions

- Fill in the gaps
- Problem statements are often intentionally ambiguous because interviewers want to evaluate your requirement-gathering skills
- Work with the interviewer to clarify them
  - Verification and communication skills

##### 3 main types of clarifying questions

1. Edge cases

Common edge cases that you can ask about depending on the nature of the input

- Integers

  - Negative or zero values
  - Very large numbers

- Arrays or strings

  - Empty arrays and strings
  - Duplicated elements
  - Inputs that are too small to return a valid solution
  - Non-letter or non-ASCII characters in a string

- Multi-dimensional arrays and strings:

  - Grids with different numbers of rows and columns
  - Different string lengths in an array of strings

- Other:
  - Null/"None" values or pointers

You can also ask what is allowed in the output

2. Input and output format

- There are many ways to represent data, check which would be better
- Don't assume you're allowed to modify the input
  - If you want to have this, check with interviewer if it's allowed

3. Scale constraints

- "Are there any constraints on how big the input could be?"

### 2. Design the algorithm

- The main problem-solving part of the interview, where you come up with the algorithm that we will implement

**MIKE's advice**

1. Minimally sketch the naive solution
2. Identify upper and lower bounds
3. Look for triggers
4. Employ problem-solving boosters

- A common misconception in coding interviews is that we must aim to code the most optimal solution. However:
  - Maybe the most optimal solution is far too complex for an interview
  - Interviewer maybe expecting a different solution
  - What you need is the solution that is **right for the interviewer**
    - In any case, first of all, the solution must be **right for you**, meaning you're able to solve it

#### Minimally sketch the naive solution

- Naive solution = brute force
- It sets the baseline of what we have to beat

- Example: classic 3-sum problem: Given a list of numbers, return whether it contains 3 numbers that are all different and add up to 0

```js
/* 
Algo 1: Brute force
n: the length of the array
T: O(n^3)
S: O(1)

for each number x
    for each number y after x
        for each number z after y
            if they are different and x + y + z is 0
                return true
return false
*/
```

Why is this so important?

- It gets the ball rolling in terms of exploring the solution
- It helps confirming you're solving the right problem
- It sets an upper bound for the timple complexity we need to beat
- It's the starting point for the BRUTE FORCE OPTMIZATION booster

> It's a good habit to write down the time and space complexity for each one

- **ALWAYS START WITH THE BRUTE FORCE**

#### Identify Upper and Lower Bounds

- Don't commit to a solution too quickly
- **Narrow the range of approaches to be considered**

  - We do this in terms of the big O analysis
  - Establish a lower bound and an upper bound for the runtime of the optimal solution
    - This way, we avoid wasting time considering approaches that:
      - are slower than the upper bound
      - faster than the lower bound

- For example, it's like if an an architect, before starting a school design, asked:
  - 1. What is the minimum amount of floors need to have enough classrooms for all the students?
  - 2. What is the maximum number of floors the city allows?
    - These 2 questions narrow down the range of designs available

#### Look for triggers

- Keywords, constraints, and question topics are often solved with a specific technique

#### Employ boosters

Orders to consider them:

> Boosters Help Developers Crack Algorithms

1. Brute force optmization
2. Hunt for properties
3. Decrease the difficulty
4. Cycle through the catalog
5. Articulate your blocker

> It's important to mention once again: describe your approach before coding

### 3. Explain the solution

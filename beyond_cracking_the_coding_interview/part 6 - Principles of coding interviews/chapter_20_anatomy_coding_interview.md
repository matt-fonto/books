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

- Whatever solutions we found, we must keep the interviewer in the loop
- Back and forth: designing your algorithm + explaining your ideas to the interviewer
- It's important for your communication score
- It'll help you you figure out how to structure the code better when you get to it

#### Tips

1. We can complement explanation with indented English
   - Similar to brute force solution
2. Use examples to illustrate ideas
3. Use the **name-and-justify** technique

> Important: Don't forget to include the time and space analysis when explaning algorithms to your interviewer

#### Name-and-justify technique

- Whenever you choose an algorithm, data structure, or technique, it's important to **name it and justify why you choose it**

| Quality | Reason                       | You say...                                                                                                    | Your interviewer thinks..                                                |
| ------- | ---------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| Bad     | Justified, without naming it | "I will use a data structure to _track the smallest element efficiently_"                                     | Do you mean a min-heap? Do you know it's called a min-heap?              |
| Bad     | Named, without justifying it | "I will use a _heap_ instead of storing things in a list                                                      | Ok, but do you know why a heap is appropriate, or are you just guessing? |
| Good    | Justified and named it       | "I will use a _heap_ because it allows me to _retrieve the next smallest element in the dataset efficiently_" | I understand what you're doing and why you're doing                      |

- Even for brute force, naming and justifying is hugely important

  > "I will start sketching a _brute force_ solution to _have a working baseline and then try to improve it_

- **Naming the high-level idea and justifying it demonstrates a solid understanding of the CS principle and clear communication skills**

### 4. Get buy-in

- Now that we have:
  1. Understood the problem: read statement (twice), work through examples (outloud), ask clarifying questions
  2. Designed the algorithm: naive solution, indented English, lower and upper bounds, triggers, boosters (boosters help developers crack algos)
  - Brute force
  - Hunt props
  - Decrease difficulty
  - Catalog
  - Articulate blocker
  3. Explained the solution: examples, indented English, name and justify
     ... we still shouldn't start coding yet

Next, step is making sure the interviewer understands what we're trying to do and is on board with it by getting them to "buy-in"

#### The magic question

- Coding requires consent

> I'd like to use <X algo> with <Y time> and <Z space> to solve the problem. Should I code now, or should I keep thinking?

- Why is this important?

  - You propose what you think it's an optimal answer, but a better solution exists
  - You propose a solution that appears to work, but has a flaw
  - Your interviewer got distracted, or you're not sure if they followed your explanation of the solution you're proposing

- The magic question includes time and space complexity, meaning we must analyze the proposed solution before starting to code

### 5. Code the solution

- Now, we have buy-in for our solution, time to translate it into actual code!
- **Write top-down, not bottom-up**

  - Write the code as a single function with the overall logic
    - no loose code
  - Write the main logic first, using yet-to-be-written helper methods

- Example

```js
// main logic
function invert(expression) {
  if (!expression) {
    return -1;
  }

  // yet-to-be-written code
  const min = getMin(expression);
  const max = getMax(expression);

  let count = 0;

  for (let value = min; value < max; value++) {
    count += search(expression, value);
  }

  return count;
}
```

- If you find yourself struggling, you don't actually understand what you're doing. Once you have a clear solution, designing the algorithm should be fairly straightforward

  - If you're struggling or getting confused while coding, stop and go back to your example

- "Do I need to talk while I code?"

  - Don't read the code as you type! Simply, describe what you're about to do after each logical step:
    - `<code>`
  - "Now, we need to start the depth-first search if the located one isn't in our visited set"
    - `<code>`

- However, don't stress too much about it at this stage. Most interviewers are fine with complete silence if you've clearly explained the algorithm before you started coding
  - If you're not coding, describe what you're thinking
  - It's alright to ask the interviewer a minue to think quietly if you need it

### 6. Verify the solution

- Before saying you're done, verify the solution

1. Read the solution top to bottom
2. Identify possible issues
3. Run through the code with tiny input
4. Check edge cases

- Proactively suggesting tests without prompting is a positive signal in an interview
  - Offer it, and see what they say

#### How to test manually

- Testing by hand is completely different than running unit tests
- It means walking through your code, line by line, explaining what's happening

##### Mistakes to avoid

1. Testing the concept, not the code

- Run through the code
- Do the calculation

2. Not thinking as you go

- At each line, briefly think: is this the right result?

#### Fixing bugs

- Avoid hotfixes and the death spiral
- Death spiral is when you need a bunch of hotfixes to fix other hot fixes
- Found a bug? No problem:
  - Think about the cause
  - Where did the bug originate from?
  - What's the best way to fix it?

#### Verify your analysis

- Your initial high-level plan might diverge from the actual implementation
  - So, it's always good to write at the end your final and space complexity

```txt
Can you optimize after you code?
After designing the algorithm, you ask the magic question, whether you can start coding, and they said "yes". Chances are you created a brute force algo, and this is fine.

They might have said yes to:
- start coding as soon as viable to have you more time to code
- the optimal answer is too complex
- optimal answer can be very short and involves some trick
  - So, brute force gives more coding signal about your code structure etc

In case you have time, you can go back to Step 2: Design the algo, and perhaps only think through it, without actually implementing it
```

### 7. After the question

- Whatever happens, don't erase or overwrite what you did for the first question

### Key takeaways

- Every company is different, so it's always a good idea to ask your recruiter what to expect

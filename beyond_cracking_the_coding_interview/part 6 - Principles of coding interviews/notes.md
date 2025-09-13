# Part 6 - Principles of coding interviews

- We'll get to know 80% of the most common topics and ideas used in interview problems
- Learn problem-solving strategies so we can figure out 80% of questions on your own

### The principles and the catalog

#### Principles

- Study plan: how to practice with the book
- Universal rubric: how you're evaluated by interviewers
- Interview checklist: breaking down each step you should take in a coding interview
- Big-O analysis: In-depth coverage of the "language" of technical interviews
- Problem-solving strategies: boundary thinking, trigger thinking, and problem-solving boosters

#### Catalog

DSA

- Tier 1: essential topics, from sets & maps to trees and graphs
- Tier 2: intermediate topics like heaps, sliding windows, and prefix sums
- Tier 3: Nice topics

### Topics, Recipes, and Reusable ideas

- Topic: a chapter from the catalog, like binary search
- Reusable idea: a coding idea that can be typically used across problems (and even topics)
- Coding recipe: pseudo-code template related to a specific topic that can be used as building block to solve similar problems with small tweaks

## Chapter 18 - How to practice

Phase 1: learn the topics from the catalog
Phase 2: Interview simulation

#### Tier 1

Foundational topics that arise often

- Dynamic arrays
- String manipulation
- Two pointers
- Grids & matrices
- Binary search
- Sets & Maps
- Stacks & Queues
- Recursion
- Sorting
- Linked lists
- Trees
- Graphs

#### Tier 2

Common and important, but need some foundation beforehand

- Heaps
- Sliding windows
- Backtracking
- Topological sorting
- Prefix sums
- Dynamic programming
- Greedy algorithms

#### Tier 3

Extra credit

- Monotonic stacks & queues
- Union-find
- Data structure design
- Set & Map implementations
- Tries
- Graphs (advanced)
- Dynamic programming (advanced)
- Bit manipulation
- Math

### Study plan

#### Phase 1: Learn the topics

##### Preliminary steps

- Review Big O analysis
- Skim the remaning principles chapters
  These chapters:
  - How you're evaluated
  - Anatomy of a coding interview
  - Boundary thinking
  - Trigger thinking
  - Problem-solving boosters
    ... are about how you apply the knowledge of the catalog to interviews
    Probably you want to take a deeper dive after learning the basic catelog topics, but skimming them now might be useful

##### Interleaved practice

1. Learn a topic: read chapter + do corresponding problems

- Dedicated practice as you go through the chapter the first time is important

2. Interleaved practice: practice interview problems picked randomly from all the topics you have learned so far

- Instead of going one topic at a time, go with interleaved practice

Use the AI to help picking the problems: https://start.interviewing.io/interview-ai/settings

- Once you have learned 4-5 topics begin with it

##### How to do a practice problem effectively

- Don't fixate on time spent per question: don't worry if you need a full-hour to solve a problem
  - If it's more than that, it's not recommended
- Focus on the idea, not the code
  - Don't get hung up on the little things
- Don't neglect post-mortem
  - Whatever you do, don't skip them!
  - Finishing a question is where the long-term learning starts
    - What could I have done differently?
    - What mistakes do I keep making, and how can I adjust my workflow to address them?
    - Is there anything I should add to my cheat sheet?

#### Phase 1: Interview simulation

- When you've learned a good chunks of topics, it's time to move to phase 2

### Study plan tips

- No cramming: shorter, more frequent sessions

  - 1h daily

- Plan for your worst week
- Plan with your willpower in mind
- Schedule time to practice
- Schedule inputs, not the output: Instead of "learning dynamic programming", think "spend an hour per day learning dynamic programming"
- Declare an endpoint

#### Effective Study tips for practice

- Use active learning
- Deliberate practice
  - Refine weak points
  - Use
    - cheat sheet
    - bug list
    - post-mortem
- Seek challenge over question counts
- Leverage AI wisely
- Suffering is optional
  - stick with one-hour maximum timebox, even for hard problems
- Generate multiple interview solutions
  - instead of finding one solution, can you find many to the same problem?
- Respect time limits
  - If you can't design the algo in 20min and up to 1h in total, check the hint or solution
  - Also do a thorough post-mortem

## Chapter 19 - How you're evaluated

### The universal rubrics

- Problem solving
- Coding
- Verification
- Communication

> The majority of what matters is that your code works and has the asymptotic complexity expected by the interviewer

#### Problem solving - "Are you smart?"

- Problem-solving portion of a coding interview is meant to be an intelligence test

- That's why already knowing the algorithm isn't terribly impressive and doesn't earn you bonus points

  - They don't want you to know how to do this, they want to see if you can figure it out
  - It's about the journey, not the destination

- Goals
  - Exploring multiple solutions
  - Identifying obstacles
  - Evaluating tradeoffs
  - Working to improve your algorithm
  - Demonstrate appropriate knowledge of computer science fundamentals
    - Big 0 analysis
    - Data structures

##### Rubric questions

- How much difficulty did they have finding an algorithm and optimizing it, relative to the difficulty of the problem?
- How much help did they need, relative to other candidates?
- Did they discuss tradeoffs in terms of time and space complexity?
- Did they use appropriate data structures and algorithms to solve the problem?

---

- Interviewers will often compare your performance on a question to other candidates they've asked the same question to

  - You don't need to solve the problem optimally or without help, you just need to do better than most other candidates

- How to solve it better?
  - Master big O analysis: Chapter 21
  - Use boundary thinking and trigger thinking: Chapters 22, 22
  - Learn general problem-solving strategies: Chapter 23
  - Learn as many topics from the Catalog as possible to add to the tools in your toolbelt
  - Learn reusable ideas, which capture ideas that can be consistently deployed across a wide number of problems
  - Grinding problems

#### Coding - "Can you solve the problem?"

- It's about: code structure, knowledge of your programming language, and clean code

##### Rubric questions

- Could they translate their ideas into correct code?
- Did they overcomplicate the logic?
- Did they demonstrate good coding hygiene?
  - Clear variable names
  - Abstracting relevant code into reusable helper functions
  - Consistent and reasonable style?
- Is the code well organized and idiomatic to the language used?
- Did they demonstrate internalized software engineering principles?

##### How to code faster

- Short, but meaningful variable names
  - `i` and `j` on loops are fine
- If roadblocked, come back after
  - If stuck on a technical detail, add a TODO comment to return after
- Keep error handling simple
  - Normally, it's okayt ti return -1 for an invalid value, instead of raising an exception
  - You can check with the interviewer if that's okay
- Don't bother validating that the input will be what the interviewer/prompt said
  - You don't need to check the inputs, but in any case you can add a mock function that would do it
    `checkInputs()`
- Don't optmize on the first pass
  - First, get your code working
  - Then, do a pass to make improvements
- Keep comments to a minimum

##### How to write clear code

- Follow universal good coding practices
  - DRY: if copy/paste, create reusable function
  - Avoid mutable global variables
  - Try to reduce side effects
  - Consistent style
- Write idiomatic code: following conventions and mannerisms of the language
- Get familiar with recipes
  - Reusable pseudocode snippets can be captured into "recipes"
- Make stuff up
  - If in doubt, you can pretend something exists or it's like that
  - Most companies don't actually have you run your code
- Stick with conventional libraries

#### Verification

- Strong verification signals come from:
  - At the beginning: when you do requirements gathering
    - Considering edge cases before diving into coding
  - At the end: when we check the correctness of the code with test cases and examples

##### Rubric

- Did they ask good clarification questions?
  - Questions that weren't already answered in the question description or examples
- Did they proactively consider edge cases?
- Did they test their code or provide a good argument for its correctness?
- Were they able to spot and fix any bugs?

#### Communication

- Coding interviews offer a window of what it's like to collaborate with you
- Thinking out load is essential, but neuopng a baseline, it may not significantly impact outcome

##### Rubric

- Were they able to clearlyu communicate their thoughts, even when the conversation got technical?
- Were they able to answer technical questions?
- Were they open to feedback?
- If they were confused, were they able to articulate why?

##### Tips

- Whatever you do, **keep your interviewer in the loop**
  - From the interviewer perpsective, it's frustrating candidates that are lost in though and it's not clear what they are thinking
  - If you need some minutes to think in silence about the problem, that's totally fine. Just let the interviewer know
- Use computer science terminology to **showcase your depth of knowledge**
  - "I will use a hashmap" vs "I will use a hash map because it provides constant-time lookups"
    - Second one shows more depth, without deviating from the conversation thread
- Use the **Name-and-Justify** technique
- Be a responsive listener. It's not only about what you say, but how you pay attention to their commments
  - Considering implications
  - Being willing to pivot based on their inputs
  - If you're going down a path, and they suggest something, listen to them
- Writing things down
  - Writing the big O analysis
- Don't argue with your interviewer
  - Even if you're right, it won't help you
- Listen the problem attentively
  - Read with calm. It's much better to read once slowly and understand it than needing to come back to it
    - You can't solve a problem you don't understand
- Attempting to rush interview steps typically backfires
  - "Slow is smooth. Smooth is fast"
- When writing pseudocode, use "indented English"
- Most companies just want to make sure you're:
  - Independent and resourceful: in an interview this is about finding your own way to get unstuck instead of asking for help
  - Collaborative
  - Friendly and enthusiastic: remember the interviewer's name
  - Asking thoughtful engineering-specific questions
  - Not a jerk
- Structur:
  - Take 5 minutes to read the question
  - Take 5 minutes to write pseudo code
    - This helps the interviewer giving you feedback

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

2. Input and output format
3. Scale constraints

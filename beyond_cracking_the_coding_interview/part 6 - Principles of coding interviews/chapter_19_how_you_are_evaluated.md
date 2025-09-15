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

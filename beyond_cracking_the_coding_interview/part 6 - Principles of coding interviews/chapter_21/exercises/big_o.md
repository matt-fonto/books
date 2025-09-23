#### Challenge

- Solve the following Big expressions
  - Drop lower order terms, find the dominant
  - Constants don't matter: O(2n) -> O(n)
  - Compare growth: constant < log < linear < log linear < polynomial < exponential < factorial

a. O(√n + n)

- n dominates √n

- O(n) ✅

```txt
In more details
- √n can be rewritten as n^0.5
- n can be rewritten as n^1

n^1 > n^0.5, therefore the first dominates the latter
then, O(n)
```

---

b. O(n^3 + 3^n)

- Exponential (3^n) grows faster than polynomial (n^3)
- O(3^n) ✅

```txt
- Exponential always dominates polynomial
- Polynomial: O(n^c), c > 1 (quadratic, cubic, etc.)
  - n^2, n^3, n^5...
  - e.g, n^3 n * n * n

  - the input n is repeated as a factor, with a constant exponent

- Exponential: O(c^n), c > 1
  2^n, 3^n, 5^n...
  - 3^n: 3 * 3 * 3... (n times)

  - the constant base is repeated as a factor, with exponent depending on n

therefore:
n^3 (polynomial) < 3^n (exponential)
```

---

c. O(2^n + 2^(n+1))

- O(2^n) ✅

```txt
in more detail

2^(n+1) can be rewritten as 2 * 2^n, so n is being multiplied by a constant
```

---

d. O(2^n + 2^(n+n))

- O(2^n) ❌ -> my answer
- O(4^n) ✅ -> the correct answer

```txt
in more detail

2^(n+n) is 2 * 2 * 2 ... (n times)
By grouping pairs of twos, we can rewrite
(2 * 2)^n = 4^n
```

---

e. O(2^n + 3^n)

- O(3^n) ✅

```txt
in more detail

compare the terms
2^n < 3^n, since the exponent is the same (n), 3^n dominates 2^n

When comparing exponential functions with the same exponent, the higher base dominates
```

---

f. O(10^n + n!)

- O(n!) ✅

```txt
in more detail
- Factorial always grows faster than exponential
```

Result: 5/6

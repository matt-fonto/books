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

- O(2^n)

---

d. O(2^n + 2^(n+n))

- O(2^n)

---

e. O(2^n + 3^n)

- O(3^n)

---

f. O(10^n + n!)

- O(n!)

```python
# a. single loop: O(n) ✅
def sum_first_half(arr):
    sum = 0

    for i in range(len(arr) // 2):
        sum += arr[i]
    return sum
# ----

# b. single loop: O(n) ❌ -> my answer
# since this loop never does more than 10 iterations, it's O(1) time ✅
# Why? The number of instructions executed is bounded by a constant, regardless of input size!
def sum_first_ten(arr):
    sum = 0

    for i in range(10):
        if i >= len(arr):
            break
        sum += arr[i]
    return sum
# ----

# c. single loop: O(n) ✅
def sum_and_product_1(arr):
    sum, prod = 0, 1

    for elem in arr:
        sum += elem
        prod *= elem
    return sum, prod

# ----
# d. two loops, but sequential, not nested: O(n) ✅
def sum_and_product_2(arr):
    sum, prod = 0, 1

    for elem in arr:
        sum += elem

    for elem in arr:
        prod *= elem

    return sum, prod
# ----

# e. nested loops: O(n^2) ✅
def sum_and_product_3(arr):
    prod_sum = 0
    n = len(arr)

    for i in range(n):
        # even though the number of iterations of j reduces at every iteration, it's still nested
        for j in range(i+1, n):
            prod_sum += arr[i] * arr[j]

    return prod_sum
```

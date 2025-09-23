1. Find the complexity for the following functions

a. log10(n) -> O(log n)

b. 2^n \* log2(n) -> O(2^n \* log n)
c. n + log2(n) -> O(log n)
d. log2(n^2) -> O(log^2 n)
e. (log2(n))^2 O(log n)

2. What is the time complexity for:

```py
# T: O(log n)
# in this algo, we are doubling (so, it's like counting halvings, but in the opposite direction)
def sum_power_of_2_indices(arr):
    i = 2
    res = 0

    while i < len(arr):
        res += arr[i]
        i *= 2 # we're jumping two by two
    return res

# T: O(log n?) | n log n?
# in fact: it's O(n)
def weighted_sum(arr):
    i = len(arr)
    res = 0


    while i > 0:

        for j in range(i)
            res += arr[j]
        i = i // 2
    return
```

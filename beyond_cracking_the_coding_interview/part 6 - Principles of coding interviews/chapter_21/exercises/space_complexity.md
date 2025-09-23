If s is a string with n letters, what is the extra space complexity of the following snippets?

```py
# a. S: O(n * n) => O(n^2), because inside the matrix (arr), we add a value to the inner matrix => [[0], [0]...]
def empty_grid(s):
    matrix = [] # collection O(n): a collection contains a variable number of elements

    for i in range(len(s)):
        matrix.append([])

        for j in range(len(s)):
            matrix[i].append(0) # adding an element to the inner connection

# b. S: O(n)
def empty_lists(s):
    arr = [] # collection

    # value // 2 => floors the result
    # similar to Math.floor(value / 2)
    for i in range(len(s) // 2): # halving
        arr.append([]) # collection as well, but empty. So, only O(n)

# c. S: O(n)
def letter_set(s):
    my_set = set() # collection

    for char in s:
        my_set.add(char)

# d. S: O(1) or n?
def letters_to_indices(s):
    map = {} # composite (objects and classes)

    for i, char in enumarate(s):
        if char not in map:
            map[char] = [] # we add a collection here?
        m[char].append(i)

# e. O(1)
# custom class: composite
class Foo:
    def __init__(self, val, next):
        self.val = val
        self.next = next

    def linked_foos(s):
        curr = Foo("x", None)
        for char in s:
            if char != "x"
            curr = Foo(val, curr)

# f. O(n)
def all_substrings(s):
    arr = []

    for i in range(len(s)):
        for j in range(i+1, len(s) +1):
            arr.append(s[i:j])
```

If s is a string with n letters, what is the extra space complexity of the following snippets?

```py
# a.
def empty_grid(s):
    matrix = []

    for i in range(len(s)):
        matrix.append([])

        for j in range(len(s)):
            matrix[i].append(0)

# b.
def empty_lists(s):
    arr = []

    # value // 2 => floors the result
    # similar to Math.floor(value / 2)
    for i in range(len(s) // 2):
        arr.append([])

# c.
def letter_set(s):
    my_set = set()

    for char in s:
        my_set.add(char)

# d.
def letters_to_indices(s):
    map = {}

    for i, char in enumarate(s):
        if char not in map:
            map[char] = []
        m[char].append(i)

# e.
class Foo:
    def __init__(self, val, next):
        self.val = val
        self.next = next

    def linked_foos(s):
        curr = Foo("x", None)
        for char in s:
            if char != "x"
            curr = Foo(val, curr)

# f.

```

Exercises for Udemy course https://www.udemy.com/course/js-algorithms-and-data-structures

Notes

# JS algorithms and data structures

# Big O notation

## Time complexity

Determine what implementation of a solution is better.

When to care about big O? Problems that involve huge data sets

What is "better"?
- Fast
- Less memory-intensive
- (Readable)

Basic timer to measure performance:
```
var t1 = performance.now();
addUpTo(1000000000);
var t2 = performance.now();
console.log(`Time elapsed: ${(t2-t1) / 1000} seconds`);
```

Measuring time is not very reliable, different executions will give different times

Count number of simple operations, eg
n * (n+1) / 2
==> 3 operations
total += 1
==> 2 operations

Focus on big picture, don't worry about every operation, e.g. if we have 5n+2 operations, we only care that they grow with n.
5n+2 >>> n
100n >> n
2000n + 12n + 2 >> n
n^2 + 5n + 8 >> n^2

Notation:
O(f(n))
O(n) >> loop / non nested loops
O(n^2) >> nested loops

Rules of thumb (obvious, duh):
- Arithmetic operations are constant
- Variable assignment is constant
- Accessing elements in an array by index or object by key is constant
- In a loop, complexity is length of loop times complexity of thing inside loop

We only care about what happens when n gets very large, we don't care about small numbers

## Space complexity

Auxiliary space complexity: space of the algorithm

Rules of thumb:
- Most primitives are constant space
- Strings require O(n) space (n = number of characters)
- Reference types require generally O(n) (length of array or number of keys)

## Logarithms

O(log n) is much better than O(n)
O(n log n) is much better than O(n^2)

Where do O(log n) show up?
- Some search algorithms
- Some sorting algorithms
- Some recursion for space complexity

# Analyzing Performance of Arrays and Objects

# Problem solving approach

1. Understand the problem (George Polya, How to solve it)
Investigate the problem thorougly before trying to come up with a solution
Questions:
	- Can you restate the problem with your own words?
	- What are the inputs that go into the problem?
	- Outputs?
	- Can the outputs be determined from the inputs?
	- How to label the important pieces of data of the problem?

2. Explore concrete examples (user stories, or using specific inputs. Unit tests)
	- Start with simple examples (write inputs and outputs)
	- Move to more complex cases
	- Explore empty inputs
	- Explore invalid inputs

3. Break it down: write the steps to solve the problem, not necessarily pseudocode, it can be short comments

4. Solve or simplify: if you can solve the problem, solve it. If you can't, solve a simpler problem. Keep out the part that is giving you a hard time and solve the easier part that you know how to solve.

Simplify:
	- Find core difficulty
	- Ignore the difficulty
	- Write simplified solution
	- Incorporate the difficulty back in

5. Look back and refactor
Refactoring questions:
- Can you check the result? (does the code work?)
- Can you derive the result different?
- Can you understand it at a glance? (how intuitive is the solution when looking at the code?)
- Can you use the result or method for some other problem? (sometimes solving a problem unlocks the solution to another problem)
- Can you improve the performance of your solution?
- Can you think of other ways to refactor? (language conventions, styleguides...)
- How have other people solved this problem?

# Problem solving patterns

## Frequency counter pattern

Useful when comparing multiple pieces of data
Usually O(n)

# Recursion

Used very often

Sometimes cleaner than iteration

## Helper method recursion

# Search

Linear search: search element by element

Binary search: discard half results each time. Only for sorted arrays. Divide and conquer

binary search = O(log n)

Naive string search

# Sorting algorithms

BASIC: O(n^2)roughly equivalent, good for small data sets but dont scale well
bubble
selection
insertion

bubble = many swaps, good for arrays which are almost sorted
selection = few swaps
insertion = good for almost sorted arrays, and if data is being appended to array in real time

INTERMEDIATE O(n log n)
merge > no edge cases, always O(n log n),space O(n)
quick > O(n log n) >> O(n^2) (worst case, already sorted)
radix > sort numbers fast

# Data structures

## Singly linked lists
head, tail, length, node, value, pointer
Good to insert values at beginning and end easily
Insertion and deletion are cheap
Insertion O1
Removal O1 or On
Searching On
Access On

## Doubly linked lists
Insertion O1
Removal O1 or On
Searching On
Access On
Better than singly linked list if we need to find nodes very quickly in very long lists, and if we need to traverse list in both directions often

## Stacks
LIFO = last in first out
Use cases:
- Managing function invocations
- Undo / redo
- Routing and history objects
Insertion O1
Removal O1
Searching On >> doesnt matter
Access On >> doesnt matter

## Queue
Add and remove data
First in first out = FIFO
Use cases:
- background tasks
- Upload / download
- printing / task processing
Insertion O1
Removal O1
Searching On >> doesnt matter
Access On >> doesnt matter

## Trees
Use cases:
- html dom
- network routing
- abstract syntax trees
- AI (eg checkers moves, decision tree)
- folders in OS

### Binary trees
Each node can have at most 2 children

### Binary search trees
Sorted in a particular way
Given a node, every item small than it is located to the left, every item larger than it is located to the right
Use case:
- quick search

Insertion O(log n) >> Excellent
Searching O(log n) >> Excellent

But if the tree is somehow with one single branch, it's bad, but that's a bad use case for a tree

Node traversal: visit every node once
Many ways

- breadth-first search: horizontal first
- depth-first search: vertical first
	In order > returns values in order in a BST
	Pre order > good to flatten tree out, duplicate tree
	Post order

Time complexity is same for both, visit each node once
BFS > higher space complexity, better for deep trees
DFS > good for full fledged trees with many branchs and leaves

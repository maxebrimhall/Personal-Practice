// Use Case for Recursion:
// Recursion is particularly useful for problems that involve nested structures or can be broken down into smaller, identical subproblems.
// A common use case is traversing tree-like data structures, such as file directories, organizational hierarchies, or nested objects.
// For example, calculating the total size of a file system where directories contain files and subdirectories.

// Example: Recursive function to calculate factorial
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

// Basic Challenge on Recursion:
// Write a recursive function called 'power' that takes two parameters: base and exponent.
// The function should return base raised to the power of exponent.
// For example, power(2, 3) should return 8, and power(5, 0) should return 1.
// Remember to handle the base case where exponent is 0.

// Your solution here:
function power(base,exponent){
    if(exponent === 0){
        return 1
    }else{
        return base * power(base, exponent-1)
    }
}

// Another Basic Challenge on Recursion:
// Write a recursive function called 'sumToN' that takes a single parameter n (a positive integer).
// The function should return the sum of all integers from 1 to n.
// For example, sumToN(5) should return 15 (1+2+3+4+5), and sumToN(1) should return 1.
// Base case: when n is 1, return 1.

// Your solution here: 
function sumToN(positive){
    if(positive === 1){
        return 1
    }else{
        return positive + sumToN(positive-1)
    }
}
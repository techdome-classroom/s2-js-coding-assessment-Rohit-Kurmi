/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    // Dictionary to map closing brackets to their corresponding opening brackets
    const bracketMap = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    // Stack to keep track of the opening brackets
    let stack = [];

    // Traverse through each character in the string
    for (let char of s) {
        // If the character is a closing bracket
        if (bracketMap[char]) {
            // Pop the top element from the stack if it is non-empty, otherwise assign a dummy value '#'
            let topElement = stack.length > 0 ? stack.pop() : '#';

            // If the top element doesn't match the corresponding opening bracket
            if (bracketMap[char] !== topElement) {
                return false; // Return false if there is a mismatch
            }
        } else {
            // If it's an opening bracket, push it onto the stack
            stack.push(char);
        }
    }

    // At the end, the stack should be empty for a valid expression
    return stack.length === 0; // Return true if stack is empty, false otherwise
};

// Example test cases to validate the function
console.log(isValid("()"));      // Output: true
console.log(isValid("()[]{}"));  // Output: true
console.log(isValid("(]"));      // Output: false
console.log(isValid("([)]"));    // Output: false
console.log(isValid("{[]}"));    // Output: true

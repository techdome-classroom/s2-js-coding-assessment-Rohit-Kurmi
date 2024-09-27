/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    // Dictionary to map closing brackets to opening brackets
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
            // Pop the top element from stack if it is non-empty, otherwise assign a dummy value '#'
            let topElement = stack.length > 0 ? stack.pop() : '#';
            
            // If the top element doesn't match the corresponding opening bracket
            if (bracketMap[char] !== topElement) {
                return false;
            }
        } else {
            // If it's an opening bracket, push it to the stack
            stack.push(char);
        }
    }

    // At the end, the stack should be empty for a valid expression
    return stack.length === 0;
};

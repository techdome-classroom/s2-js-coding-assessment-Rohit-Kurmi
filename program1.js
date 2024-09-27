/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    // Stack to keep track of opening brackets
    let stack = [];
    
    // Dictionary to map closing brackets to their corresponding opening brackets
    const mapping = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    
    // Iterate over each character in the string
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        
        // If the character is a closing bracket
        if (mapping[char]) {
            // Get the top element of the stack, or assign a dummy value if the stack is empty
            let topElement = stack.length === 0 ? '#' : stack.pop();
            
            // If the bracket doesn't match, return false
            if (topElement !== mapping[char]) {
                return false;
            }
        } else {
            // It's an opening bracket, so push it to the stack
            stack.push(char);
        }
    }
    
    // If the stack is empty, the string is valid
    return stack.length === 0;
};

module.exports = { isValid };



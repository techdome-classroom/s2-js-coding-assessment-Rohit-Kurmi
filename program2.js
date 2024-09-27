/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    // Mapping of Roman numerals to their integer values
    const romanMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    
    let total = 0; // Total value to return
    let prevValue = 0; // Value of the previous numeral

    // Iterate through each character in the string from right to left
    for (let i = s.length - 1; i >= 0; i--) {
        const currentValue = romanMap[s[i]]; // Get the value of the current numeral

        // If the current value is less than the previous value, we subtract it
        if (currentValue < prevValue) {
            total -= currentValue;
        } else {
            // Otherwise, we add it
            total += currentValue;
        }

        // Update the previous value to the current value for the next iteration
        prevValue = currentValue;
    }

    return total; // Return the final total
};

// Export the function for testing
module.exports = { romanToInt };

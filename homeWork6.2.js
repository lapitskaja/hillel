function palindrome() {
    const value = prompt("Enter the value:");
    let processedValue = '';

    for (let i = 0; i < value.length; i++) {
        const symbol = value[i];
        if (symbol !== ' ') {
            processedValue += symbol.toLowerCase();
        }
    }

    let reversedValue = '';

    for (let i = processedValue.length - 1; i >= 0; i--) {
        reversedValue += processedValue[i];
    }

    let isPalindrome = true;

    for (let i = 0; i < processedValue.length; i++) {
        if (processedValue[i] !== reversedValue[i]) {
            isPalindrome = false;
            break;
        }
    }

    return isPalindrome;
}

const result = palindrome();
console.log(result);
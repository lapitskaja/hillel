function convertToDecimal(numberString, base) {
    const validDigits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'.slice(0, base);

    function charToDigit(char) {
        for (let i = 0; i < validDigits.length; i++) {
            if (char === validDigits[i]) {
                return i;
            }
        }
        return -1;
    }

    let decimalNumber = 0;
    let decimalFactor = 1;

    for (let i = numberString.length - 1; i >= 0; i--) {
        const digit = numberString[i].toUpperCase();
        const digitValue = charToDigit(digit);

        if (digitValue >= 0 && digitValue < base) {
            decimalNumber += digitValue * decimalFactor;
            decimalFactor *= base;
        } else {
            decimalNumber = NaN;
            break;
        }
    }

    return decimalNumber;
}

const numberString = prompt("Enter a number:");
const base = parseInt(prompt("Enter the base of the number system:"), 10);

const result = convertToDecimal(numberString, base);
console.log(result);
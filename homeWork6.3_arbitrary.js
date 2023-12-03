function convertToDecimal(numberString, base, isNegative) {
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
        const char = numberString[i].toUpperCase();

        if (char === '-' && i === 0) {
            isNegative = true;
            continue;
        }

        const digitValue = charToDigit(char);

        if (digitValue >= 0 && digitValue < base) {
            decimalNumber += digitValue * decimalFactor;
            decimalFactor *= base;
        } else {
            decimalNumber = NaN;
            break;
        }
    }

    return isNegative ? -decimalNumber : decimalNumber;
}

const numberString = prompt("Enter a number:");
const base = parseInt(prompt("Enter the base of the number system:"), 10);
let isNegative = false;

const result = convertToDecimal(numberString, base, isNegative);
console.log(result);
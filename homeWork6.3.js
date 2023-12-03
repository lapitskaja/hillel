function covertToNumber() {
    const valueString = prompt("Enter a number:");

    let number = 0;
    let decimalFactor = 1;

    for (let i = valueString.length - 1; i >= 0; i--) {
        const numberCod = valueString.charCodeAt(i) - '0'.charCodeAt(0);

        if (numberCod >= 0 && numberCod <= 9) {
            number += numberCod * decimalFactor;
            decimalFactor *= 10;
        } else {
            number = NaN;
            break;
        }
    }

    return number;
}

const result = covertToNumber();
console.log(result);
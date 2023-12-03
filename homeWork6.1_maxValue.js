const array = [1, 7, 5, 6, 0];

function findMax(arr) {
    if (!arr.length) {
        return null;
    }

    let maxValue = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxValue) {
            maxValue = arr[i];
        }
    }

    return maxValue;
}

const maxValue = findMax(array);
console.log(maxValue);
const arrey = [3, 1, -9, -3, 2, 8];

function findMin(arr) {
    if (!arr.length) {
        return null;
    }

    let minValue = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < minValue) {
            minValue = arr[i];
        }
    }

    return minValue;
}

const minValue = findMin(arrey);
console.log(minValue);
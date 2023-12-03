const array = [1, 7, 5, 6, 0];

function findMinMax(arr) {
    if (!arr.length) {
        return { min: null, max: null };
    }

    let minValue = arr[0];
    let maxValue = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < minValue) {
            minValue = arr[i];
        }
        if (arr[i] > maxValue) {
            maxValue = arr[i];
        }
    }

    return { min: minValue, max: maxValue };
}

const result = findMinMax(array);
console.log("Min: "+result.min);
console.log("Max: "+result.max);
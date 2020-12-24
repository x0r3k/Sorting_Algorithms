const arr = [1,2,4,1,99,432,23,43423,54,664,23,55];

function mergeSort(arr, start, end) {
    if(start >= end) return;
    let divider = Math.floor((start + end) / 2);
    mergeSort(arr, start, divider);
    mergeSort(arr, divider + 1, end);
    merge(arr, start, divider, end);
}

function merge(arr, start, divider, end) {
    let leftSize = divider - start + 1;
    let rightSize = end - divider;
    let leftArray = [], rightArray = [];
    for (let i = 0; i < leftSize; i++) {
        leftArray[i] = arr[start + i];
    }

    for (let i = 0; i < rightSize; i++) {
        rightArray[i] = arr[divider + 1 + i]
    }

    let i = 0, j = 0, k = start;

    while(i < leftSize && j < rightSize) {
        if(leftArray[i] <= rightArray[j]) {
            arr[k] = leftArray[i];
            i++;
        }
        else {
            arr[k] = rightArray[j];
            j++;
        }
        k++;
    }

    while(i < leftSize) {
        arr[k] = leftArray[i];
        i++;
        k++;
    }

    while(j < rightSize) {
        arr[k] = rightArray[j];
        j++;
        k++;
    }
}

module.exports = {
    mergeSort
}
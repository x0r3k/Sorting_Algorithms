const arr = [1,2,4,1,99,432,23,43423,54,664,23,55];

function quickSort(arr, start, end) {
    if(start >= end) return;
    let divider = partition(arr, start, end);
    quickSort(arr, start, divider - 1);
    quickSort(arr, divider + 1, end);
}

function partition(arr, start, end) {
    let smallestIndex = start - 1;
    let loopIterator = start;
    let lastItem = arr[end];
    for(loopIterator; loopIterator < end; loopIterator++) {
        if(arr[loopIterator] < lastItem) {
            smallestIndex++;
            [arr[smallestIndex], arr[loopIterator]] = [arr[loopIterator], arr[smallestIndex]];
        }
    }
    [arr[smallestIndex+1], arr[end]] = [arr[end], arr[smallestIndex+1]];
    return smallestIndex + 1;
}

module.exports = {
    quickSort
}
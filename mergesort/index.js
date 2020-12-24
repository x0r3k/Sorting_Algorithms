const { mergeSort } = require('./mergesort');

function startSort(arr) {
    mergeSort(arr, 0, arr.length - 1);
}

module.exports = startSort;
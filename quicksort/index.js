const { quickSort } = require('./quicksort');

function startSort(arr) {
    quickSort(arr, 0, arr.length - 1);
}

module.exports = startSort;
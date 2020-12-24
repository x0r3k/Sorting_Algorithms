const { heapSort } = require('./heapsort');

function startSort(arr) {
    heapSort(arr, arr.length);
}

module.exports = startSort;
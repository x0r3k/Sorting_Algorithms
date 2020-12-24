const bubbleSort = require('./bubblesort');
const mergeSort = require('./mergesort');
const quickSort = require('./quicksort');
const heapSort = require('./heapsort');

function main() {
    // const arr = [1,2,4,1,99,432,23,43423,54,664,23,55];
    const arr = new Array(100000).fill().map(() => Math.random() * 1000);
    const t1 = Date.now();
    console.log(t1);
    heapSort(arr);
    const t2 = Date.now();
    console.log(t2);
    // console.log(arr);
}

main();
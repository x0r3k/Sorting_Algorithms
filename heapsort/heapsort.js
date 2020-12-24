function heapSort(arr, length) {
    //create heap
    for(let i = Math.floor(length / 2) - 1; i >= 0; i--) {
        heapify(arr, length, i);
    }

    //remove last index item
    for(let i = length - 1; i > 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]];
        heapify(arr, i, 0);
    }
}

function heapify(arr, length, root) {
    let maxElementIndex = root; // root as max element initially
    let leftChild = 2 * root + 1; //left child index
    let rightChild = 2 * root + 2; //right child index

    //fing the largest value
    if(leftChild < length && arr[maxElementIndex] < arr[leftChild]) {
        maxElementIndex = leftChild;
    }

    if(rightChild < length && arr[maxElementIndex] < arr[rightChild]) {
        maxElementIndex = rightChild;
    }

    //reheapify branches if root was changed
    if(root !== maxElementIndex) {
        [arr[root], arr[maxElementIndex]] = [arr[maxElementIndex], arr[root]];
        heapify(arr, length, maxElementIndex);
    }
}

module.exports = { heapSort };
const arr = [1,2,4,1,99,432,23,43423,54,664,23,55];

function bubbleSort(arr) {
    let isSwapped = false;
    for (let i = 0; i < arr.length; i++) {
        isSwapped = false; 
        for (let j = 0; j < arr.length - i - 1; j++) {
            if(arr[j] > arr[j+1]) {
                [arr[j+1], arr[j]] = [arr[j], arr[j+1]];
                isSwapped = true;
            }        
        }
        if(!isSwapped) break;
    }
}

module.exports = {
    bubbleSort
}
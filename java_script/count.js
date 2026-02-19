function countOccurrences(arr) {
    let count = {};

    for (let i = 0; i < arr.length; i++) {
        if (count[arr[i]] ) {
            count[arr[i]]++;
        } else {
            count[arr[i]] = 1;
        }
    }

    return count;
}

let arr = [1, 2, 2, 3, 3, 3, 4];
console.log(countOccurrences(arr));
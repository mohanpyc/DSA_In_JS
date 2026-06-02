const toFind = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
const elm = 15;

function binarySearch(elements, element, lIndex, rIndex) {

    if (lIndex > rIndex) {
        return "not found";
    }

    let middle = Math.floor((lIndex + rIndex) / 2)

    if (elements[middle] == element) {
        console.log('index of element is ', middle)
        return middle
    } else if (element > elements[middle]) {
        return binarySearch(elements, element, middle + 1, rIndex)
    } else if (element < elements[middle]) {
        return binarySearch(elements, element, lIndex, middle - 1)
    }
}


binarySearch(toFind, elm, 0, toFind.length - 1)

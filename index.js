
//divide and conquer! we need to split the array in two equal parts, left and rigth
//sort left part
//sort rigth part
//do it until the array left has one element inside, si its already sorted
//merge them in order, comparing the first element in left part and rigth part of each spliced array
//CS50x Harvard lesson https://www.youtube.com/watch?v=Ns7tGNbtvV4 after a couple of hours looking for resources I can assure you this is the holy grail of merge sort explanations


//this function will split the array recursively until it contains one element 
function mergeSort(arr){
    if (arr.length <= 1) {
        return arr
    }

    let mid = Math.floor(arr.length / 2);

    let left = mergeSort(arr.slice(0, mid));
    let rigth = mergeSort(arr.slice(mid));

    return (left, rigth)
}
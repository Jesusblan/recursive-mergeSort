
//divide and conquer! we need to split the array in two equal parts, left and rigth
//sort left part
//sort rigth part
//do it until the array left has one element inside, si its already sorted
//merge them in order, comparing the first element in left part and rigth part of each spliced array with a helper function
//CS50x Harvard lesson https://www.youtube.com/watch?v=Ns7tGNbtvV4 after a couple of hours looking for resources I can assure you this is the holy grail of merge sort explanations



//this function will merge the spliced array
function merge(left, rigth){
    let sortedArray = []

    while (left.length && rigth.length){
        if (left[0] < rigth[0]){
            sortedArray.push(left.shift())
        } 
        
        else {
            sortedArray.push(rigth.shift())
        }
    }

    return [...sortedArray, ...left, ...rigth]
}

console.log(merge([1, 4], [2, 6, 9]))


//this function will split the array recursively until it contains one element and calls the merge function to merge the individual soerted elements in a new array
function mergeSort(arr){
    if (arr.length <= 1) return arr

    let mid = Math.floor(arr.length / 2)

    let left = mergeSort(arr.slice(0, mid))
    let rigth = mergeSort(arr.slice(mid))

    return merge(left, rigth)
}



let example = [15, 832, 9 ,384, 8 ,23485, 753]

console.log("array input: 15, 832, 9 ,384, 8 ,23485, 753")
console.log(mergeSort(example))

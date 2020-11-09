// Merge Sort
/**
 * Sort the array containing restaurant data by 
 * restaurant name
 * @param {any} restaurantData- unsorted array of restaurant data
 */
function mergeSort(restaurantData) {
    //Base case: Array of length 1 is already sorted
    if (restaurantData.length <= 1) {
        return restaurantData;
    }

    //Find the middle of the array
    const m = Math.floor(restaurantData.length / 2);
    //Arrays to split the input array into two 
    var left = [];
    var right = [];

    //Copy over left side of array 
    for (let i = 0; i < m; i++) {
        left[i] = restaurantData[ i];
    }
    //Copy over right side of array
    for (let j = 0; j < (restaurantData.length - m); j++) {
        right[j] = restaurantData[m  + j ];
    }

    //Merge the two  arrays

    return merge(
        mergeSort(left), mergeSort(right)
    );
};

/**
 * Merge two arrays into one sorted array 
 * @param {Array} left
 * @param {Array} right
 */
function merge(left, right) {
    console.log("########################################")
    console.log("right")
    console.log(right)
    console.log("left")
    console.log(left)
    //Variabes to keep track postion in arrays
    var i = 0;
    var j = 0;
    //Initalize a new array to store elements in sorted order
    var arr = []
    //Iterate through arrays until one is depleted 
    while (i < left.length && j < right.length) {
        //if left array element is smaller or equal to right array 
        //element add it to the new sorted array 
        if (left[i].name <= right[j].name) {
            arr.push(left[i])
            i++;
        }else {//If right is smaller add to new array 
            arr.push(right[j])
            j++;
        }
    }

    //If left array has not been completely iterated through 
    //add the rest of the elements to the sorted array
    while (i < left.length) {
        arr.push(left[i])
        i++;
    }
    //If right array has not been completely iterated through 
    //add the rest of the elements to the sorted array
    while (j < right.length) {
        arr.push(right[j])
        j++;
    }
    console.log("merged")
    console.log(arr)
    console.log("########################################")

    return(arr)
} 


export default mergeSort;
  


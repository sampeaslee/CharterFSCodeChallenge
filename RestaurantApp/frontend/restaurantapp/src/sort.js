// Merge Sort 
function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const m = Math.floor(arr.length / 2);
    console.log(m);
    var left = [];
    var right = [];

    for (let i = 0; i < (arr.length - m); i++) {
        left[i] = arr[ i];
    }

    for (let j = 0; j < m ; j++) {
        right[j] = arr[m  + j - 1];
    }


    return merge(
        mergeSort(left), mergeSort(right)
    );
    

};


function merge( left , right)
{


    var i = 0;
    var j = 0;
    var arr = []


    while (i < left.length && j < right.length) {
        if (left[i].name <= right[j].name) {
            arr.push(left[i])
            i++;
        }
        else {
            arr.push(right[j])
            j++;
        }

    }


    while (i < left.length) {
        arr.push(left[i])
        i++;
 
    }


    while (j < right.length) {
        arr.push(right[j])
        j++;
    }

    return(arr)
} 


export default mergeSort;
  


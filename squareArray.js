let startingArray = [1, 2, 3, 4, 5, 6];


const squareArray = function(myArray) {
    let result = [];

    for (i = 0; i < myArray.length; i++) {
        let square = myArray[i] * myArray[i];
        result.push(square);
    }

    return result;


}



let finalArray = squareArray(startingArray);

console.log(finalArray)


console.log(squareArray(finalArray));

// console.log(squareArray([3, 5, 8, 9, 10]))
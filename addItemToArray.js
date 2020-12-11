let myArrayExample = ["dogs", "cats", "bears"];

const addItemtoArray = function(arr, item){

    console.log("before change, ", arr)

    arr.push(item);

    console.log("after change, ", arr)


}


addItemtoArray([1, 2, 3, 4, 5], 37);

addItemtoArray(myArrayExample, "Lion")

console.log(myArrayExample);
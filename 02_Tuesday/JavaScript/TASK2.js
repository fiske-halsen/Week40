// Implement user-defined functions that take callbacks as an argument

let nameArray = ["Hassan", "Jan", "Peter", "Boline", "Frederik"]

// Implementing my own filter method
function myFilter(array, callback){
    return callback(array)
}

function filterNames(array){
    let filteredArray = [];
    array.forEach(function(element){
        if(element.includes("a")){
            filteredArray.push(element)
        }
    })
    return filteredArray
}

let filteredArray = myFilter(nameArray,filterNames)

console.log(filteredArray)

// implementing my own map method

function myMap(array, callback){

    return callback(array)
}

function mapMyArray(array){
    let mappedArray = [];

    array.forEach(function(element){
      mappedArray.push(element.split("").reverse().join(""))
    })
    return mappedArray;
}

console.log(myMap(nameArray, mapMyArray))
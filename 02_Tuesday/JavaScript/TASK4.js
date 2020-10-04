
/* reduce() is used to reduce an array into a single item (a number, string, object, etc). 
This is a very common problem in all languages, for specific problems, so common, that the Array actually has a specific “reduce” method called join,  
which can reduce an array into a string separated by whatever we choose.
 */



// a)
var all = ["Hassan", "Peter", "Carla", "Boline"];
let stringNames = all.join("#")
console.log(stringNames)

// b)
var numbers = [2, 3, 67, 33];



function myCalc(callback, array){
    return callback(array)
}

function doTheCalc(array){
   return array.reduce((total, amount) => total + amount)
    
}

console.log(myCalc(doTheCalc, numbers))

// c) 

var members = [
    {name : "Peter", age: 18},
    {name : "Jan", age: 35},
    {name : "Janne", age: 25},
    {name : "Martin", age: 22}]

    
   function getAverageAge(members){
    return members.reduce((accumulater, member) => accumulater + member.age, 0 )/members.length
   }

   console.log(getAverageAge(members))

var numbers = [1, 3, 5, 10, 11]

// use map + a sufficient callback to map numbers into this array
//[4,8,15,21,11]

function returnNewNumbers(array, callback) {
    return callback(array)
}

function makeNewNumbers(array) {
    let counter = 0;
    let newArray = array.map(function (n) {

        if (n != 11) {
            counter++
            return n + numbers[counter]
        } else return n
    })
    return newArray
}

console.log(returnNewNumbers(numbers, makeNewNumbers))


/*
Use map() to create the <a>’s for a navigation set and eventually a string
 like below (use join() to get the string of <a>’s):
<nav>
  <a href=””>Hassan</a>
  <a href=””>Peter</a>
  <a href=””>Jan</a>
  <a href=””>Boline</a>
</nav>
*/
let myNames = ["Hassan", "Peter", "Jan", "Boline"]

let newArray = myNames.map(function (n) {
    let nArray = n.split("")
    nArray.unshift("<a href=''>")
    nArray.push("</a>\n")
    return nArray.join("")
})



newArray.push("</nav>")
newArray.unshift("<nav>\n")

console.log(newArray.join(""))


/*
Use map()+(join + ..) to create a string, representing a two column table, for the data given below:
var persons = [{name:"Hassan",phone:"1234567"}, 
{name: "Peter",phone: "675843"}, {name: "Jan", phone: "98547"},{name: "Boline", phone: "79345"}];
*/

var persons = [{ name: "Hassan", phone: "1234567" },
{ name: "Peter", phone: "675843" }, { name: "Jan", phone: "98547" }, { name: "Boline", phone: "79345" }]



let tableArray = persons.map(function (object) {
    return "<tr><td>" + object.name + "</td>" + "<td>" + object.phone + "</td></tr>\n"
})

let template = "<table>\n<tr>\n<th>name</th>\n<th>phone</th>\n</tr>\n"
tableArray.unshift(template)
tableArray.push("</table>")


console.log(tableArray.join(""))
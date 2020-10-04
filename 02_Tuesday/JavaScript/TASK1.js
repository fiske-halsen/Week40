
//Filter method
let nameArray = ["Hassan", "Jan", "Peter", "Boline", "Frederik"]



let filteredArray = nameArray.filter(n => n.includes("a"))

console.log(filteredArray)



// Map method

/*
Jeg bruger split("") som tager n(som er et navn) og splitter den strings bogstaver op og danner et nyt
   array. 
   Navnet Hassan.split("") = array['H','a','s','s','s','a']
   Derefter array.reverse() = array['n','a','s','s','a','H']
   Til sidst array.join("") = "nassaH"

*/
let mapArray = nameArray.map(n => n.split("").reverse().join(""))

console.log(mapArray)

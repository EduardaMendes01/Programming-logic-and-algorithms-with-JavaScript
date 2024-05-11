const prompt = require("prompt-sync")()
console.log("World Cup years program. Enter 0 to leave")
console.log("-----------------------------------------")
do{
    const year = Number(prompt("Year: "))
    if(year == 0){
        break
    } else if (year == 1942 || year == 1946){
        console.log(`There was no World Cup in ${year}(World War II)`)
    } else if (year >= 1930 && year % 4 == 2) {
        console.log(`Yes! ${year} it's year of World`)
    } else{
        console.log(`No...${year} is not year of World Cup`)
    }
} while(true)

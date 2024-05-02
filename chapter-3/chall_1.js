/* Develop a program for a company that reads the salary and time an employee works in the company. Knowing that every 4 years(four-year-period) the employee recives a 1% increase in salary, calculate and inform the number of four-year periods to which the employeer is entitled */

const prompt = require("prompt-sync")()
const currentSalary = prompt("salary: ")
const yearsInTheC = prompt("Years working in the company: ")
const checkYears = Math.floor(yearsInTheC / 4)
const newSalary = currentSalary * Math.pow(1.01, checkYears)
console.log(`Current Salary: ${currentSalary}`)
console.log(`Years in the Company: ${yearsInTheC}`)
console.log(`Quadrennium: ${checkYears}`)
console.log(`Final Salary: ${newSalary.toFixed(2)}`)
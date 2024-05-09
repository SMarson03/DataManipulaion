/*We have four numbers that need to add up to 50. At least two of these numbers 
must be odd. No number can be larger than 25, and each number must be unique.
How can we verify this? Check out the following CodeSandbox for an example. You 
can change the values of each of the initial numbers, n1 through n4, to see how 
the code responds in the console.*/

const n1 = 5
const n2 = 10
const n3 = 15
const n4 = 20

const isSum50 = (n1+n2+n3+n4) == 50;
console.log(n1+n2+n3+n4) == 50

/*Check if all numbers are divisible by 5. Cache the result in a variable.*/
console.log(n1/5)
console.log(n2/5)
console.log(n3/5)
console.log(n4/5)

const divBy5 = n1%5 && n2%5 && n3%5 && n4%5 == 0
/*Check if the first number is larger than the last. Cache the result in a 
variable.*/
console.log(n1>n4)
const n1SmallerThann4 = n1<n4 == true

/*Accomplish the following arithmetic chain:*
Subtract the first number from the second number.
Multiply the result by the third number.
Find the remainder of dividing the result by the fourth number.*/
console.log(n1-n2)
console.log(-5*n3)
console.log(-75/n4)

/*Before continuing, go back through your code and add console log statements 
for each check. Use string concatenation or template literals to format the 
outputs in a reasonable way. For example, instead of console.log(isValid), we 
could write console.log (`The four numbers are valid according to the provided 
criteria: ${isValid}.`) or something similar.*/

console.log(`The four numbers is a sum of 50 because ${isSum50}`)
console.log(`${n1} ${n2} ${n3} ${n4} is divisible by 5 because dividing by 5 leave a remainder of ${divBy5} `)
console.log(`${n1} is not larger than ${n4} because 5 is smaller than 20 ${n1SmallerThann4}`)



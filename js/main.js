let num1 = prompt("ingresa tu primer numero")
let num2 = prompt("ingresa tu segundo numero")

// para numeros sin coma
// let convertNum1 = parseInt(num1)
// let converNum2 = parseInt(num2)

// para numeros con coma
// let convertNum1 = parseFloat(num1)
// let converNum2 = parseFloat(num2)

// lo visto en clase
let convertNum1 = +num1
let converNum2 = +num2


let numSum = convertNum1 + converNum2

alert(numSum)
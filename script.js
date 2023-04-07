let mathOperation = prompt("Введіть дію: add, sub, mult, div: ");

while (!(mathOperation === "add" || mathOperation === "sub" || mathOperation === "mult" || mathOperation === "div")) {
    alert("Неправильно обрана математична дія. Перелік дій: \n" + "add - складання\n" + "sub - віднімання\n" + "mult - множення\n" + "div - віднімання");
    mathOperation = prompt("Введіть дію: add, sub, mult, div: ");
}

let firstNumber = prompt("Введіть перше число: ");
let secondNumber = prompt("Введіть друге число: ");
let resultAdd = Number(firstNumber) + Number(secondNumber);
let resultSub = Number(firstNumber) - Number(secondNumber);
let resultMult = Number(firstNumber) * Number(secondNumber);
let resultDiv = Number(firstNumber) / Number(secondNumber);


if (Number(secondNumber) === 0) {
    alert("На 0 ділити неможливо");
} else if (mathOperation === 'add') {
    alert(Number(firstNumber) + " + " + Number(secondNumber) + " = " + Number(resultAdd));
} else if (mathOperation === 'sub') {
    alert(Number(firstNumber) + " - " + Number(secondNumber) + " = " + Number(resultSub));
} else if (mathOperation === 'mult') {
    alert(Number(firstNumber) + " * " + Number(secondNumber) + " = " + Number(resultMult));
} else if (mathOperation === 'div') {
    alert(Number(firstNumber) + " / " + Number(secondNumber) + " = " + Number(resultDiv));
}





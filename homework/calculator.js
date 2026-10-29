function calculate(a, b, op) {
    switch (op) {
        case "+": return a + b;
        case "-": return a - b;
        case "*": return a * b;
        case "/":
            if (b === 0) return "Ошибка: деление на ноль";
            return a / b;
        default:
            return "Ошибка: неизвестная операция";
    }
}

let a = Number(prompt("Первое число:"));
let b = Number(prompt("Второе число:"));
let op = prompt("Операция (+, -, *, /):");

let result = calculate(a, b, op);
console.log(`${a} ${op} ${b} = ${result}`);
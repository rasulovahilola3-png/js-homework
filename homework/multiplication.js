function printTable(n) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${n} × ${i} = ${n * i}`);
    }
}

let n = Number(prompt("Введи число для таблицы умножения:"));
printTable(n);
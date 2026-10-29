function sumTo(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

let n = Number(prompt("Введи n:"));
console.log(`Сумма чисел от 1 до ${n} = ${sumTo(n)}`);
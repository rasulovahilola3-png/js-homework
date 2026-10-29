// ===== Мини-программа №1: вывод в консоль =====
console.log("Привет, мир!");
console.log("Я учу JavaScript");

// ===== Мини-программа №2: переменные и ввод =====
let name = prompt("Как тебя зовут?");
let age = prompt("Сколько тебе лет?");
let city = prompt("Из какого ты города?");

console.log("Привет, " + name + "!");
console.log("Тебе " + age + " лет.");
console.log("Ты из " + city + ".");

// ===== Мини-программа №3: условие =====
let ageNum = Number(prompt("Сколько тебе лет? (для проверки)"));
if (ageNum >= 18) {
    console.log("Ты совершеннолетний");
} else if (ageNum < 7) {
    console.log("Ты ещё школьник");
} else {
    console.log("Ты ещё несовершеннолетний");
}

// ===== Мини-программа №4: цикл =====
let n = Number(prompt("Введи число"));
console.log("Чётные числа от 1 до " + n + ":");
for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// ===== Мини-программа №5: функция =====
function isEven(x) {
    return x % 2 === 0;
}

function isPositive(x) {
    return x > 0;
}

let n2 = Number(prompt("Введи число (функция isEven)"));
for (let i = 1; i <= n2; i++) {
    if (isEven(i)) {
        console.log(i + " — чётное");
    }
    if (isPositive(i)) {
        console.log(i + " — положительное");
    }
}
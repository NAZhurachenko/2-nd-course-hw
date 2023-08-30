//Задание 1
console.log('js'.toUpperCase());

//Задание 2
let arr = [];
let str = '';
function select(arr, str) {
    console.log(arr.filter(i => str.exec(i)));
}
select(['Кошка', 'Кит', 'Комар', 'носорог'], /^ко/i);
select(['яблоко', 'груша', 'гриб', 'огурец'], /^гру/i);
select(['Дом', 'Банк', 'Больница', 'Театр'], /^Кино/i);

//Задание 3
console.log(Math.floor(32.58884));
console.log(Math.ceil(32.58884));
console.log(Math.round(32.58884));

//Задание 4
console.log(Math.min(52, 53, 49, 77, 21, 32));
console.log(Math.max(52, 53, 49, 77, 21, 32));

//Задание 5
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomIntInclusive(1, 10));

//Задание 6
function doArr(n) {
    let randomArr = [];
    for (i = 0; i < n; i++) {
        randomArr.push(Math.floor(Math.random() * 10));
        randomArr.length = (n / 2);
    }
    return randomArr;
}
console.log(doArr(2));

//Задание 7
function getRandomBetween(b, d) {
    return Math.floor(Math.random() * (b - d + 1)) + d;
}
console.log(getRandomBetween(3, 5));

//Задание 8
let myDate = new Date();
console.log(myDate);

//Задание 9
let currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 73);
console.log(currentDate)

//Задание 10
let newDay = new Date();
console.log(`Дата: ${newDay.getDate()} ${newDay.getMonth()} ${newDay.getFullYear()} - это ${newDay.getDay()}.
Время: ${newDay.getHours()}:${newDay.getMinutes()}:${newDay.getSeconds()}`);
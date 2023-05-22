let a = 10;
alert(a);
a = 20;
alert(a);

let year = 2007;
alert('Год выпуска первого iPhone: ' + year);

let name = "Брендон Айк";
alert('Имя создателя языка JavaScript: ' + name);

let z = 10;
let y = 2;
let sum = z + y;
let dif = z - y;
let mul = z * y;
let div = z / y;
alert(sum);
alert(dif);
alert(mul);
alert(div);

z = 2;
y = 5;
let result = z ** y;
alert(result);

a = 9;
let b = 2;
result = a % b;
alert(result);

let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
++num;
--num;
alert(num);

let age = prompt('Сколько вам лет?');
alert('Ваш возраст: ' + age);

const user = {
    name: 'Nadezhda',
    age: 23,
    isAdmin: true
}
user.cityOfResidence = 'SPb';
delete user.cityOfResidence;
let info = prompt('Какую информацию хотите узнать о пользователе?');
console.log(user[info]);
alert(info);

let userName = prompt('Как вас зовут?');
alert('Привет, ' + userName '!');
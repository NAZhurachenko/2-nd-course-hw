let password = prompt('Введите пароль');
let message;
message = (password === 'Parol') ? 'Пароль введен верно' : 'Пароль введен неправильно';
alert(message);

let c = prompt('Запишите любое число');
message = (c > 0 && c < 10) ? 'Верно' : 'Неверно';
alert(message);

let d = prompt('Запишите любое число');
let e = prompt('Запишите любое число');
message = (d > 100 || e > 100) ? 'Верно' : 'Неверно';
alert(message);

let a = '2';
let b = '3';
alert(Number(a) + Number(b));

let monthNumber = prompt('Введите номер месяца');
switch (monthNumber) {
    case '12':
        alert('Зима')
        break;
    case '1':
        alert('Зима')
        break;
    case '2':
        alert('Зима')
        break;
    case '3':
        alert('Весна')
        break;
    case '4':
        alert('Весна')
        break;
    case '5':
        alert('Весна')
        break;
    case '6':
        alert('Лето')
        break;
    case '7':
        alert('Лето')
        break;
    case '8':
        alert('Лето')
        break;
    case '9':
        alert('Осень')
        break;
    case '10':
        alert('Осень')
        break;
    case '11':
        alert('Осень')
        break;
    default:
        alert('Номер месяца больше 13')
        break;
}
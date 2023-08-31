function words() {
    let arr = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
arr = arr.sort(() => Math.random() - 0.5);

let a = arr[0];
let b = arr[arr.lenght - 1];

alert(arr);

let firstWord = prompt("Чему равнялся первый элемент массива?");
let lastWord = prompt("Чему равнялся последний элемент массива?");

if ((firstWord == a) && (lastWord == b)) {
    alert("Поздравляем! Вы угадали оба элемента");
}

if ((firstWord == a && lastWord !== b) || (firstWord !== a && lastWord == b)) {
    alert("Вы были близки к победе!");
}

else {
    alert("Вы ответили неверно :с");
}
}

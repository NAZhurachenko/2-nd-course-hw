function season() {
    const month = prompt('Введите номер месяца');
    if (month >= 3 && month <= 5) {
        alert('Весна');
    }
    if (month >= 6 && month <= 8) {
        alert('Лето');
    }
    if (month >= 9 && month <= 11) {
        alert('Осень');
    }
    if (month >= 1 && month <= 2 || month == 12) {
        alert('Зима');
    }
    if (month > 12 || month < 1 || isNaN(month)) {
        alert('Ошибка');
    }
}
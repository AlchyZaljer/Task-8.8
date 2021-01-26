document.querySelector('#consoleLog').addEventListener('click', () => {
    alert('Метод для вывода сообщения в веб-консоль.');
    console.log('Пример сообщения в веб-консоли');
})

document.querySelector('#alert').addEventListener('click', () => {
    alert('Сообщение в диалоговом окне.');
})

document.querySelector('#prompt').addEventListener('click', () => {
    prompt('Сообщение с запросом на ввод текста в диалоговом окне.', 'Значение по умолчанию в поле ввода.');
})
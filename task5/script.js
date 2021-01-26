document.addEventListener('input', (event) => {
    document.querySelector('#duplicateField').textContent = event.target.value;
})

document.addEventListener('submit', (event) => {
    let userText = document.querySelector('#duplicateField').textContent;
    console.log(userText);
    document.querySelector('#enteredForm').value = '';
    document.querySelector('#duplicateField').textContent = '';
})

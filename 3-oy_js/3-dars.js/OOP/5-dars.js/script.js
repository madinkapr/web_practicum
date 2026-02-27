const form = document.querySelector('#form');

form.addEventListener('submit', (event)=>{
    event.preventDefault();

    const name = document.querySelector('#name').value.trim();
    const password = document.querySelector('#pass').value.trim();
    const error = document.querySelector('.error');

    if(name === '' || password === ''){
        error.textContent = 'Malumot kiriting'
    }else{
        document.querySelector('#success').style.display = 'block';
        error.style.display = 'none';
        document.querySelector('#nameValue').textContent = name;
        document.querySelector('#passValue').textContent = password;
        document.querySelector('#name').value = '';
        document.querySelector('#pass').value = '';
    }
})


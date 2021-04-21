const main = document.querySelector('.main');

document.getElementById('loginBtn').addEventListener('click', () => {
    const password = document.getElementById('password').value;
    if (password === 'admin') {
        loginAdmin();
    } else {
        main.insertAdjacentHTML('beforeend', '<p>Fel lösenord! Prova igen.</p>');
        console.log("Fel!");
    }
})
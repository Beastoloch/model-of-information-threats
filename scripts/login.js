const axios = require('axios');
const form = document.querySelector('.form');
const username = document.querySelector('#username');
const password = document.querySelector('#password');

const postNewUser = async (evt) => {
    try {
        const response = await axios.post('/', threat.value)
        return response.data
    } catch (err) {
        console.error(err.toJSON())
    }
}

const submitForm = (evt) => {
    evt.preventDefault();
    const account = {};
    account.username = username.value;
    account.password = password.value;
    const post = postNewUser(account);
    if (post) {
        console.log('login success!')
    }
    else {
        console.log('oh no(')
    }
}


form.addEventListener('submit', submitForm);
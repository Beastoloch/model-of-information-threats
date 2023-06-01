const axios = require('axios');
const form = document.querySelector('.form');
const firstAnswer = document.querySelector('#firstOutputBox');
const secondAnswer = document.querySelector('#secondOutputBox');
const infoType = document.querySelector('#informationType');
const role = document.querySelector('#role');

const getPermissions = async (evt) => {
    try {
        const response = await axios.get(role.value);
        return response.data;
    } catch(err) {
        console.error(err.toJSON())
    }
}

const getInfo = async (evt) => {
    try {
        const response = await axios.get(infoType.value);
        return response.data;
    } catch(err) {
        console.error(err.toJSON())
    }
}

const submitForm = (evt) => {
    evt.preventDefault();
    const permissions = getPermissions(evt).permissions;
    const info = getInfo(evt).compositions;
    putAnswer(permissions, info);
}

const putAnswer = (permissions, info) => {
    firstAnswer.value = info;
    secondAnswer.value = permissions.join(', ');
}

form.addEventListener('submit', submitForm);
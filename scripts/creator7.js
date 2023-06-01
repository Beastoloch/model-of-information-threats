const axios = require('axios');
const form = document.querySelector('.form');
const firstAnswer = document.querySelector('#firstOutputBox');
const secondAnswer = document.querySelector('#secondOutputBox');
const realizationMethod = document.querySelector('#realizationMethod');

const postNewRealizationMethod = async (evt) => {
    try {
        const response = await axios.post('/', realizationMethod.value)
        return response.data
    } catch (err) {
        console.error(err.toJSON())
    }
}

const getActualRealizationType = async (evt) => {
    try {
        const response = await axios.get(realizationMethod.value);
        return response.data;
    } catch(err) {
        console.error(err.toJSON())
    }
}

const getRealizationType = async (evt) => {
    try {
        const response = await axios.get(realizationMethod.value);
        return response.data;
    } catch(err) {
        console.error(err.toJSON())
    }
}

const submitForm = (evt) => {
    evt.preventDefault();
    const post = postNewRealizationMethod(realizationMethod);
    const actualRealizationType = getActualRealizationType(realizationMethod).actualType;
    const realizationType = getRealizationType(realizationMethod).type;
    putAnswer(actualRealizationType, realizationType);
}

const putAnswer = (realizationType, actualRealizationType) => {
    firstAnswer.value = actualRealizationType;
    secondAnswer.value = realizationType;
}

form.addEventListener('submit', submitForm);
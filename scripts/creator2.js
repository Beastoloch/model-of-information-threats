const axios = require('axios');
const form = document.querySelector('.form');
const answer = document.querySelector('.output__box');
const definition = document.querySelector('#definition');

const getDefinition = async (evt) => {
    try {
        const response = await axios.get(definition.value);
        return response.data;
    } catch(err) {
        console.error(err.toJSON())
    }
}

const submitForm = (evt) => {
    evt.preventDefault();
    const meaning = getDefinition(evt).meaning;
    putMeaning(meaning);
}

const putMeaning = (meaning) => {
    answer.value = meaning;
}

form.addEventListener('submit', submitForm);
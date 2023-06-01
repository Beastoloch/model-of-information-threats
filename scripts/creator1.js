const axios = require('axios');
const form = document.querySelector('.form');
const answer = document.querySelector('.output__box');
const abbreviation = document.querySelector('#abbreviation');

const getAbbreviation = async (evt) => {
    try {
        const response = await axios.get(evt);
        return response.data;
    } catch(err) {
        console.error(err.toJSON())
    }
}

const submitForm = (evt) => {
    evt.preventDefault();
    const decoding = getAbbreviation(evt).decoding;
    putDecoding(decoding);
}

const putDecoding = (decoding) => {
    answer.value = decoding;
}

form.addEventListener('submit', submitForm);

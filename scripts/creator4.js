const axios = require('axios');
const form = document.querySelector('.form');
const firstAnswer = document.querySelector('#firstOutputBox');
const secondAnswer = document.querySelector('#secondOutputBox');
const threat = document.querySelector('#threatType');

const postNewThreat = async (evt) => {
    try {
        const response = await axios.post('/', threat.value)
        return response.data
    } catch (err) {
        console.error(err.toJSON())
    }
}

const getActualConsequences = async (evt) => {
    try {
        const response = await axios.get(threat.value);
        return response.data;
    } catch(err) {
        console.error(err.toJSON())
    }
}

const getConsequences = async (evt) => {
    try {
        const response = await axios.get(threat.value);
        return response.data;
    } catch(err) {
        console.error(err.toJSON())
    }
}

const submitForm = (evt) => {
    evt.preventDefault();
    const post = postNewThreat(evt);
    const actualConsequences = getActualConsequences(evt).consequences;
    const consequences = getConsequences(evt).consequences;
    putAnswer(actualConsequences, consequences);
}

const putAnswer = (actualConsequences, consequences) => {
    firstAnswer.value = consequences;
    secondAnswer.value = actualConsequences;
}

form.addEventListener('submit', submitForm);
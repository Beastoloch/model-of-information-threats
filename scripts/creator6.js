const axios = require('axios');
const form = document.querySelector('.form');
const intruderCategory = document.querySelector('#intruderCategory');
const intruderPossibility = document.querySelector('#intruderPossibility');
const intruderTarget = document.querySelector('#intruderTarget');
const actualIntruderCategory = document.querySelector('#actualIntruderCategory');
const actualIntruderPossibility = document.querySelector('#actualIntruderPossibility');
const actualIntruderTarget = document.querySelector('#actualIntruderTarget');

const postNewIntruder = async (intruder) => {
    try {
        const response = await axios.post('/', intruder)
        return response.data
    } catch (err) {
        console.error(err.toJSON())
    }
}

const getActualIntruder = async (intruder) => {
    try {
        const response = await axios.get(intruder);
        return response.data;
    } catch(err) {
        console.error(err.toJSON())
    }
}

const submitForm = (evt) => {
    evt.preventDefault();
    const intruder = {};
    intruder.category = intruderCategory.value;
    intruder.possibility = intruderPossibility.value;
    intruder.target = intruderTarget.value;
    const post = postNewIntruder(intruder);
    const actualIntruder = getActualIntruder(intruder);
    putAnswer(actualIntruder);
}

const putAnswer = (actualIntruder) => {
    actualIntruderCategory.value = actualIntruder.category;
    actualIntruderPossibility.value = actualIntruder.possibility;
    actualIntruderTarget.value = actualIntruder.target;
}

form.addEventListener('submit', submitForm);
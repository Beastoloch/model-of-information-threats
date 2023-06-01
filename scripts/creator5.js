const axios = require('axios');
const form = document.querySelector('.form');
const answer = document.querySelector('#firstOutputBox');
const possibleConsequences = document.querySelector('#possibleConsequences');
const actionObject = document.querySelector('#actionObject');
const actionType = document.querySelector('#actionType');
const influenceObject = document.querySelector('#influenceObject');

const postNewThreat = async (newUser) => {
    try {
        const response = await axios.post('/', influenceObject.value)
        return response.data
    } catch (err) {
        console.error(err.toJSON())
    }
}

const getComponentConsequences = async (evt) => {
    try {
        const response = await axios.get();
        return response.data;
    } catch(err) {
        console.error(err.toJSON())
    }
}

const getTable = async (evt) => {
    try {
        const response = await axios.get(possibleConsequences.value);
        return response.data;
    } catch(err) {
        console.error(err.toJSON())
    }
}

const submitForm = (evt) => {
    evt.preventDefault();
    const post = postNewThreat(evt);
    const component = getComponentConsequences(evt).component;
    let table = {};
    table = getTable(evt);
    putAnswer(component, table);
}

const putAnswer = (component, table) => {
    answer.value = component;
    possibleConsequences.value = table.consequences;
    actionObject.value = table.actionObject;
    actionType.value = table.actionType;
}

form.addEventListener('submit', submitForm);
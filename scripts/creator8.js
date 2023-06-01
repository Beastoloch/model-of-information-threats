const axios = require('axios');
const answerBox = document.querySelector('.output__box');

const getAnswer = async (evt) => {
    try {
        const response = await axios.get();
        return response.data;
    } catch(err) {
        console.error(err.toJSON())
    }
}

const typeFinalAnswer = () => {
    const answer = getAnswer();
    putAnswer(answer);
}

const putAnswer = (answer) => {
    answerBox.value = answer;
}

typeFinalAnswer();
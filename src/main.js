const resultBtn = document.querySelector('.dishes__result-button');
const addParticipantBtn = document.querySelector('.dishes__add-participant');

const displayResult = () => { 
    let inputNodeList = document.querySelectorAll('.input-test');
    let personList = [];
    for (let val of inputNodeList) {
        personList.push(val.value);
    }
    let random = getRandomAnswer(personList.length);
    displayName(personList, random);
}

const getRandomAnswer = (numberOfPeople) => {
    let random = Math.floor((Math.random() * numberOfPeople) + 1);
    return random;
}

const displayName = (list, index) => {
    let resultDiv = document.querySelector('.dishes__result');
    resultDiv.innerHTML = list[index-1];
}

const addParticipant = () => {
    const inputFieldsContainer = document.querySelector('.dishes__input-fields');
    const inputFieldsLength = inputFieldsContainer.children.length;
    const inputField = inputFieldsContainer.querySelector('.input-item').cloneNode(true);

    inputField.firstChild.nodeValue = 'Name person ' + (inputFieldsLength+1);
    inputFieldsContainer.appendChild(inputField);
}

resultBtn.addEventListener('click', displayResult);
addParticipantBtn.addEventListener('click', addParticipant);



const resultBtn = document.querySelector('.dishes__result-button');
const addParticipantBtn = document.querySelector('.dishes__add-participant');

const displayResult = () => { 
    let inputNodeList = document.querySelectorAll('.input-field');
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
    document.querySelector('.dishes__countdown').classList.remove('hide');
    document.querySelector('.dishes__result').classList.add('hide');
    let timeleft = 3;
    const downloadTimer = setInterval(function(){
        if(timeleft <= 0){
            clearInterval(downloadTimer);
            document.querySelector('.dishes__countdown').innerHTML = '';
            document.querySelector('.dishes__countdown').classList.add('hide');
            document.querySelector('.dishes__result').classList.remove('hide');
            document.querySelector('.dishes__result').innerHTML = list[index-1];
        } else {
            document.querySelector('.dishes__countdown').innerHTML = 'Displaying result in.. ' + timeleft;
        }
        timeleft -= 1;
    }, 1000);
}

const addParticipant = () => {
    const inputFieldsContainer = document.querySelector('.dishes__input-fields');
    const inputFieldsLength = inputFieldsContainer.children.length;
    const inputField = inputFieldsContainer.querySelector('.input-item').cloneNode(true);  
 
    inputField.querySelector('.input-field').value = '';
    inputField.firstChild.nodeValue = 'Name person ' + (inputFieldsLength+1);
    inputFieldsContainer.appendChild(inputField);
}

resultBtn.addEventListener('click', displayResult);
addParticipantBtn.addEventListener('click', addParticipant);



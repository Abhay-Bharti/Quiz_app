let marks = 0;
let index = 0;

console.log(ques[0]);

const submit = document.querySelector('#submit');

function displayQues(index) {
    const question = document.querySelector('.ques');
    const option1 = document.querySelector('.opt1');
    const option2 = document.querySelector('.opt2');
    const option3 = document.querySelector('.opt3');
    const option4 = document.querySelector('.opt4');

    question.innerHTML = ques[index];
    option1.innerHTML = opt1[index];
    option2.innerHTML = opt2[index];
    option3.innerHTML = opt3[index];
    option4.innerHTML = opt4[index];
}

submit.addEventListener('click', () => {
    const answer = document.querySelector();

    if (index == data.length - 1) {
        const box = document.querySelector('.box');
        box.remove();
        const container = document.querySelector('.questionContainer');
        container.innerHTML = `You Scored ${marks}`;
    }
    index++;
    displayQues(index);
})

displayQues(index);
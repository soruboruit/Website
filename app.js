const question = 'そ、から始まって、る、で終わる人の名前は？';
const answer = [
    'そるほる', 
    'そなみる', 
    'そるぼる', 
    'そぼるる'
];
const correct = 'そるぼる';

document.getElementById('js.question').textContent = question;

const buttons = document.getElementsByTagName('button');
for (let i = 0; i < answer.length; i++) {
    buttons[i].textContent = answer[i];
}
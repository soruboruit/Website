const question = 'そ、から始まって、る、で終わる人の名前は？';
const answer = [
    'そるほる', 
    'そなみる', 
    'そるぼる', 
    'そぼるる'
];
const correct = 'そるぼる';

document.getElementById('js.question').textContent = question;

// 定数の文字列をHTMLに反映させる
const $buttons = document.getElementsByTagName('button');
for (let i = 0; i < answer.length; i++) {
    $buttons[i].textContent = answer[i];
}

// ボタンをクリックしたら正誤判定
const buttons = document.getElementsByTagName('button');
//for文を足して繰り返しのパターン
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
        if (correct === buttons[i].textContent) {
            window.alert('正解！');
        } else {
            window.alert('不正解！');
        }
    });
}
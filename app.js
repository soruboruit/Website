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
$buttons[0].addEventListener('click', () => {
    if (correct === $buttons[0].textContent) { 
       window.alert('正解！'); 
    } else {
        window.alert('不正解！');
    }
});
$buttons[1].addEventListener('click', () => {
    if (correct === $buttons[1].textContent) { 
       window.alert('正解！'); 
    } else {
        window.alert('不正解！');
    }
});
$buttons[2].addEventListener('click', () => {
    if (correct === $buttons[2].textContent) { 
       window.alert('正解！'); 
    } else {
        window.alert('不正解！');
    }
});
$buttons[3].addEventListener('click', () => {
    if (correct === $buttons[3].textContent) { 
       window.alert('正解！'); 
    } else {
        window.alert('不正解！');
    }
});

const quiz = [
    {
        question: 'そ、から始まって、る、で終わる人の名前は？',
        answer: [
            'そるほる', 
            'そなみる', 
            'そるぼる', 
            'そぼるる'
        ],
        correct: 'そるぼる'
    },{
        question: '神奈川大学の2年生、土曜教室に勉強を教えに来ているモテモテ男性は誰だ？',
        answer: [
            'さかてぃ', 
            'びすわす', 
            'びすます', 
            'ひすます'
        ],
        correct: 'びすわす'
    },{
        question: 'ME.netの設立者の一人であり土曜教室のトップ、その人物は誰だ？',
        answer: [
            'たかはし、せいじゅ', 
            'なつき、すばる', 
            'いーろん、ますく', 
            'ばらく、おばま'
        ],
        correct: 'たかはし、せいじゅ'
    },{
        question: 'オルタボイスのサイトやME.netのサイトを一人で作った若き天才ITエンジニアは？',
        answer: [
            '', 
            'そなみる', 
            'そるぼる', 
            ''
        ],
        correct: 'そるぼる'
    },
]

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
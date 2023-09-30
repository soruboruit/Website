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
            'さとる', 
            'いーろん', 
            'はれん', 
            'ばれん'
        ],
        correct: 'ばれん'
    },
];

const $question = document.getElementById('js.question');
const $buttons = document.getElementsByTagName('button');
let quizIndex = 0;
let score = 0;

// クイズを表示する関数
function showQuiz() {
    const currentQuiz = quiz[quizIndex];
    $question.textContent = currentQuiz.question;

    for (let i = 0; i < currentQuiz.answer.length; i++) {
        $buttons[i].textContent = currentQuiz.answer[i];
    }
}

// 初回のクイズ表示
showQuiz();

// ボタンをクリックしたら正誤判定と次のクイズ表示
for (let i = 0; i < $buttons.length; i++) {
    $buttons[i].addEventListener('click', () => {
        const currentQuiz = quiz[quizIndex];
        if (currentQuiz.correct === $buttons[i].textContent) {
            window.alert('正解！');
            score++;
        } else {
            window.alert('不正解！');
        }

        // 次のクイズへ移動
        quizIndex++;
        if (quizIndex < quiz.length) {
            showQuiz();
        } else {
            window.alert('クイズ終了！あなたの正解数は' + score + '/' + quiz.length + 'です！');
        }
    });

    
}




//変数
/*
let name ="soru";
console.log(name);//出力結果：soru
 name = "riru";
 console.log(name);//出力結果：riru
*/

 //定数

 //一つの定数に複数の値を入れるには　[]　を使います。

/*
 const $name ="soru";
 console.log($name); //出力結果：soru
 $name ="riru"; //　エラー！　定数は一度代入された値を更新することができない！
*/

//文字列の中で＄{定数}とすることで、文字列の中に定数や変数を含めることができます。
/*
const name = "soruhaha";
console.log(`${name}です`);
*/

//if文

//if文を用いると「もし○○ならば●●を行う」という条件分岐が可能になります。ifの後ろに条件式を書き、それが「成り立つ」場合の処理を{ }の中に書きます。
/*
const number = 12;

if (number > 10) {
   console.log('numberは10より大きいです') ;
}
*/

//if文に「else」を組み合わせると「もし〇〇なら●●を行う、そうでなければ■■を行う」という処理ができるようになります。
//if文の条件がfalseの場合、elseの処理が実行されます。

//かつまたはの使い方
/*
// 3通りのオブジェクト型データ（仕事）
// 条件A：儲かる。　条件B:楽。
var job_a = { moukaru : true , raku : true };
var job_b = { moukaru : true , raku : false };
var job_c = { moukaru : false , raku : false };

// 3通りのデータをそれぞれ条件判定するためのメソッド
function sigotoSagashi( job ) {
  if( job.moukaru && job.raku ){
    console.log("A かつ B の場合、最高です！");
  } else if( job.moukaru || job.raku ){
    console.log("A または B なら、はたらきたいです！");
  } else if( !job.moukaru && !job.raku ){
    console.log("どちらも満たさないのはいやです！");
  }
}

// 実際のメソッド実行部分
sigotoSagashi( job_a );
sigotoSagashi( job_b );
sigotoSagashi( job_c );
*/

//switch文
/*
const n = 4;

switch (n) {
  case 1:
    console.log("大吉です");
    break;
  case 2:
    console.log("吉です");
    break;
  case 3:
    console.log("小吉です");
    break;
  // どのcaseにも合致しなかったときの処理を追加してください
  default:
    console.log("凶です");
    break;
}
*/
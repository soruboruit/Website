//while文
/*
繰り返し処理を行うためにはwhile文というものを用います。
whileとは「～の間」という意味の英語です。
while文は下の図のように書き、「条件式がtrueの間、{ }内の処理を繰り返す」ことができます。 {}の後にセミコロンは不要です。
*/
/*
let number = 1;
while (number <= 100) {
  console.log(number);
  number += 1;
}
*/

//for文
//繰り返し処理を行う方法として、while文以外にもfor文というものがあります。できることはwhile文と同じですが、while文に比べてシンプルに書くことができるのが特徴です

//if文とfor文を使ったコード　３の倍数と100までの数字
/*
for (let number = 1; number<=100; number++) {
  
  // if文を用いて、numberが3の倍数の時に「3の倍数です」、そうでないときは数字を出力してください
  if (number % 3 === 0) {
    console.log("3の倍数です");
  } else {
    console.log(number);
  }
  
}
*/

//配列

//lengthを用いれば、前の演習のfor文の条件式を右の図のように書き換えることができます。配列の要素数が変わっても問題なく繰り返すことができるので便利です。

//オブジェクト　
// progressing object
//オブジェクト２ 
//progate to learning SQL lessons
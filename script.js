 'use strict';

const answer1 = "かものはシロー"; // 正解（例）
const answer2 = "ちらかシロー";
const answer3 = "かいとよシロー";

 const button0 = document.getElementById("totoi11");
 if (button0) {
 button0.addEventListener("click", () => {

  localStorage.setItem("score", 1);
  location.href = 'index2.html';
 });
}


let score = Number(localStorage.getItem("score")) || 0;

const button11 = document.getElementById("checktoi11");
 if (button11) {
 button11.addEventListener("click", () => {
  const input = document.getElementById("toyo11").value;
  if (input === answer1) {
    score += 33; 
    document.getElementById("score").textContent = score;
   console.log('+10');
    localStorage.setItem("score", score); // ← 保存
  } else {
   console.log('0');
  }
  location.href = 'index3.html';
 });
}


const button12 = document.getElementById("checktoi12");
 if (button12) {
 button12.addEventListener("click", () => {
  const input = document.getElementById("toyo12").value;
  if (input === answer2) {
    score += 33; 
    document.getElementById("score").textContent = score;
   console.log('+10');
    localStorage.setItem("score", score); // ← 保存
  } else {
   console.log('0');
  }
  location.href = 'index4.html';
 });
}

const button13 = document.getElementById("checktoi13");
 if (button13) {
 button13.addEventListener("click", () => {
  const input = document.getElementById("toyo13").value;
  if (input === answer3) {
    score += 33; 
    document.getElementById("score").textContent = score;
   console.log('+10');
    localStorage.setItem("score", score); // ← 保存
  } else {
   console.log('0');
  }
  location.href = 'index5.html';
 });
}

function check11() {
    
  document.querySelector('.toi').style.display = 'none';
  document.querySelector('.kaito').style.display = 'block';

if (score >=1){
    if(score<=34){
     document.getElementById("itimon").textContent = "今回君が正解したのは一問だ。EXは答え合わせをしないからリンクを保存して何度でも挑戦してみよう！";
    }
}

if (score >=35){
    if(score<=67){
     document.getElementById("nimon").textContent = "惜しい！今回君は2問正解した。あと一問の場所は見当がついているのかな？もう一度挑戦しよう！";
    }
}

if (score >=68){
    if(score<=100){
        document.getElementById('manten').textContent = "おめでとう！ついに全問正解だ！ここまでたどり着くのにどれほどの時間がかかったかと思うと恐ろしいよ。第三回目は結果掲示板の工夫などに取り組んでいくよ！";
    }
}

}

document.getElementById("result").textContent =  score + "点";

const share_title = `とよシローなにシロークイズ２EX${score}点でした。`;
  const share_twitter = document.getElementById("js-share-twitter");
  share_twitter.setAttribute(
      "href",
      "https://twitter.com/share?url=" + "https://jundouxibei-web.github.io/tomisiropremium.-.104460/" + "&text=" + share_title + "&hashtags=とよシローなにシロークイズ"
  );




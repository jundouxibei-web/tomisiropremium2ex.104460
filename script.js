 'use strict';

const answer1 = "かものはシロー"; // 正解（例）
const answer2 = "ちらかシロー";
const answer3 = "かいとよシロー";

 const button0 = document.getElementById("totoi11");
 if (button0) {
 button0.addEventListener("click", () => {

  localStorage.setItem("score2ex", 1);
  location.href = 'index2.html';
 });
}


let score2ex = Number(localStorage.getItem("score2ex")) || 0;

const button11 = document.getElementById("checktoi11");
 if (button11) {
 button11.addEventListener("click", () => {
  const input = document.getElementById("toyo11").value;
  if (input === answer1) {
    score2ex += 33; 
    document.getElementById("score2ex").textContent = score2ex;
   console.log('+10');
    localStorage.setItem("score2ex", score2ex); // ← 保存
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
    score2ex += 33; 
    document.getElementById("score2ex").textContent = score2ex;
   console.log('+10');
    localStorage.setItem("score2ex", score2ex); // ← 保存
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
    score2ex += 33; 
    document.getElementById("score2ex").textContent = score2ex;
   console.log('+10');
    localStorage.setItem("score2ex", score2ex); // ← 保存
  } else {
   console.log('0');
  }
  location.href = 'index5.html';
 });
}

function check11() {
    
  document.querySelector('.toi').style.display = 'none';
  document.querySelector('.kaito').style.display = 'block';

if (score2ex >=1){
    if(score2ex<34){
     document.getElementById("zeromon").textContent = "残念！今回は一問も正解していないみたい！EXは答え合わせをしないからリンクを保存して何度でも挑戦してみよう！";
    }
}



if (score2ex >1){
    if(score2ex<=34){
     document.getElementById("itimon").textContent = "今回君が正解したのは一問だ。EXは答え合わせをしないからリンクを保存して何度でも挑戦してみよう！";
    }
}

if (score2ex >=35){
    if(score2ex<=67){
     document.getElementById("nimon").textContent = "惜しい！今回君は2問正解した。あと一問の場所は見当がついているのかな？もう一度挑戦しよう！";
    }
}

if (score2ex >=68){
    if(score2ex<=100){
        document.getElementById('manten').textContent = "おめでとう！ついに全問正解だ！ここまでたどり着くのにどれほどの時間がかかったかと思うと恐ろしいよ。第三回目は結果掲示板の工夫などに取り組んでいくよ！";
    }
}

}

document.getElementById("result").textContent =  score2ex + "点";

const share_title = `とよシローなにシロークイズ２EX${score2ex}点でした。`;
  const share_twitter = document.getElementById("js-share-twitter");
  share_twitter.setAttribute(
      "href",
      "https://twitter.com/share?url=" + "" + "&text=" + share_title + "&hashtags=とよシローなにシロークイズ2ex"
  );




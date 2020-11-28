// querySelectors ----> // this is where variables begin --->

var startBox = document.querySelector("#startbox");
var startBtn = document.querySelector("#startBtn");
var question1 = document.querySelector("#question1");
var question2 = document.querySelector("#question2");
var question3 = document.querySelector("#question3");
var question4 = document.querySelector("#question4");
var question5 = document.querySelector("#question5");
var button1 = document.querySelector("#button1");
var button2 = document.querySelector("#button2");
var button3 = document.querySelector("#button3");
var button4 = document.querySelector("#button4");
var button5 = document.querySelector("#button5");
var highscoreForm = document.querySelector("#highscore");
var score = document.querySelector("#score");
var yourscore = document.querySelector("#yourscore");
var nametext = document.querySelector("#nametext");
var playerList = document.querySelector("#player-list");
var highscoresBox = document.querySelector("#highscoresbox");
var scoresgo = document.querySelector("#highscoresBtn");
var quizback = document.querySelector("#quizback");
var scores = document.querySelector("#scores");
var timer = document.querySelector("#timer");

// this is where variables begin --->

var players = "";
var vari = "";
var code = "";
var css = "";
var jason = "";
var tag = "";

var sec = 120;
var time = "";

// this is where functions begin ---> 

function tryagain(){
  location.replace("index.html");
};


function start(){
  startBox.setAttribute("style", "display: none;");
  question1.setAttribute("style", "display: block;");
  
};

function getSaved(){
 var scoreSave = JSON.parse(localStorage.getItem("scoreSaved"));  
 if (scoreSave !== null){
    players = scoreSave;
  }
  renderScore();
};

function renderScore(){  
  playerList.innerHTML = "";  
  for (var i = 0; i < players.length; i++) {
    var player = players[i];  

    var li = document.createElement("li");
    li.textContent = player;      
    li.setAttribute("data-index", i);   

    playerList.appendChild(li);      
  }
  saveScore();
}

function saveScore(){  
  if (players !== null){
      localStorage.setItem("scoreSaved", JSON.stringify(players));
  };
};

function getScore(){ 
  var scoretotal = ""; 
  scoreAdd = parseFloat(vari) + parseFloat(code) + parseFloat(css) + parseFloat(jason) + parseFloat(tag);      
  var scoretotal = scoreAdd;
  console.log(scoretotal); 
  score.textContent = scoretotal;
};

function myTimer() {
  var interval = setInterval(function () {    
  timer.innerHTML = sec + " seconds left";
  sec--;    
  if (sec == -1) {
      clearInterval(interval);
      alert("Time out!!");
      tryagain();        
  }else if ( yourscore.style.display === "block"){
      clearInterval(interval);
  }
  }, 1000); 
};      

// this is where event listeners begin ---> example for console log = console.log(" ");

getSaved();

startBtn.addEventListener("click", function(event){
    event.preventDefault();
    scores.setAttribute("style","display: none;")    
    start();
    myTimer();    
});

button1.addEventListener("submit", function(event){
    event.preventDefault();
    vari = parseInt(document.querySelector('input[name = "vari"]:checked').value);
    console.log(vari);
    if (vari > 0){
        sec++;
    } else if (vari === 0) {
        sec--;
    }
    question1.setAttribute("style", "display: none;");
    question2.setAttribute("style", "display: block;");
});

button2.addEventListener("click", function(event){
    event.preventDefault();
    vari = parseInt(document.querySelector('input[name = "vari"]:checked').value);
    console.log(vari);
    if (vari > 0){
        sec++;
    } else if (vari === 0) {
        sec--;
    }
    question2.setAttribute("style", "display: none;");
    question3.setAttribute("style", "display: block;");
});

button3.addEventListener("click", function(event){
  vari = parseInt(document.querySelector('input[name = "vari"]:checked').value);
  console.log(vari);
  if (vari > 0){
      sec++;
  } else if (vari === 0) {
      sec--;
  }
    question3.setAttribute("style", "display: none;");
    question4.setAttribute("style", "display: block;");
});

button4.addEventListener("click", function(event){
  vari = parseInt(document.querySelector('input[name = "vari"]:checked').value);
  console.log(vari);
  if (vari > 0){
      sec++;
  } else if (vari === 0) {
      sec--;
  }
    question4.setAttribute("style", "display: none;");
    question5.setAttribute("style", "display: block;"); 
});

button5.addEventListener("click", function(event){
  vari = parseInt(document.querySelector('input[name = "vari"]:checked').value);
  console.log(vari);
  if (vari > 0){
      sec++;
  } else if (vari === 0) {
      sec--;
  }
  question5.setAttribute("style", "display: none;");
}); 

scoresgo.addEventListener("click", function(event){
    getSaved();
    event.preventDefault();
});

quizback.addEventListener("click", function(event){
    event.preventDefault();
});


highscoreForm.addEventListener("submit", function(event) {
    event.preventDefault();    
    var name = nametext.value.trim();    
    if (name === "") {
        return;
    } else {
    players.push(name + " score: " + scoreAdd);
    nametext.value = "";
    alert("Player Saved!")    
    saveScore();
    renderScore();
    };    
});
saveScore();
renderScore();

// This is where functions begin //

function hide(element) {
  element.style.display = "none";
};

function reveal(element) {
  element.style.display = "block";
};

function correct() {
  outcome.textContent = "correct!";
  reveal (outcome);
  score += 5; 
};

function correct() {
  outcome.textContent = "Wrong.";
  reveal (outcome);
  score -= 10; 
  score -= 3;
};

function setOptions() {
  var answerReset = [];
  for (var i = 0; i < options.length; i++){
  var answersArr = allQuestions[questionCount][-1].answers;
  var randomIndex = Math.floor(Math.random()* answersArr.length);
  options[i].childern[1].textContent = answersArr[randomIndex];
  answerReset.push(answersArr.splice(randomIndex, 1));

  
};
for (var i = 0; i<answerReset.length; i++) {
  var answersArr = allQuestions[questionCount - 1 ]. answers;
  answersArr[answersArr.length] = answerReset[i];
};



};

//// Start Button ----> 

$(function(){
    $("#button-start").click(game.start);
});


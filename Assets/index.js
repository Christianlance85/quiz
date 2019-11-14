var questions = [
    {
        title: "There are four parts to a box model. Which of these is NOT a member?",
        choices: ["padding", "border", "position", "margin"],
        answer: "position"
    },
    {
        title: "What special character is used at the end of a function?",
        choices: ["}", "!", "//", "-"],
        answer: "}"
    },
    {
        title: "A 'confirm' statement gives you a ______ result.",
        choices: ["true", "array", "boolean", "squiggly bracketed"],
        answer: "boolean"
    },
    {
        title: "In this for loop, if you wanted add one each loop through you would use what in the blank?: for (var i = 0; i < vegetables.length; ___ )",
        choices: ["i++", "+=", "/", "==="],
        answer: "i++"
    },
    {
        title: "In this array: var animals = [bats, birds, bees, pigs]; which one is the index of [4]? ",
        choices: ["bats", "birds", "bees", "none of the above"],
        answer: "none of the above"
    },


];

console.log(questions);


function startquiz() {


  let btn = document.getElementById("startbtn");

  btn.style.display = "none";

  let landpg = document.getElementById("startpg");

  landpg.style.display = "none";


  let quiz = document.getElementById("quizboard");
  quiz.style.display = "block";
  writeButton()
  timer()
}
let timeInterval
let questionPostion = 0
let timeLeft = questions.length * 15
let domTime = document.getElementById('timer')

function writeButton() {
  document.getElementById('actualQuestion').textContent = questions[questionPostion].title
  for (let i = 0; i < 4; i++) {
    let currentButton = document.getElementById('btn' + i)
    currentButton.textContent = questions[questionPostion].choices[i]
    currentButton.onclick = function () { clicked(questions[questionPostion].choices[i]) }
  }
}
function endGame() {
  document.getElementById('actualQuestion').innerHTML = '<h2>Congratulations, you finished!</h2><br> Your final score: ' + timeLeft
  document.getElementById('actualQuestion').setAttribute("style", "font-size: 24px;");
  document.getElementById('answerBtns').innerHTML = 'Enter Initials <input type="text" name="initials" placeholder="Initials" id= "grabInitials"> <button id="submitInitials" type="button" onclick = "scoreResults() "> SUBMIT</button>'
  document.getElementById('answerBtns').setAttribute("style", "border-radius: 10px; color:black; padding: 25px; font-size: 30px; text-align: center; font-family: sans-serif;");
 
}

function clicked(answer) {
  console.log(answer)
  if (answer === questions[questionPostion].answer) {
    console.log('correct')

  }

  else {
    console.log('wrong')
    timeLeft = timeLeft - 10;
  }

  questionPostion++
  if (questionPostion === questions.length) {
    clearInterval(timeInterval)
    console.log('your score= ' + timeLeft)
    endGame()
  }
  else {
    writeButton()

  }
}

function timer() {
  timeInterval = setInterval(function () {
    timeLeft--;

    domTime.textContent = 'Seconds left: ' + timeLeft
    if (timeLeft === 0) {
      clearInterval(timeInterval)
      console.log('out of time')
      
    }

  }, 1000);
}


//this is the function that will create local storage for highscore
function scoreResults() {
  // grab user name
  let user = document.getElementById("grabInitials").value;
  // grab highscore
  let score = timeLeft;
  // grab past highscores and users names/Object
  let scoreList = localStorage.getItem("scoreList");
  // current score and name in object    
  console.log(user);
  console.log(score);
  if (scoreList == null) {
    scoreList = {};
  }
  else {
    scoreList = JSON.parse(scoreList);
  }
  //save to local storage
  scoreList[user] = score;
  localStorage.setItem("scoreList", JSON.stringify(scoreList));
  console.log(scoreList);
  
  displayScore()
  }

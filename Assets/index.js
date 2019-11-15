let time = document.getElementById('timer');
let secondsLeft = 75;
let startBtn = document.querySelector('#start');
let startP = document.querySelector('.startPage');
let one = document.querySelector('.one');
let title = one.querySelector('h1');
one.style.display = 'None';
let i = 0;
let buttons = one.querySelectorAll('button');
let username = document.querySelector('#name');
username.style.display = 'None';
let submit = document.querySelector('#submit');
let timerInterval;
let finalScore = username.querySelector('h5');
let list = document.querySelector('#highScoresList');
let highScores = [];
let uname = document.querySelector('input').value;

let questions = [
  {
    title: 'Commonly used data types DO NOT include:',
    choices: ['strings', 'booleans', 'alerts', 'numbers'],
    answer: 'alerts'
  },
  {
    title: 'The condition in an if / else statement is enclosed within ____.',
    choices: ['quotes', 'curly brackets', 'parentheses', 'square brackets'],
    answer: 'parentheses'
  },
  {
    title: 'Inside which HTML element do we put the javascript?',
    choices: ['js', 'script', 'javascript', 'scripting'],
    answer: 'script'
  },
  {
    title: 'What is the correct syntax for referring to an external script called "xxx.js"?',
    choices: ['<script src= "xxx.js"', '<script href= "xxx.js"', '<script name= "xxx.js"', 'none of the above'],
    answer: '<script src= "xxx.js"'
  },
  {
    title: 'How do you write "Hello World" in an alert box?',
    choices: ['msg("Hello, World");', 'msgBox("Hello, World");', 'alert("Hello, World");', 'alertBox("Hello, World");'],
    answer: 'alert("Hello, World");'
  }
];

function setTime() {
  timerInterval = setInterval(function () {
    secondsLeft--;
    time.textContent = 'timer ' + secondsLeft;

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
    }
  }, 1000);
}


startBtn.addEventListener('click', function () {
  one.style.display = 'block';
  let q = questions[i];
  title.innerHTML = q['title'];
  let j = 0;
  buttons.forEach(function (btntxt) {
    btntxt.innerText = q['choices'][j];
    j += 1;
  });

  setTime();
  startP.style.display = 'none';
  one.style.display = 'inline';
});

function displayQuestion() {
  i++;
  let q = questions[i];
  title.innerHTML = q['title'];
  let j = 0;
  buttons.forEach(function (btntxt) {
    btntxt.innerText = q['choices'][j];
    j += 1;
  });

}

function lastPage() {
  clearInterval(timerInterval);
  one.style.display = 'none';
  username.style.display = 'block';
  finalScore.textContent = 'Your final score is: ' + time.textContent;  
}


buttons.forEach(function (btn) {
  btn.addEventListener('click', function () {
    let q = questions[i];
    if (i == questions.length - 1 && btn.textContent == q['answer']) {
      time.textContent = secondsLeft - 0
      lastPage()
    }
    if (i == questions.length - 1 && btn.textContent != q['answer']) {
      time.textContent = secondsLeft - 15;
      lastPage()
    }

    else if (btn.textContent != q['answer']) {
      secondsLeft -= 15;
      displayQuestion()
    }

    else if (btn.textContent == q['answer']) {
      displayQuestion()
    }


  });
});



submitInitials.addEventListener('click', function () {
  let uname = document.querySelector('input').value;
  localStorage.setItem('name', JSON.stringify (uname));
  localStorage.setItem('score', JSON.stringify (time.textContent));
  let li = document.createElement("li");
  li.textContent = uname + ' Score: ' + time.textContent;
  list.appendChild(li);

});
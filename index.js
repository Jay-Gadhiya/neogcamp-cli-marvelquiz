// import
let readlineSync = require('readline-sync');
let chalk = require('chalk');

// high score logic
const highScorers = [
  {
    name: "Thor",
    score: 8
  },
  {
    name: "Loki",
    score: 8
  }
]

const levelOneQuestions = [
  {
    question: "What year was the first Iron Man movie released, kicking off the Marvel Cinematic Universe?",
    answer: "2008",
    options: ["2005", "2008", "2010", "2012"]
  },
  {
    question: "What is the name of Thor’s hammer?",
    answer: "Mjolnir",
    options: ["Mjolnir", "vanir", "aesir", "norn"]
  },
  {
    question: "What is Captain America’s shield made of?",
    answer: "vibranium",
    options: ["adamantium", "promethium", "vibranium", "carbonadium"]
  },
  {
    question: "What is the name of the little boy Tony befriends while stranded in the Iron Man 3?",
    answer: "henry",
    options: ["Harry", "Henry", "Holden", "Harley"]
  },
  {
    question: " Before becoming Vision, what is the name of Iron Man’s A.I. butler?",
    answer: "J.A.R.V.I.S",
    options: ["H.O.M.E.R", "J.A.R.V.I.S", "A.L.F.R.E.D", "M.A.R.V.I.N"]
  },
  {
    question: "What is the real name of the Black Panther?",
    answer: "TChalla",
    options: ["TChalla", "Mbaku", "NJadaka", "Njobu"]
  },
]

// Level2
const levelSecondQuestions = [
  {
    question: "What is the alien race Loki sends to invade Earth in The Avengers?",
    answer: "The Chitauri",
    options: ["The Chitauri", "The Skrullls", 'The Kree', 'The Flerkens']
  },
  {
    question: "Who was the last holder of the Space Stone before Thanos claims it for his Infinity Gauntlet?",
    answer: "Loki",
    options: ["Thor", "Loki", "The Collector","Tony stark"]
  },
 
]

// Level3
const levelThreeQuestions = [
  {
    question: " What fake name does Natasha use when she first meets Tony?",
    answer: "Natalie",
    options: ["Natalie", "Natalia", "Nicole","Naya"]
  },
  {
    question: "About which city do Hawkeye and Black Widow often reminisce?",
    answer: "Budapest",
    options: ["Budapest", "Prague", "Istanbul","Sokovia"]
  }
]

// add score
let score = 0;

// Check for high Score
function CheckhighScore(name, score) {
  // console.log("High Score in Calling....");
  for (let i = 0; i < highScorers.length; i++) {
    if (score > highScorers[i].score) {
      // console.log("Pushed to high score");
      highScorers.push({ name: name, score: score });
      break;
    }
  }
}

// this function ask questions, check answers and update score.
function askQuestion(question, answer, options) {
  if (options) {
    let ask = readlineSync.keyInSelect(options, chalk.blue.underline.bold(question));
    checkAnswer(options[ask], answer);
  } else {
    let ask = readlineSync.keyInYN(question);
    checkAnswer(ask, answer);
  }
}

function checkAnswer(answer, actualAnswer) {
  if (answer === actualAnswer) {
    score = score + 1;
    console.log(chalk.bgGreen.bold(answer), chalk.bgGreen.bold("Right Woohooo:)"));
  } else {
    console.log(chalk.bgRed.bold(answer), chalk.bgRed.bold("Wrong:("));
  }
}

// this function adjust level 
function setLevel(levelArray) {
  for (let i = 0; i < levelArray.length; i++) {
    let current = levelArray[i];
    askQuestion(current.question, current.answer, current.options);
    console.log("Your score is: ", score);
  }
}

// Carrier program
const userName = readlineSync.question("Enter Your Name: ");

if (score < 5) {
  setLevel(levelOneQuestions);
  if (score >= 5) {
    console.log(chalk.black.bgMagenta.bold("Congratulations! You Unlock Level 2: "))
    setLevel(levelSecondQuestions);
    if (score >= 8) {
      console.log(chalk.black.bgMagenta.bold("Congratulations! You Unlock Level 3: "))
      setLevel(levelThreeQuestions);
    }
  }
}

CheckhighScore(userName, score);

// Print HighScores
console.log("-------- High Scores: ---------");
for (let i = 0; i < highScorers.length; i++) {
  console.log("Name:", highScorers[i].name, ", Score: ", highScorers[i].score);
}
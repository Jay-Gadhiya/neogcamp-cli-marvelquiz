
var readlineSync = require('readline-sync');

//Questions
var questions = [{
  Question :  `What year was the first Iron Man movie released, kicking off the Marvel Cinematic Universe?  
  a. 2005 
  b. 2008
  c. 2010 
  d.2012
  Answer :  `,
  Answer : "b"
}, 

{
  Question :  `What is the name of Thor’s hammer?  
  a. Vanir
  b. Mjolnir
  c. Aesir 
  d.Norn
  Answer :  `,
  Answer : "b"
},

{
  Question : ` What is Captain America’s shield made of?  
  a. Adamantium 
  b. Promethium 
  c. Vibranium
  d.Carbonadium
  Answer :  `,
  Answer : "c"
},

{
  Question :  `What is the name of the little boy Tony befriends while stranded in the Iron Man 3?  
  a. Harry
  b. Henry
  c. Holden 
  d.Harley
  Answer :  `,
  Answer : "d"
},

]


// play function
function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if(userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("Right!");
    score += 1;
  }

  else {
    console.log("Wrong!");
    score -= 1;
  }

  console.log(`Current score : ${score}`);
}


//High score function
const highScore = [
{
  name : "raju",
  score : 9
},

{
  name : "baburav",
  score : 8
}
]

function checkHighScore(score, name) {
  for(var i = 0; i < highScore.length; i++){
    if(highScore[i].score < score){
      console.log('congratulations you are on high score board');
      highScore.push({name:name, score : score});
      break;
    }
  }
}

//main
var userName = readlineSync.question("May i have your name? ");

var score = 0;
console.log(`Welcome ${userName} DO YOU KNOW Marvel? `);
console.log( " ");
console.log( " ");


// call function
for(var i = 0; i< questions.length; i++) {
  var curruntQuestion = questions[i];

  play(curruntQuestion.Question, curruntQuestion.Answer);
  console.log( " ");
  
}

console.log(`Your Final Score Is ${score}`);
console.log( " ");
console.log( " ");

checkHighScore(score, userName);

for(var i = 0; i<highScore.length; i++) {
  console.log("----------HIGH SCORE BOARD----------");
  console.log("Name : ", highScore[i].name);
  console.log("Score : ", highScore[i].score);
  console.log("-----------------------------------------------------");


}
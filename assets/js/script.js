//Declaring var for manipulation 
var init = document.getElementById("initial-page"); 
var QUIZtimer = document.getElementById("timer"); 
var startQuizButton = document.getElementById("startbtn"); 
var HIghscoreButton = document.getElementById("Highscorebtn"); 
var QuizSTART = document.getElementById("QUIZ-start "); 
var QuestionBox = document.getElementById("question-placeholder"); 
var RESULT = document.getElementById("result"); 
var Confirmanswer = document.getElementById("answercheck"); 
var GameOver = document.getElementById("gameover"); 
var FinalSCORE = document.getElementById("FinalScore"); 
var FinalSCOREinitials = document.getElementById("initials"); 
var SubmitButton = document.getElementById("SubBtn"); 
var SCOREcontainer = document.getElementById("score-container"); 
var ScorePage= document.getElementById("score-page"); 
var Highscoreheader = document.getElementById("highscore-header"); 
var EndGame = document.getElementById("endgameBtn"); 
var ReplayButton = document.getElementById("Replay"); 
var HighScoreReset = document.getElementById("Highscore-Reset"); 
//Function for buttons 
var buttonA = document.getElementById("A");
var buttonB = document.getElementById("B");
var buttonC = document.getElementById("C");
var buttonD = document.getElementById("D");


//Quiz Questions and Answer for code and computer 
var quizQuestions = 
[ {
            question: "What does HTML stand for ?",
            choiceA:  "Hyper Trainer Marking Language",
            choiceB:  "Hyper Text Marketing Language",
            choiceC:  " Hyper Text Markup Language",
            choiceD:  "Hyper Text Markup Leveler",
            correctAnswer: "C"},
        {
            question: "Which of the following is the correct way to use the standard namespace in C++?",
            choiceA:  "Using namespace std; ",
            choiceB:  "Using namespace standard; ",
            choiceC:  "Using standard namespace; ",
            choiceD:  "Standard namespace used; ",
            correctAnswer: "A"},
        {
            question: "Who is making the Web standards ?",
            choiceA:  "Google",
            choiceB:  "Microsoft",
            choiceC:  "The World Wide Web Consortium",
            choiceD:  "Mozilla",
            correctAnswer: "C"},
        {
            question: "How can you make a numbered list ?",
            choiceA:  "<list>",
            choiceB:  "<ol>",
            choiceC:  "<ul>",
            choiceD:  "<dl>",
            correctAnswer: "B"},
            {
            question: "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
            choiceA:  "src",
            choiceB:  "longdesc",
            choiceC:  "alt",
            choiceD:  "title",
            correctAnswer: "C"},

];

//Global variable declaration 
var currentQuestionIndex = 0; 
var timeLeft = 60; 
var timerInterval; 
var score = 0;
var correct; 
var finalQuestionIndex = quizQuestions.length;


//For timer 
timerInterval = setInterval(function(){
    timeLeft--;
    QUIZtimer.textContent="Time left:" +timeLeft;

    if(timeLeft === 0) {
        clearInterval(timerInterval);
        showScore();
    }
    }, 1000);
    QuizSTART.style.display = "block"; 

// Function for the end page screen which display your score (timer run out or quiz completion )
function showScore(){
    QuizSTART.style.display = "none"
    GameOverDiv.style.display = "flex"
    clearInterval(timerInterval);
    FinalSCOREinitials.value = "";
    FinalSCORE.innerHTML = "Your score is" +quizQuestions.length ; 
}

// run the function highscore to save and push from the local storage
 SubmitButton.addEventListener("click",function Highscore(){
//Equals in nave and value
    if(FinalSCOREinitials.value === "") {
        alert("Initials may not be blank at all times");
        return false;
    } else {
        var savedHighscores = JSON.parse(localStorage.getItem("saved-Highscores")) || [];   
        var currentUser = FinalSCOREinitials.value.trim();
        var currentHighscore = {
            name : currentUser,
            score : score
        };
        GameOverDiv.style.display = "none";
        SCOREcontainer.style.display = "flex";
        ScorePageDiv.style.display = "block";
        EndGame.style.display = "flex";
        
        savedHighscores.push(currentHighscore);
        localStorage.setItem("savedHighscores", JSON.stringify(savedHighscores));
        generateHighscores();

    }
    
});

    
    
 


//function for checking the response for each answer 

function checkanswer(answer){
    correct = quizQuestions[currentQuestionIndex].correctAnswer; 

//using if and else if function for loop 
    if (answer === correct && currentQuestionIndexb !== finalQuestionIndex){
        score++; 
        //notify user (alert)
        alert("This is correct")
        currentQuestionIndex++;
        generateQuizQuestion();
        // if the answer is correct notify the user.
    } else if (answer !== correct && currentQuestionIndex !== finalQuestionIndex){
        //notify user for incorrect
        alert ("This is incorrect")
        currentQuestionIndex++;
        generateQuizQuestion();
        // Will be notifying user when the answer is wrong. 
    }else{
        showScore(); 
    } 
}

//button for initiation 
startQuizButton.addeventListener("click", startQuizButton); 
















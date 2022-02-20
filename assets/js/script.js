//Declaring var 







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
















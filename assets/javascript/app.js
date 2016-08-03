
var questions = [{
    question: "Which of the following is a subset of  {b, c, d}?",
    choices: ["{}", "{a}", "{1,2,3}", "{a,b,c}"],
    correctAnswer:0
}, {
    question: "The value of 5 in the number  357.21 is ?",
    choices: ["tenths", "ones", "tens", "hundreds"],
    correctAnswer: 2
}, {
    question: "3 4/5 expressed as a decimal is ?",
    choices: ["3.40", "3.45", "3.50", "3.80"],
    correctAnswer: 3
}, {
    question: "Which of the following is the Highest Common Factor of 18, 24 and 36?",
    choices: ["6", "18", "36", "72"],
    correctAnswer: 0
}, {
    question: "How many subsets does the set {a, b, c, d, e} have?",
    choices: ["2", "5", "10", "32"],
    correctAnswer: 3
}];

var currentQuestion = 0;
var correctAnswers = 0;
var quizOver = false;
var j=30;




    function displayCurrentQuestion() {

    console.log("In display current Question");

    var question = questions[currentQuestion].question;
    var questionClass = $(document).find(".container > .question");
    var choiceList = $(document).find(".container > .answers");
    var numChoices = questions[currentQuestion].choices.length;
    $(questionClass).text(question);
    $(choiceList).find("li").remove();

    var choice;
    for (i = 0; i < numChoices; i++) {
        choice = questions[currentQuestion].choices[i];
        $('<li><input type="radio" value=' + i + ' name="dynradio" />' + choice + '</li>').appendTo(choiceList);
    }
}

function resetQuiz() {
    currentQuestion = 0;
    correctAnswers = 0;
    hideScore();
}

function displayScore() {
    $(document).find(".container > .result").text("You scored: " + correctAnswers + " out of: " + questions.length);
    $(document).find(".container > .result").show();
}

function hideScore() {
    $(document).find(".result").hide();
}


function startTimer() {
    var countdownTimer = setInterval(function () {
        $(".timer").html("Time Remaining: " + j + " Seconds");
        j = j - 1;
        if (j < 0) {
            clearTimeout(countdownTimer);
                alert("TIMES UP!");
            quizOver = false;
            $(document).find(".nextButton").text("Next Question");
            resetQuiz();
            displayCurrentQuestion();
            hideScore();
            j=30;
        }
    }, 1000);
}




$(document).ready(function () {
    displayCurrentQuestion();
    startTimer();
    $(this).find(".message").hide();


    $(this).find(".nextButton").on("click", function () {
        if (!quizOver) {

            var value = $("input[type='radio']:checked").val();

            if (value == undefined) {
                $(document).find(".message").text("Please select an answer");
                $(document).find(".message").show();
            } else {
                $(document).find(".message").hide();

                if (value == questions[currentQuestion].correctAnswer) {
                    correctAnswers++;
                }

                currentQuestion++;
                if (currentQuestion < questions.length) {
                    displayCurrentQuestion();
                } else {
                    displayScore();
                    $(document).find(".nextButton").text("Play Again?");
                    quizOver = true;
                }
            }
        } else {//reset
            quizOver = false;
            $(document).find(".nextButton").text("Next Question");
            resetQuiz();
            displayCurrentQuestion();
            hideScore();
        }
    });

});


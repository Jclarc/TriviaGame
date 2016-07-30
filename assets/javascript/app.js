
var questionBank = [{
        question: 'question1?',
        choices: ['a1', 'a2', 'a3', 'a4'],
        correctAnswer: 2
    },
    {
        question: 'question2?',
        choices: ['a1', 'a2', 'a3', 'a4'],
        correctAnswer: 2
    },
    {
        question: 'question3?',
        choices: ['a1', 'a2', 'a3', 'a4'],
        correctAnswer: 3
    },
    {
        question: 'question4?',
        choices: ['a1', 'a2', 'a3', 'a4'],
        correctAnswer: 1
    },
    {
        question: 'question5?',
        choices: ['a1', 'a2', 'a3', 'a4'],
        correctAnswer: 1
    }];




var questionTitle = document.getElementById('questionTitle');
var selectionList = document.getElementById('selectionList');
var nextButton = document.getElementById('nextButton');
var startButton= document.getElementById('startButton');
var i = 0;
var j = 30;





var start=false;
$(".container").hide();
startButton.onclick=function(){
    if (start=true){
        startTimer();
        $(".startContainer").hide();
        $(".container").show();

    }

    //timer function
    function startTimer() {
        var countdownTimer = setInterval(function() {
            $(".timer h2").html("Time Remaining: "+j+" Seconds");
            j = j - 1;
            if (j < 0) {
                clearTimeout(countdownTimer);
            }
        }, 1000);


        nextButton.onclick = function() {
            if(i>questionBank.length -1){
                i=0;
            }
            populateQuestion(i);
            i++;
        };


        //writes questions to html
        function populateQuestion(num) {
            var individualQuestion = questionBank[i];
            questionTitle.innerText = individualQuestion.question;
            selectionList.innerHTML = ""; //reset choices list
            for(var key in individualQuestion.choices){
                var radioBtnName = "question"+i+"_choice";
                var choiceText = individualQuestion.choices[key];
                selectionList.appendChild(createList(radioBtnName,choiceText));
            }
        }

        //creates list for answers
        function createList(name, choiceText) {
            var e = document.createElement('div');
            var answerBtn = '<input type="radio" name="' + name + '"';
            answerBtn += '/>'+choiceText;
            e.innerHTML = answerBtn;
            return e;
        }


            }

} //end start function





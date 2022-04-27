//NOTE: TO APPROXIMATELY LINE 50 (TAKING INTO ACCOUNT IT MAY LOOK DIFFERENT IN DIFFERENT EDITORS), THIS IS ALL JUST DEFINING MAY VARIABLES INTO SUITABLE TERMS, AKA NOT VERY EXCITING, AGAIN WAS HEAVILY INSPIRED BY ONLINE QUIZZES THAT I REFERENCED AS I THINK IT GIVES THE CODE A CLEAN LOOK, AND I WANTED MORE TIME TO CONCENTRATE ON THE PARTS A USER WOULD SEE

//Start Section
let startQuiz = document.querySelector("#startQuiz");

//guide Section
let quizGuide = document.querySelector("#quizGuide");
let quizExit = document.querySelector("#quizExit");
let continueBtn = document.querySelector("#continue");

//Quiz Section
let quiz = document.querySelector("#quiz");
let time = document.querySelector("#time");

//question Section
let questionNumber = document.querySelector("#questionNumber");
let questionText = document.querySelector("#questionText");

//Multiple Choices Of Questions
let option1 = document.querySelector("#option1");
let option2 = document.querySelector("#option2");
let option3 = document.querySelector("#option3");
let option4 = document.querySelector("#option4");

//correct and next Button
let totalCorrect = document.querySelector("#totalCorrect");
let nextQuestion = document.querySelector("#nextQuestion");

//Result Section
let finalUserResult = document.querySelector("#finalUserResult");
let numberOfPoints = document.querySelector("#numberOfPoints");
let userQuit = document.querySelector("#userQuit");
let startAgain = document.querySelector("#startAgain");

//Get All 'H4' From Quiz Section (multipleChoice)
let choiceQuestion = document.querySelectorAll(".choiceQuestion");

//Setting other variables
let index = 0;
let timer = 0;
let timeInterval = 0;

//total points
let correctChoice = 0;

//store Answer Value
let userAns = undefined;

//End of Setting Variables and Keywords etc--------------------------



//what happen when 'Start' Button Will Click
startQuiz.addEventListener("click", () => {
    startQuiz.style.display = "none";
    quizGuide.style.display = "block";
});

//what happen when 'Exit' Button Will Click
quizExit.addEventListener("click", () => {
    startQuiz.style.display = "block";
    quizGuide.style.display = "none";
});

//On Click Functions for the shader button
function on() {
  document.getElementById("shader").style.display = "block";
}

function off() {
  document.getElementById("shader").style.display = "none";
}


//Code to keep the question counter running along with the timer, again has usage from my referenced third party sites.
let loadData = () => {
    questionNumber.innerText = index + 1 + ". ";
    questionText.innerText = multipleChoice[index].question;
    option1.innerText = multipleChoice[index].choice1;
    option2.innerText = multipleChoice[index].choice2;
    option3.innerText = multipleChoice[index].choice3;
    option4.innerText = multipleChoice[index].choice4;

    //    timer start
    timer = 0;
}

loadData();

//TIMER CODE
//Creating Timer For Quiz Timer Section

//If twenty seconds pass, the quiz will "click" over onto the next question, otherwise the timer will keep going until it reaches that 20 figure
//NOTE: This is a mix of the referenced libraries, online quizzes and my own knowledge. The trouble was that I could not figure out how to make it run per question, so that is where the usage of third party code comes in, as well as the idea for the if statement for 20 seconds, I took this as its a nice way to make the timer without being too overcomplicated. 


let timerCountDown = () => {
    if (timer === 20) {
        clearInterval(timeInterval);
        nextQuestion.click();
    } else {
        timer++;
        time.innerText = timer;
    }
}

//setInterval(timerCountDown,1000);


//The main counter section for the quiz to calculate how many a user got right.  Again heavily inspired by the referenced sites. 
choiceQuestion.forEach((userChoices, choiceNo) => {
    userChoices.addEventListener("click", () => {
        userChoices.classList.add("active");
        //check answer
        if (choiceNo === multipleChoice[index].answer) {
            correctChoice++;
        } else {
            correctChoice += 0;
        }
        //stop Counter
        clearInterval(timeInterval);

        //disable All Options When User Select An Option
        for (i = 0; i <= 3; i++) {
            choiceQuestion[i].classList.add("disabled");
        }
    })
});

//what happen when 'Continue' Button Will Click
//This piece is very important, as when continue is clicked not only does the quiz start, but the timer must as well.
//NOTE: I found this to be the most difficult part of the site by far, so again a lot of the code is from my referenced sites, again was done so I could focus on creating the other features.

continueBtn.addEventListener("click", () => {
    quiz.style.display = "block";
    quizGuide.style.display = "none";

    timeInterval = setInterval(timerCountDown, 1000);
    loadData();

    //    remove All Active Classes When Continue Button Will Click

    choiceQuestion.forEach(removeActive => {
        removeActive.classList.remove("active");
    })

    totalCorrect.innerHTML = `${correctChoice = 0} Out Of ${multipleChoice.length} Questions`;
});


//what happen when 'Next' Button Will Click.  Again heavily inspired by the referenced sites in order to save time and work on different features.
nextQuestion.addEventListener("click", () => {
    //    if index is less then multipleChoice.length
    if (index !== multipleChoice.length - 1) {
        index++;
        choiceQuestion.forEach(removeActive => {
            removeActive.classList.remove("active");
        })

        //question
        loadData();

        //result
        totalCorrect.style.display = "block";
        totalCorrect.innerHTML = `${correctChoice} Out Of ${multipleChoice.length} Questions`;
        clearInterval(timeInterval);
        timeInterval = setInterval(timerCountDown, 1000);
    } else {
        index = 0;


        //when Quiz Question Complete Display Result Section
        clearInterval(timeInterval);
        //Takes the values that were "correct" and compares it to the length of the total multiple choice questions, in this case 10
        quiz.style.display = "none";
        numberOfPoints.innerHTML = `You Got ${correctChoice} Out Of ${multipleChoice.length}`;
        finalUserResult.style.display = "block";
    }
    for (i = 0; i <= 3; i++) {
        choiceQuestion[i].classList.remove("disabled");
    }
})

//what happen when 'Quit' Button Will Click
userQuit.addEventListener("click", () => {
    startQuiz.style.display = "block";
    finalUserResult.style.display = "none";
});

//Start Again When 'Start Again' Button Will Clicked
startAgain.addEventListener("click", () => {
    quizGuide.style.display = "block";
    finalUserResult.style.display = "none";
});




//END OF JS-------------------------------------

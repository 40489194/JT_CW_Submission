//NOTE: TO APPROXIMATELY LINE 50 (TAKING INTO ACCOUNT IT MAY LOOK DIFFERENT IN DIFFERENT EDITORS), THIS IS ALL JUST DEFINING MAY VARIABLES INTO SUITABLE TERMS, AKA NOT VERY EXCITING, AGAIN WAS HEAVILY INSPIRED BY ONLINE QUIZZES THAT I REFERENCED AS I THINK IT GIVES THE CODE A CLEAN LOOK, AND I WANTED MORE TIME TO CONCENTRATE ON THE PARTS A USER WOULD SEE

//Start Section
let start = document.querySelector("#start");

//guide Section
let guide = document.querySelector("#guide");
let exit = document.querySelector("#exit");
let continueBtn = document.querySelector("#continue");

//Quiz Section
let quiz = document.querySelector("#quiz");
let time = document.querySelector("#time");

//question Section
let questionNo = document.querySelector("#questionNo");
let questionText = document.querySelector("#questionText");

//Multiple Choices Of Questions
let option1 = document.querySelector("#option1");
let option2 = document.querySelector("#option2");
let option3 = document.querySelector("#option3");
let option4 = document.querySelector("#option4");

//correct and next Button
let total_correct = document.querySelector("#total_correct");
let next_question = document.querySelector("#next_question");

//Result Section
let result = document.querySelector("#result");
let points = document.querySelector("#points");
let quit = document.querySelector("#quit");
let startAgain = document.querySelector("#startAgain");

//Get All 'H4' From Quiz Section (multipleChoice)
let choice_que = document.querySelectorAll(".choice_que");


let index = 0;
let timer = 0;
let interval = 0;

//total points
let correct = 0;

//store Answer Value
let UserAns = undefined;

//End of Setting Variables and Keywords etc--------------------------


//what happen when 'Start' Button Will Click
start.addEventListener("click", () => {
    start.style.display = "none";
    guide.style.display = "block";
});

//what happen when 'Exit' Button Will Click
exit.addEventListener("click", () => {
    start.style.display = "block";
    guide.style.display = "none";
});


//TIMER CODE
//Creating Timer For Quiz Timer Section

//If twenty seconds pass, the quiz will "click" over onto the next question, otherwise the timer will keep going until it reaches that 20 figure
//NOTE: This is a mix of the referenced libraries, online quizzes and my own knowledge. The trouble was that I could not figure out how to make it run per question, so that is where the usage of third party code comes in, as well as the idea for the if statement for 20 seconds, I took this as its a nice way to make the timer without being too overcomplicated. 


let countDown = () => {
    if (timer === 20) {
        clearInterval(interval);
        next_question.click();
    } else {
        timer++;
        time.innerText = timer;
    }
}

//setInterval(countDown,1000);

//Code to keep the question counter running along with the timer, again has usage from my referenced third party sites.

let loadData = () => {
    questionNo.innerText = index + 1 + ". ";
    questionText.innerText = multipleChoice[index].question;
    option1.innerText = multipleChoice[index].choice1;
    option2.innerText = multipleChoice[index].choice2;
    option3.innerText = multipleChoice[index].choice3;
    option4.innerText = multipleChoice[index].choice4;

    //    timer start
    timer = 0;
}

loadData();

//what happen when 'Continue' Button Will Click
//This piece is very important, as when continue is clicked not only does the quiz start, but the timer must as well.
//NOTE: I found this to be the most difficult part of the site by far, so again a lot of the code is from my referenced sites, again was done so I could focus on creating the other features.

continueBtn.addEventListener("click", () => {
    quiz.style.display = "block";
    guide.style.display = "none";

    interval = setInterval(countDown, 1000);
    loadData();

    //    remove All Active Classes When Continue Button Will Click

    choice_que.forEach(removeActive => {
        removeActive.classList.remove("active");
    })

    total_correct.innerHTML = `${correct = 0} Out Of ${multipleChoice.length} Questions`;
});

//The main counter section for the quiz to calculate how many a user got right.  Again heavily inspired by the referenced sites. 
choice_que.forEach((choices, choiceNo) => {
    choices.addEventListener("click", () => {
        choices.classList.add("active");
        //check answer
        if (choiceNo === multipleChoice[index].answer) {
            correct++;
        } else {
            correct += 0;
        }
        //stop Counter
        clearInterval(interval);

        //disable All Options When User Select An Option
        for (i = 0; i <= 3; i++) {
            choice_que[i].classList.add("disabled");
        }
    })
});

//what happen when 'Next' Button Will Click.  Again heavily inspired by the referenced sites in order to save time and work on different features.
next_question.addEventListener("click", () => {
    //    if index is less then multipleChoice.length
    if (index !== multipleChoice.length - 1) {
        index++;
        choice_que.forEach(removeActive => {
            removeActive.classList.remove("active");
        })

        //question
        loadData();

        //result
        total_correct.style.display = "block";
        total_correct.innerHTML = `${correct} Out Of ${multipleChoice.length} Questions`;
        clearInterval(interval);
        interval = setInterval(countDown, 1000);
    } else {
        index = 0;


        //when Quiz Question Complete Display Result Section
        clearInterval(interval);
        //Takes the values that were "correct" and compares it to the length of the total multiple choice questions, in this case 10
        quiz.style.display = "none";
        points.innerHTML = `You Got ${correct} Out Of ${multipleChoice.length}`;
        result.style.display = "block";
    }
    for (i = 0; i <= 3; i++) {
        choice_que[i].classList.remove("disabled");
    }
})

//what happen when 'Quit' Button Will Click
quit.addEventListener("click", () => {
    start.style.display = "block";
    result.style.display = "none";
});

//Start Again When 'Start Again' Button Will Clicked
startAgain.addEventListener("click", () => {
    guide.style.display = "block";
    result.style.display = "none";
});

//On Click Functions for the shader button
function on() {
  document.getElementById("shader").style.display = "block";
}

function off() {
  document.getElementById("shader").style.display = "none";
}

//END OF JS-------------------------------------

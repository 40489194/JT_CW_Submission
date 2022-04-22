//NOTE: After examining different quizzes online and looking at their source code, I really liked the idea of keeping the pre-made questions seperate from the rest of the quiz in its own file, as its repetitiveness would make it less readable in my opinion.  This format was heavily inspired by the videos linked in the report, as it is pretty straightfoward and I saw no need to change anything in it.

//Each question has four potential answers, these answers are also defined in this file.

let multipleChoice = [{
    question: "What is the correct HTML element if you want the largest heading?",
    choice1: "<h2>",
    choice2: "<h1>",
    choice3: "<firstHead>",
    choice4: "<head>",
    answer: 1
},
            {
            question: "What is the correct HTML element for defining text as important?",
    choice1: "<important>",
    choice2: "<I>",
    choice3: "<strong>",
    choice4: "<no1>",
    answer: 2
},
            {
            question: "How do you make an ordered list in HTML>",
    choice1: "<oList>",
    choice2: "<ol>",
    choice3: "<ordList>",
    choice4: "<svg>",
    answer: 1
},
            {
            question: "Which is the correct CSS syntax?",
    choice1: "body{color:black}",
    choice2: "{body{color:black}",
    choice3: "body={color:black}",
    choice4: "body:color{black}",
    answer: 0
},
            {
            question: "How do you insert a comment in a CSS file?",
    choice1: "/*This is Comment*/",
    choice2: "//This Is Comment",
    choice3: "<!--- This Is Comment --->",
    choice4: "//This Is Comment//",
    answer: 1
},
            {
            question: "How do you insert a comment in a HTML file?",
    choice1: "/*This is a Comment*/",
    choice2: "//This Is a Comment",
    choice3: "<!--- This Is a Comment --->",
    choice4: "//This Is a Comment//",
    answer: 2
},
            {
               question: "In HTML, which attribute specifies an input field that must be filled out?",
    choice1: "must",
    choice2: "required",
    choice3: "placeholder",
    choice4: "required",
    answer: 3
},{
               question: "In CSS, How would you change the background colour?",
    choice1: "background-colour",
    choice2: "bgroundc",
    choice3: "background-color",
    choice4: "bc",
    answer: 2
},
            {
               question: "Where do you refer to an external CSS document in HTML?",
    choice1: "Wherever you want",
    choice2: "The last line",
    choice3: "The head section",
    choice4: "The body section",
    answer: 2
},
            {
               question: "What does CSS Stand For?",
    choice1: "Cascading Style Sheets",
    choice2: "Creating Style Sheets",
    choice3: "Computer Saving Style",
    choice4: "Couldn't Say, Sorry",
    answer: 0
}];

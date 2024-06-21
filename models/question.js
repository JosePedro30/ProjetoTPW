export class Question {
  id = "";
  name = "";
  image = "";
  options = [];
  solution = "";
  solved = 0;

  constructor(id, name, image, options, solution, solved = 0) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.options = options;
    this.solution = solution;
    this.solved = solved;
  }
}

export let questionsDoc = [];

export function init() {
  questionsDoc = localStorage.questionsDoc
    ? JSON.parse(localStorage.questionsDoc)
    : [
        {
          id: 1,
          name: "True or False? There's a difference between these two operators?",
          image: "../public/images/level1-question1.png",
          options: ["True", "False"],
          solution: 0,
          solved: 0,
        },
        {
          id: 2,
          name: "What is the value of <b>number?</b>",
          image: "../public/images/level1-question2.png",
          options: ["2", "10", "NaN", "Error"],
          solution: 1,
          solved: 0,
        },
        {
          id: 3,
          name: "What is the error?",
          image: "../public/images/level1-question3.png",
          options: [
            "The variable 'number' is not declared correctly.",
            "The variable 'text' is not declared correctly.",
            "The concatenation is being performed using the addition operator (+) instead of the concatenation operator (+=).",
            "The variable 'result' is not being printed correctly to the console.",
          ],
          solution: 0,
          solved: 0,
        },
        {
          id: 4,
          name: "What will be the result printed in the console when executing the code?",
          image: "../public/images/level1-question4.png",
          options: ["True", "False"],
          solution: 1,
          solved: 0,
        },
        {
          id: 5,
          name: "What's the result?",
          image: "../public/images/level1-question5.png",
          options: ["0", "1", "2", "3"],
          solution: 1,
          solved: 0,
        },
        {
          id: 6,
          name: "The JavaScript 'typeof' operator can be used to determine the data type of a variable.",
          image: "../public/images/level1-question6.png",
          options: ["True", "False"],
          solution: 0,
          solved: 0,
        },
        //Level 2
        {
          id: 7,
          name: "What will be the output of the following code?",
          image: "../public/images/level2-question1.png",
          options: ["Greater than 5", "Equal to 5", "Less than 5", "undefined"],
          solution: 0,
          solved: 0,
        },
        {
          id: 8,
          name: "What is the result?",
          image: "../public/images/level2-question2.png",
          options: [
            "Greater than 5",
            "Less than 5",
            "Equal to 5",
            "Error",
          ],
          solution: 1,
          solved: 0,
        },
        {
          id: 9,
          name: "The if-else statement allows the execution of different code blocks based on specified conditions. What is the answer?",
          image: "../public/images/level2-question3.png",
          options: ["You are and adult", "You are a minor"],
          solution: 0,
          solved: 0,
        },
        {
          id: 10,
          name: "What will be the output of the following code?",
          image: "../public/images/level2-question4.png",
          options: [
            "It's a hot and sunny day!",
            "The weather is not hot and sunny.",
          ],
          solution: "The weather is not hot and sunny.",
          solved: 0,
        },
        //Level 3
        {
          id: 11,
          name: "Which loop in JavaScript is used when you want to execute the loop body at least once, regardless of the condition?",
          image: "../public/images/level3-question1.png",
          options: [
            "for loop",
            "while loop",
            "do-while loop",
            "switch statement",
          ],
          solution: 2,
          solved: 0,
        },
        {
          id: 12,
          name: "What is the purpose of the 'continue' statement in a loop?",
          image: "../public/images/level3-question2.png",
          options: [
            "o exit the loop immediately",
            "To skip the rest of the loop body and move to the next iteration",
            "To restart the loop from the beginning",
            "To check the condition and decide whether to continue the loop or not",
          ],
          solution: 1,
          solved: 0,
        },
        {
          id: 13,
          name: "What is the error in this for loop?",
          image: "../public/images/level3-question3.png",
          options: ["A", "B", "C", "D"],
          solution: 3,
          solved: 0,
        },
        {
          id: 14,
          name: "What is the error in this while loop?",
          image: "../public/images/level3-question4.png",
          options: ["A", "B", "C", "D"],
          solution: 0,
          solved: 0,
        },
        {
          id: 15,
          name: "What will be the output of the following code snippet?",
          image: "../public/images/level3-question5.png",
          options: ["01234", "55555", "12345", "444444"],
          solution: 1,
          solved: 0,
        },
        {
          id: 16,
          name: "The 'break' statement can be used to exit a loop prematurely.",
          image:"../public/images/level4-question6.png",
          options: ["True", "False"],
          solution: 0,
          solved: 0,
        },
        //Level 4
        {
          id: 17,
          name: "The do-while loop in JavaScript always executes the loop body at least once.",
          image: "../public/images/level4-question1.png",
          options: ["A", "B", "C", "D"],
          solution: 1,
          solved: 0,
        },
        {
          id: 18,
          name: "What is the correct way to call the function 'myFunction' with an argument named 'value'?",
          image: "../public/images/level4-question2.png",
          options: ["A", "B", "C", "D"],
          solution: 1,
          solved: 0,
        },
        {
          id: 19,
          name: "What is the error in this code snippet?",
          image: "../public/images/level4-question3.png",
          options: [
            "The calculateSum function does not return a value.",
            "The 'b' parameter is missing in the function call.",
            "The value of the 'result' variable is not assigned correctly.",
            "The calculateSum function is called with too many arguments.",
          ],
          solution: 3,
          solved: 0,
        },
        {
          id: 20,
          name: "JavaScript functions can only return one type of data",
          image: "../public/images/level4-question4.png",
          options: ["True", "False"],
          solution: 1,
          solved: 0,
        },
        //Level 5
        {
          id: 21,
          name: "What is the correct way to create an empty array in JavaScript?",
          image: "../public/images/level4-question5.png",
          options: [
            "let myArray = []",
            "let myArray = {}",
            'let myArray = ""',
            "let myArray = null",
          ],
          solution: 0,
          solved: 0,
        },
        {
          id: 22,
          name: "Which array method is used to add elements to the end of an array?",
          image: "../public/images/level5-question2.png",
          options: ["push()", "pop()", "shift()", "unshift()"],
          solution: 0,
          solved: 0,
        },
        {
          id: 23,
          name: "What is the error in this array declaration?",
          image: "../public/images/level5-question3.png",
          options: ["A", "B", "C", "D"],
          solution: 2,
          solved: 0,
        },
        {
          id: 24,
          name: "What is the error in this array access?",
          image: "../public/images/level5-question4.png",
          options: ["A", "B", "C", "D"],
          solution: 0,
          solved: 0,
        },
        {
          id: 25,
          name: "Arrays in JavaScript can hold elements of different data types",
          image: "../public/images/level5-question5.png",
          options: ["True", "False"],
          solution: 0,
          solved: 0,
        },
        {
          id: 26,
          name: "The 'length' property of an array returns the number of elements in the array.",
          image: "../public/images/level5-question6.png",
          options: ["True", "False"],
          solution: 0,
          solved: 0,
        },
        //Level 6
        {
          id: 27,
          name: "What is the correct syntax to create an empty object in JavaScript?",
          image: "../public/images/level6-question1.png",
          options: [
            "let myObj = []",
            "let myObj = {}",
            'let myObj = ""',
            "let myObj = null",
          ],
          solution: "let myObj = {}",
          solved: 0,
        },
        {
          id: 28,
          name: "Which operator is used to access a property of an object?",
          image: "../public/images/level6-question2.png",
          options: [".", ",", ";", ":"],
          solution: 0,
          solved: 0,
        },
        {
          id: 29,
          name: "What is the error in this object declaration?",
          image: "../public/images/level6-question3.png",
          options: ["A", "B", "C", "D"],
          solution: 2,
          solved: 0,
        },
        {
          id: 30,
          name: "What is the error in this object property access?",
          image: "../public/images/level6-question4.png",
          options: ["A", "B", "C", "D"],
          solution: 0,
          solved: 0,
        },
        {
          id: 31,
          name: "Objects in JavaScript can have methods, which are functions assigned as properties.",
          image: "../public/images/level6-question5.png",
          options: ["True", "False"],
          solution: 0,
          solved: 0,
        },
        {
          id: 32,
          name: "The 'Object.keys()' method in JavaScript returns an array of all the property names of an object.",
          image: "../public/images/level6-question6.png",
          options: ["True", "False"],
          solution: 0,
          solved: 0,
        },
      ];

  localStorage.setItem("questionsDoc", JSON.stringify(questionsDoc));
}

export function addQuestion(id, name, image, options, solution) {
  if (questionsDoc.some((question) => question.image === image)) {
    throw Error(`Question with image ${image} already exists!`);
  } else {
    questionsDoc.push(new Question(id, name, image, options, solution));
    localStorage.questionDoc = JSON.stringify(questionsDoc);
  }
}

//! Not Working Correctly
export function checkAnswer(correct) {
  var selectedQuestion = questionsDoc[questionsDoc.length - 1];
  var correctAnswer = selectedQuestion.option[selectedQuestion.solution];

  if (!selectedQuestion) {
    throw new Error("Question doest not exist!");
  }

  if (correct === correctAnswer) {
    console.log("Correct");
  } else {
    throw new Error("Incorrect");
  }
}

export function exportQuestions(){
  return questionsDoc
}
alert("What color is the sky on a clear day?");

const questionOne = Number(prompt("[1] Blue\n[2] Green"));

if (questionOne !== 1 && questionOne !== 2) {
    alert("Please enter 1 or 2.");
} else if (questionOne === 1) {
    alert("Correct! The sky is blue.");
    score = score + 1;
}

//question 2

alert("What shape is the Earth?");
const questionTwo = Number(prompt("[1] Triangular\n[2] Flat\n[3] Circular"));

if (questionTwo === 1) {
    alert ("You have entered the incorrect answer. Please try again.");
} else if (questionTwo === 2) {
    alert ("Wrong again. Please try again.");
} else if (questionTwo === 3) {
    alert ("Correct! The Earth is circular.");
    score = score + 1;
}

//question 3

alert("What number do we get as a result if we use % and it's odd?");
const questionThree = Number(prompt("[1] or [2] or [3]"));

if (questionThree !== 1 && questionThree !== 2 && questionThree !== 3) {
    alert("Please enter 1, 2, or 3.");
} else if (questionThree !== 1) {
    alert("Incorrect. Please try again.");
} else if (questionThree === 1) {
    alert("Correct! The result is 1.");
    score = score + 1;

}
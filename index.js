alert("What color is the sky on a clear day?");

const questionOne = Number(prompt("[1] Blue\n[2] Green"));

if (questionOne !== 1 && answer !== 2) {
    alert("Please enter 1 or 2.");
} else if (questionOne === 1) {
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
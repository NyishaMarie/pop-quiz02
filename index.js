alert("What color is the sky on a clear day?");

const answer = Number(prompt("[1] Blue\n[2] Green"));

if (answer !== 1 && answer !== 2) {
    alert("Please enter 1 or 2.");
} else if (answer === 1) {
    score = score + 1;
}


var scores = [10, 230, 50, 50, 20, 54354];
var totalScores = 0;
for (var i = 0; i < scores.length; i++ ) {
    totalScores += scores[i];
}
var averageScore = totalScores / scores.length;


alert(`The formula for average score is ${totalScores} / ${scores.length}.\n The average score is: ${averageScore}.`);
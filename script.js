document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('convertButton').addEventListener('click', convertToLowercase);
});

function convertToLowercase() {
    // Get the input sentence
    var sentence = document.getElementById("sentenceInput").value;
    // Convert the sentence to lowercase
    var lowercasedSentence = sentence.toLowerCase();
    // Display the lowercased sentence
    document.getElementById("output").innerText = lowercasedSentence;
}

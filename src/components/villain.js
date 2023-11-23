
    function formatText() {
        var inputText = document.getElementById('inputText').value;
        var formattedText = inputText.toUpperCase();
        displayResult(formattedText);
    }

    function countCharacters() {
        var inputText = document.getElementById('inputText').value;
        var charCount = inputText.length;
        displayResult(`Character Count: ${charCount}`);
    }

    function countWords() {
        var inputText = document.getElementById('inputText').value;
        var wordCount = inputText.split(/\s+/).filter(function(word) {
            return word.length > 0;
        }).length;
        displayResult(`Word Count: ${wordCount}`);
    }

    function reverseText() {
        var inputText = document.getElementById('inputText').value;
        var reversedText = inputText.split('').reverse().join('');
        displayResult(reversedText);
    }

    function findAndReplace() {
        var inputText = document.getElementById('inputText').value;
        var findText = prompt("Enter the text to find:");
        var replaceText = prompt("Enter the text to replace with:");
        var replacedText = inputText.split(findText).join(replaceText);
        displayResult(replacedText);
    }

    function clearInput() {
        document.getElementById('inputText').value = '';
        displayResult('');
    }

    function convertToLowercase() {
        var inputText = document.getElementById('inputText').value;
        var lowercaseText = inputText.toLowerCase();
        displayResult(lowercaseText);
    }

    function convertToUppercase() {
        var inputText = document.getElementById('inputText').value;
        var uppercaseText = inputText.toUpperCase();
        displayResult(uppercaseText);
    }

    function countLines() {
        var inputText = document.getElementById('inputText').value;
        var lineCount = inputText.split(/\r\n|\r|\n/).filter(function(line) {
            return line.length > 0;
        }).length;
        displayResult(`Line Count: ${lineCount}`);
    }

    function removeExtraSpaces() {
        var inputText = document.getElementById('inputText').value;
        var cleanedText = inputText.replace(/\s+/g, ' ').trim();
        displayResult(cleanedText);
    }

    function encryptText() {
        var inputText = document.getElementById('inputText').value;
        var shift = parseInt(prompt("Enter the shift value for encryption:")) || 0;
        var encryptedText = '';
        for (var i = 0; i < inputText.length; i++) {
            var charCode = inputText.charCodeAt(i);
            if (charCode >= 65 && charCode <= 90) {
                encryptedText += String.fromCharCode((charCode - 65 + shift) % 26 + 65);
            } else if (charCode >= 97 && charCode <= 122) {
                encryptedText += String.fromCharCode((charCode - 97 + shift) % 26 + 97);
            } else {
                encryptedText += inputText.charAt(i);
            }
        }
        displayResult(encryptedText);
    }

    function displayResult(result) {
        document.getElementById('result').innerText = result;
    }


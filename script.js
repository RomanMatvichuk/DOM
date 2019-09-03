
var knowHowArr = [];
knowHowArr.push('Programmera', 'Spela gitarr', 'Spela PS4', 'Fiska');

var block1 = document.getElementById('firstBlock');
var newHTML = '<div id="secondBlock"><p id="newText"></p></div>';
block1.insertAdjacentHTML('afterend', newHTML);

var newText = document.getElementById("newText");

for (i=0; i<knowHowArr.length; i++) {
     
        newText.innerText += knowHowArr[i] + '\n'

}
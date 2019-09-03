
var knowHowArr = [];
knowHowArr.push('Programmera', 'Spela gitarr', 'Spela PS4', 'Fiska');

var block1 = document.getElementById('firstBlock');
var newHTML = '<div id="secondBlock"><p id="newText"></p></div>';
block1.insertAdjacentHTML('afterend', newHTML);

var newText = document.getElementById("newText");
newText.innerText = 'Jag är bra på: ';

for (i=0; i<knowHowArr.length; i++) {

   /*     if (i < knowHowArr.length - 1) {
                newText.innerText += knowHowArr[i] + ', ';
        }
        else {
                newText.innerText += knowHowArr[i];
        }
*/
        var newLine = document.createElement("p");
        var text = document.createTextNode(knowHowArr[i]);
        newLine.appendChild(text);
        var block2 = document.getElementById("secondBlock");
        block2.appendChild(newLine);

}
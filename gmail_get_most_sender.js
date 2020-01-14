var senders = document.getElementsByClassName("yX xY ");

array_elements = [];

for (var i = 0; i < senders.length; i++) {
	array_elements.push(senders[i].innerText)
}

array_elements.sort();

var senderCounter = {};

for (var i = 0; i < array_elements.length; i++) {
    if (senderCounter[array_elements[i]]  == undefined) {
        senderCounter[array_elements[i]] = 1;
    } else {
        senderCounter[array_elements[i]] += 1;
    }
}

var topFiveSenders = [""];
var topFiveSendersScores = [0];

var keysOfSenderCounter = Object.keys(senderCounter);

for (var i = 0; i < keysOfSenderCounter.length; i++) {
    
    if (senderCounter[keysOfSenderCounter[i]] > 1) {
        console.log(keysOfSenderCounter[i])
    }
    
}
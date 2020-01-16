// ==UserScript==
// @name         Gmail Get Most Sender
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Will Console.log() an array of any sender that has more than 1 email sent to you on the current screen.
// @author       Arash Rasteh
// @match        https://mail.google.com/mail/*
// @grant        none
// ==/UserScript==

// It is recommended to change the settings so that it shows 100 emails per page for this script to work best.

console.log('"Gmail Get Most Sender" UserScript running.');

const getMostSenders = (minSenders) => {
    'use strict';

    if (!minSenders) minSenders = 2;

    var senders = document.getElementsByClassName("yX xY ");

    var array_elements = [];

    var i = 0;

    for (i = 0; i < senders.length; i++) {
        array_elements.push(senders[i].innerText)
    }

    array_elements.sort();

    var senderCounter = {};

    for ( i = 0; i < array_elements.length; i++) {
        if (senderCounter[array_elements[i]] == undefined) {
            senderCounter[array_elements[i]] = 1;
        } else {
            senderCounter[array_elements[i]] += 1;
        }
    }

    var topFiveSenders = [""];
    var topFiveSendersScores = [0];

    var keysOfSenderCounter = Object.keys(senderCounter);

    var arrToPrnt = new Array();

    for (i = 0; i < keysOfSenderCounter.length; i++) {

        if (senderCounter[keysOfSenderCounter[i]] >= minSenders) {
            arrToPrnt.push(keysOfSenderCounter[i]);
        }

    }

    for(i=0; i < arrToPrnt.length; i++) {
        arrToPrnt[i] = arrToPrnt[i].replace('\n', ' ');
    }

    console.log(arrToPrnt);

    arrToPrnt = arrToPrnt.filter( function( element ) {
        return element.length < 100 && isNaN(element);
    });

    console.log(arrToPrnt.join('\n'));
}

(function() {
    'use strict';
    getMostSenders();
})();

window.onhashchange = function() {
    'use strict';
    console.clear();
    console.log('"Gmail Get Most Sender" UserScript running.');
    getMostSenders();
}

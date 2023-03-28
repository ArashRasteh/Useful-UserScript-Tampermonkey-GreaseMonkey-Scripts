// ==UserScript==
// @name         Gmail Get Most Sender
// @namespace    http://arashrasteh.com/
// @version      1.1
// @description  Will Console.log() an array of any sender that has more than 1 email sent to you on the current screen.
// @author       Arash Rasteh
// @match        https://mail.google.com/mail/*
// @grant        none
// ==/UserScript==

// It is recommended to change the settings so that it shows 100 emails per page for this script to work best.

console.log('"Gmail Get Most Sender" UserScript running. use function getMostSenders(minSenders) to call it.');

getMostSenders = (minSenders) => {
    'use strict';

    if (!minSenders) minSenders = 2;

    var senders = document.getElementsByClassName("yX xY ");

    var array_elements = [];

    var i = 0;

    for (i = 0; i < senders.length; i++) {
        let innerText = senders[i].innerText;
        innerText = innerText.split(/[\s,.-/(/)]+/)
        array_elements.push(...innerText)
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
            arrToPrnt.push([keysOfSenderCounter[i], senderCounter[keysOfSenderCounter[i]]]);
        }

    }

    arrToPrnt.sort(function(a, b){return b[1] - a[1]})

    for(i=0; i < arrToPrnt.length; i++) {
        arrToPrnt[i] = `${arrToPrnt[i][1]} - ${arrToPrnt[i][0].replace('\n', ' ')}`;
    }

    console.log(arrToPrnt);

    arrToPrnt = arrToPrnt.filter( function( element ) {
        return element.length < 50 && isNaN(element);
    });

    console.log(arrToPrnt.join('\n'));
}

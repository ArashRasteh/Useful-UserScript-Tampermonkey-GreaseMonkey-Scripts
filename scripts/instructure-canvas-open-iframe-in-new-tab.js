// ==UserScript==
// @name         Instructure Kaltura video link creator
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  try to take over the world!
// @author       You
// @match        *.instructure.com/courses/*
// @grant        none
// ==/UserScript==

var addNewTabLinksToIframesWithAllowFullScreen = function() {
    let iframes = document.querySelectorAll('iframe[allowfullscreen]');
    console.dir(iframes);

    iframes.forEach((iframe, index) => {
        let br = document.createElement("br");
        let atag = document.createElement("a");
        let iframeWrapper = iframe.parentNode;

        atag.target = "_blank";
        atag.innerText = 'Open in New Fullscreen Tab';
        atag.href = iframe.src;
        atag.style.display = 'block';
        atag.style.textAlign = 'center';

        //iframeWrapper.appendChild(br);
        iframeWrapper.appendChild(atag);
    });
}

(function() {
    'use strict';
    addNewTabLinksToIframesWithAllowFullScreen();

    window.addEventListener('load', function () {
        console.log('Instructure Kaltura video link creator Tampermonkey Script working');

        document.querySelectorAll('a[href*="kaltura"]').forEach(link => {
            let atag = document.createElement("a");
            let href = link.href;
            let kalturaVideoID = href.substring(href.lastIndexOf('/') + 1);

            atag.target = "_blank";
            atag.innerText = 'Open in New Fullscreen Tab';
            atag.href = 'https://1533221.mediaspace.kaltura.com/embed/secure/iframe/entryId/' + kalturaVideoID;
            atag.style.display = 'block';
            atag.style.textAlign = 'center';

            link.append(atag);
        });

    })

})();

let keysPressed = {};

window.addEventListener('keydown', function(event) {
    keysPressed[event.key] = true;

});

window.addEventListener('keyup', function(event) {
    if (keysPressed['Alt'] && (keysPressed['r'] || keysPressed['R'])) {
        addNewTabLinksToIframesWithAllowFullScreen();
    }
    keysPressed = {};
});

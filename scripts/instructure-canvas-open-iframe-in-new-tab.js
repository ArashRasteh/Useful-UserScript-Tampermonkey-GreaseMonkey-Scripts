// ==UserScript==
// @name         Canvas Kaltura video link creator
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        *.instructure.com/courses/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    window.addEventListener('load', function () {
        let iframes = document.querySelectorAll('iframe[allowfullscreen="allowfullscreen"]');

        iframes.forEach((iframe, index) => {
            var br = document.createElement("br");
            var atag = document.createElement("a");
            var iframeWrapper = iframe.parentNode;

            atag.target = "_blank";
            atag.innerText = 'Open in New Tab';
            atag.href = iframe.src;

            iframeWrapper.appendChild(br)
            iframeWrapper.appendChild(atag)
        });
    })

})();

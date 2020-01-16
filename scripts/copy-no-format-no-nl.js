// ==UserScript==
// @name         Copy text without formatting or New Lines
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  try to take over the world!
// @author       Arash Rasteh
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {

  'use strict';

  document.addEventListener('copy', (event) => {
      const selection = document.getSelection();
      event.clipboardData.setData('text/plain', selection.toString().replace(/(\r\n|\n|\r)/gm, " "));
      event.preventDefault();
  });

})();
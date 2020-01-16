// ==UserScript==
// @name         Udemy: show progress of course in Title and after 'Your progress'
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  try to take over the world!
// @author       Arash Rasteh
// @match        https://www.udemy.com/course/*/learn/lecture/*
// @grant        none
// ==/UserScript==

const showProgressInTitle = () => {
  let progressContainerLoadedAndClicked = false;

  const udemyStatInterval = setInterval(function(){

      let progressContainer = document.querySelector('[class*=progress--progress-container]');
      let progressPrcnt = document.querySelector('[class*=progress-popover-content--progress-text]');

      if (!progressContainerLoadedAndClicked && progressContainer) {
          document.querySelector("[class*=progress--progress-container]").click();
          progressContainerLoadedAndClicked = true;
      } else if (progressPrcnt) {
          const courseTitle = document.querySelector("[class*=header--course-title]").textContent;
          progressPrcnt = progressPrcnt.textContent;
          progressPrcnt = progressPrcnt.split('of');
          progressPrcnt[0] = progressPrcnt[0].trim();
          progressPrcnt[1] = progressPrcnt[1].replace(' complete.', '').trim();
          progressPrcnt = Math.round(progressPrcnt[0]/progressPrcnt[1]*1000)/10;
          document.title = progressPrcnt + '% - ' + courseTitle;
//             document.querySelector("[class*=header--course-title]").textContent = progressPrcnt + '% - ' + courseTitle;
          document.querySelector("[data-purpose=progress-label]").textContent = 'Your progress: ' + progressPrcnt + '%';
          document.querySelector("[class*=progress--progress-container]").click();
          clearInterval(udemyStatInterval);
      }

  }, 300);
}

(function() {
  'use strict';

  showProgressInTitle();
})();


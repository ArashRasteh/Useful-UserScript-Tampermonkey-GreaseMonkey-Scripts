// ==UserScript==
// @name         Udemy: show progress of course in Title and after 'Your progress'
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Also if you click the circle with the trophy inside, will update the progress (sometimes needs to be clicked twice);
// @author       Arash Rasteh
// @match        https://www.udemy.com/course/*/learn/lecture/*
// @grant        none
// ==/UserScript==

const showProgressInTitle = () => {
  return new Promise((resolve, reject) => {
    let progressContainerLoadedAndClicked = false;
    let counter = 0;

    const udemyStatInterval = setInterval(function () {
      counter++;
      if (counter > 100) return reject('not working');
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
        progressPrcnt = Math.round(progressPrcnt[0] / progressPrcnt[1] * 1000) / 10;
        document.title = progressPrcnt + '% - ' + courseTitle;
        document.querySelector("[data-purpose=progress-label]").textContent = 'Your progress: ' + progressPrcnt + '%';
        document.querySelector("[class*=progress--progress-container]").click();
        clearInterval(udemyStatInterval);
        return resolve();
      }

    }, 300);
  })
}

(async function () {
  'use strict';

  try {
    await showProgressInTitle()
    document.querySelector("[class*=progress--progress-circle]").addEventListener("click", (event) => {
      event.preventDefault();
      showProgressInTitle();
    })
  } catch (error) {
    console.log(error);
  }
})();


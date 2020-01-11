// ==UserScript==
// @name         Hide Applied, Archived, Interviewing
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Hides the cards for the jobs that have been viewed
// @author       Arash Rasteh
// @homepage     https://arashrasteh.com/
// @match        *.indeed.com/jobs*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const savedJobs = document.querySelectorAll(".myjobs-serp-link");

    savedJobs.forEach((item, index) => {

        //console.log(item.closest(".jobsearch-SerpJobCard"));
        switch(item.textContent) {
            case 'Applied':
            case 'Archived':
            case 'Interviewing':
                console.log('Hid a job that was marked as ' + item.textContent);
                item.closest(".jobsearch-SerpJobCard").style.display = "none";
                break;
            default:
                break;
        }

    })

    console.log(savedJobs);
})();

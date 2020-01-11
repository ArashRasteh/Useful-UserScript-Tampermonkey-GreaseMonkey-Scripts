# Hide Applied, Archived, Interviewing on Indeed Jobs Search
### Tampermonkey / GreaseMonkey Script

<p>You can also copy and paste it into the browser console, but it is more tedious, so I recommend using a userscript manager to load the script</p>

```javascript
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
})();
```

// ==UserScript==
// @name         Loom Full Screen
// @namespace    https://www.loom.com
// @version      2024-06-09
// @description  try to take over the world!
// @author       You
// @match        https://www.loom.com/share/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=loom.com
// @grant        none
// ==/UserScript==

var videoAreaHeight;

(function() {
    'use strict';

        // window.addEventListener("load", (event) => {
        //     setTimeout(() => {
        //         pageLoaded(event);
        //     }, 1000);
        // });

    waitForElm('[aria-label="Play the video"]').then(() => {
        pageLoaded();
    });

})();

function pageLoaded(event) {
    document.querySelector('.css-tf0w7u').style.display = 'none';

    let headerHeight = document.querySelector('.header_header_20G').offsetHeight;
    videoAreaHeight = `calc(100vh - ${headerHeight}px)`;

    let videoFrame = document.querySelector('.videoFrame');
    console.log(videoFrame);
    videoFrame.style.maxHeight = videoAreaHeight;

    document.querySelector('.sharePageContainer').style.maxHeight = videoAreaHeight;

    let playTheVideoButton = document.querySelector('[aria-label="Play the video"]');

    playTheVideoButton.addEventListener('click', (playTheVideoButtonEvent) => {
        console.log('playTheVideoButton clicked');

        waitForElm('[aria-label="Theatre Mode"]').then((elem) => {
            elem.click();
            playButtonClicked();
        });
        // setTimeout(playButtonClicked, 1000);
    });

}

function playButtonClicked() {
    let videoFrame = document.querySelector('.videoFrame');

    let videoAndMetadataWrapper = document.querySelector('.videoAndMetadataWrapper')

    let videoGlobalContainer = document.querySelector('.video-global-container');

    setTimeout(() => {

        let titleArea = document.querySelector('.anonHeaderContainer.css-yv128a');
        let titleAreaHeight = titleArea.offsetHeight

        videoAndMetadataWrapper.scrollTo({
            top: titleAreaHeight,
            left: 0,
            behavior: "smooth",
        });
    }, 300);

    videoGlobalContainer.style.height = videoAreaHeight;

}

// from https://stackoverflow.com/questions/5525071/how-to-wait-until-an-element-exists
function waitForElm(selector) {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                observer.disconnect();
                resolve(document.querySelector(selector));
            }
        });

        // If you get "parameter 1 is not of type 'Node'" error, see https://stackoverflow.com/a/77855838/492336
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
}

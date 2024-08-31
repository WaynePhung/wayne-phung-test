"use strict";

import * as aFBM from "./footer.js";
import * as cSH2 from "./scroll-to-h2-main.js";
// import "./video-sizing.js";

var timeOutResize,
    timeOutChangeStickyH2;

window.addEventListener ('load', function() {
    // console.log("screen width: " + window.innerWidth);
    if (window.innerWidth >= 320 && window.innerWidth <= 1024) {
        aFBM.adjustFooterBottomMargin();
    } else {
        // console.log('Resetting footer bottom margin.');
        aFBM.footer.style.marginBottom = '';
    }
    cSH2.changeStickyH2();
});

window.addEventListener ('resize', function() {
    // console.log("screen width: " + window.innerWidth);
    if (timeOutResize) {
        clearTimeout(timeOutResize);
    }
    if (window.innerWidth >= 320) {
        timeOutChangeStickyH2 = 130;
    } else {
        timeOutChangeStickyH2 = 0;
    }
    if (window.innerWidth >= 320 && window.innerWidth <= 1024) {
        aFBM.adjustFooterBottomMargin();
    } else {
        // console.log('Resetting footer bottom margin.');
        aFBM.footer.style.marginBottom = '';
    }
    timeOutResize = setTimeout(function() {
        cSH2.changeStickyH2();
    }, timeOutChangeStickyH2);
});

window.addEventListener ('scroll', function() {
    if (timeOutResize) {
        clearTimeout(timeOutResize);
    }
    if (window.innerWidth >= 320) {
        timeOutChangeStickyH2 = 130;
    } else {
        timeOutChangeStickyH2 = 0;
    }
    timeOutResize = setTimeout(function() {
        cSH2.changeStickyH2();
    }, timeOutChangeStickyH2);
});
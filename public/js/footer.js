// Run the function on load and resize

// window.addEventListener ('DOMContentLoaded', adjustFooterBottomMargin);
// window.addEventListener ('load', adjustFooterBottomMargin);
// window.addEventListener ('resize', adjustFooterBottomMargin);

export var 
    footer = document.querySelector('footer'), 
    header = document.querySelector('header'), 
    footerInitialStyle = window.getComputedStyle(footer),
    getFooterBottomMargin = footerInitialStyle.getPropertyValue('margin-bottom');

// window.addEventListener ('load', function() {
//     // console.log("screen width: " + window.innerWidth);
//     if (window.innerWidth >= 320 && window.innerWidth <= 1024) {
//         adjustFooterBottomMargin();
//     } else {
//         // console.log('Resetting footer bottom margin.');
//         footer.style.marginBottom = '';
//     } 
// });

// window.addEventListener('resize', function() {
//     // console.log('Screen width: ' + window.innerWidth);
//     if (window.innerWidth >= 320 && window.innerWidth <= 1024) {
//         adjustFooterBottomMargin();
//     } else {
//         // console.log('Resetting footer bottom margin.');
//         footer.style.marginBottom = '';
//     }
// });

export function adjustFooterBottomMargin() {
    // Reset footer margin and header height
    footer.style.marginBottom = '';
    header.style.height = 'auto';
    var footerInitialStyle = window.getComputedStyle(footer),
        getFooterBottomMargin = footerInitialStyle.getPropertyValue('margin-bottom'), 
        headerHeight = document.querySelector('header').offsetHeight;
    // console.log('Footer initial bottom margin: ' + getFooterBottomMargin);
    // console.log('Footer margin bottom before function and resizing: ' + getFooterBottomMargin);
    // Adjust footer margin based on header height
    footer.style.marginBottom = (headerHeight) + "px";
    // console.log('Adjusting footer bottom margin. Footer margin bottom after function: ' + footer.style.marginBottom);
    // Adjust content margin to prevent overlap with header
    // content.style.marginTop = "".concat(headerHeight, "px");
    // console.log('Hello world.');
}
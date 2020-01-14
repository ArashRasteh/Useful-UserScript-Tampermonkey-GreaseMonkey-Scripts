//amazon show only with X ratings

//s-result-item a-size-base

var jqry = document.createElement('script');
jqry.src = "https://code.jquery.com/jquery-3.3.1.min.js";
document.getElementsByTagName('head')[0].appendChild(jqry);

setTimeout(function () {
    
    jQuery.noConflict();

    var $ratings = jQuery('.s-result-item .sg-col-4-of-12.sg-col-8-of-16.sg-col-12-of-32.sg-col-12-of-20.sg-col-12-of-36.sg-col.sg-col-12-of-24.sg-col-12-of-28 .a-size-base');

}, 2000);



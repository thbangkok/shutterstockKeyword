// ==UserScript==
// @name         ShutterKeyword
// @namespace
// @version      1.0
// @description  Extract the keyword from Shutter Stock Preview Page
// @author       Satinka
// @match        https://www.shutterstock.com/image-photo*
// @match        https://www.shutterstock.com/image-vector*
// @copyright    2016, Naphong
// @require      http://code.jquery.com/jquery-latest.min.js
// @grant        none



// ==/UserScript==
/* jshint -W097 */
'use strict';

// =========== PARAMETERS ===========



//===================================

var $j = jQuery.noConflict();

$j(document).ready(function() {
    var a = '';
    $j.each( $j('.product-page-keywords'), function(i, left) {
       $j('a', left).each(function() {
           a+=$j(this).text()+', ';
       });
    });
    $j('.product-page-keywords').html('<div class="row">' + a + '</div>');
});
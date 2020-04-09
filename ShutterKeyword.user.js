// ==UserScript==
// @name         ShutterKeyword
// @namespace
// @version      2.1
// @description  Extract the keyword from Shutter Stock Preview Page
// @author       Naphong
// @match        https://www.shutterstock.com/*image-photo*
// @match        https://www.shutterstock.com/*image-vector*
// @match		 https://www.shutterstock.com/*image-illustration*
// @match        https://www.shutterstock.com/*video*
// @copyright    2019, Naphong
// @require      http://code.jquery.com/jquery-latest.min.js
// @grant        none



// ==/UserScript==
/* jshint -W097 */
'use strict';

// =========== PARAMETERS ===========



//===================================

var $j = jQuery.noConflict();

$j(document).ready(function() {
    setTimeout(function() {
        var a = '';
        $j.each( $j('.oc_x_c'), function(i, left) {
            $j('a', left).each(function() {
                a+=$j(this).text()+', ';
            });
        });
        console.log(a);
        $j('[class="oc_x_g"]').css({ height: "100px" });
        $j('[class="oc_x_g"]').html('<div class="row" style="position: relative;height:150px;width:100%;padding: 10px 10px 10px 10px;">' + a + '</div>');
    }, 2000);
});

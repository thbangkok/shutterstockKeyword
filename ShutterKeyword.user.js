// ==UserScript==
// @name         ShutterKeyword
// @namespace
// @version      2.3
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
        $j.each( $j('.C_a_c'), function(i, left) {
            $j('a', left).each(function() {
                a+=$j(this).text()+', ';
            });
        });
        console.log(a);
        $j('.k_b_O.k_b_gp.k_b_fX.k_b_ha.k_b_gP.k_b_iB.k_b_iw.k_b_b.m_g_p.section-spacing-bottom').css({ height: "100px" });
        $j('.k_b_O.k_b_gp.k_b_fX.k_b_ha.k_b_gP.k_b_iB.k_b_iw.k_b_b.m_g_p.section-spacing-bottom').html('<div class="row" style="position: relative;height:150px;width:100%;padding: 10px 10px 10px 10px;">' + a + '</div>');
    }, 2000);
});

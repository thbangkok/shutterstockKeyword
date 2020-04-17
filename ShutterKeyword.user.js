// ==UserScript==
// @name         ShutterKeyword
// @namespace
// @version      2.3.5
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

function renderKeyword()
{
    if ($j(".C_a_c")[0]){
        var a = '';
        $j.each( $j('.C_a_c'), function(i, left) {
            $j('a', left).each(function() {
                a+=$j(this).text()+', ';
            });
        });
        console.log('trig!');
        //console.log(a);
        if ($j(".k_b_O.k_b_gp.k_b_fX.k_b_ha.k_b_gP.k_b_iB.k_b_iw.k_b_b.m_g_p.section-spacing-bottom")[0])
        {
            $j('.k_b_O.k_b_gp.k_b_fX.k_b_ha.k_b_gP.k_b_iB.k_b_iw.k_b_b.m_g_p.section-spacing-bottom').css({ height: "100px" });
            $j('.k_b_O.k_b_gp.k_b_fX.k_b_ha.k_b_gP.k_b_iB.k_b_iw.k_b_b.m_g_p.section-spacing-bottom').html('<div class="row" style="position: relative;height:150px;width:100%;padding: 10px 10px 10px 10px;">' + a + '</div>');
        } else {
            if ($j(".C_a_a.section-spacing-bottom")[0])
            {
                $j('.C_a_a.section-spacing-bottom').css({ height: "100px" });
                $j('.C_a_a.section-spacing-bottom').html('<div class="row" style="position: relative;height:150px;width:100%;padding: 10px 10px 10px 10px;">' + a + '</div>');
            }
        }
    }
}


$j(document).ready(function() {
    setTimeout(function() {
        renderKeyword();
        window.setInterval(function(){
            renderKeyword();
        }, 5000);
    }, 200);
});

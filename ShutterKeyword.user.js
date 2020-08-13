// ==UserScript==
// @name         ShutterKeyword
// @namespace
// @version      2.4.1
// @description  Extract the keyword from Shutter Stock Preview Page
// @author       Naphong
// @match        https://www.shutterstock.com/*image-photo*
// @match        https://www.shutterstock.com/*image-vector*
// @match		 https://www.shutterstock.com/*image-illustration*
// @match        https://www.shutterstock.com/*video*
// @copyright    2020, Naphong
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
    if ($j(".C_a_03061")[0]){
        var a = '';
        $j.each( $j('.C_a_03061'), function(i, left) {
            $j('a', left).each(function() {
                a+=$j(this).text()+', ';
            });
        });
        console.log('trig!');
        if(a=== "")
        {
            console.log('no data');
            return;
        }
        //console.log(a);
        if ($j(".C_a_03061")[0])
        {
            $j('.C_a_03061').css({ height: "100px" });
            $j('.C_a_03061').html('<div class="row" style="position: relative;height:150px;width:100%;padding: 10px 10px 10px 10px;">' + a + '</div>');
        } else {
            if ($j(".m_g_4f6b9 C_a_8cee0 section-spacing-bottom")[0])
            {
                $j('.m_g_4f6b9 C_a_8cee0 section-spacing-bottom').css({ height: "100px" });
                $j('.m_g_4f6b9 C_a_8cee0 section-spacing-bottom').html('<div class="row" style="position: relative;height:150px;width:100%;padding: 10px 10px 10px 10px;">' + a + '</div>');
            }
        }
    }
}


$j(document).ready(function() {
    setTimeout(function() {
        renderKeyword();
        window.setInterval(function(){
            renderKeyword();
        }, 8000);
    }, 200);
});

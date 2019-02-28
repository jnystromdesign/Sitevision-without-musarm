// ==UserScript==
// @name         Sitevision without musarm
// @namespace    http://github.com/jnystromdesign
// @version      0.1
// @description  Making an effort to save my arms while working with a mouse driven system
// @author       Joakim Nyström
// @match        https://[your-site-here]/*
// @grant        GM_log
// @require      http://code.jquery.com/jquery-latest.js
/* global jQuery */
// ==/UserScript==

(function($) {
    'use strict';
    listenToControls();

    const svUI = {
        publish: ()=>{
            $('#supersidebar-btn-publish').trigger('click');
        },
        openSiteSettings: ()=>{
            const currentUrl = window.location.href;
            window.location.href = `${currentUrl}/siteProperties`;
        },
        openModuleSettings: ()=>{
            const nodeId = $('#sidebar #bottom .fancytree-active').attr('id').replace('node-svid', '').replace('_', '.');
            const currentUrl = window.location.href;
            const propertiesUrl = `${currentUrl}/${nodeId}/properties/layoutSettings`;
            window.location.href = propertiesUrl;
        },
        openPageSettings: ()=>{
            const currentUrl = window.location.href;
            window.location.href = `${currentUrl}/properties`;
        }
    }
    function listenToControls(){
        $(document).on('keypress', function(e) {
            var code = (e.keyCode ? e.keyCode : e.which);
            switch(code){

                case 16: // Press: P
                    svUI.publish();
                    break;

                case 5: // Press: E
                    svUI.openSiteSettings();
                    break;

                case 1: // Press: A
                    svUI.openModuleSettings();
                    break;

                case 4: // Press: D
                    svUI.openPageSettings();
                    break;

                default:

                    break;

            }

            GM_log(code);
        });
    }

})(jQuery);
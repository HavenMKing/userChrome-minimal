// ==UserScript==
// @name           userChrome.js
// @namespace      scrollbars_win10
// @version        0.0.7
// @note           Windows 10 style by /u/mrkwatz https://www.reddit.com/r/FirefoxCSS/comments/7fkha6/firefox_57_windows_10_uwp_style_overlay_scrollbars/
// @note           Brought to Firefox 57 by /u/Wiidesire https://www.reddit.com/r/firefox/comments/7f6kc4/floating_scrollbar_finally_possible_in_firefox_57/
// @note           userChrome.js https://github.com/nuchi/firefox-quantum-userchromejs
// @note           Forked from https://github.com/Endor8/userChrome.js/blob/master/floatingscrollbar/FloatingScrollbar.uc.js
// ==/UserScript==
gBrowser.tabContainer.addEventListener('dblclick', function(event) {
	if (event.target.localName == 'tab' && event.button == 0) {
		document.getElementById('urlbar').focus();
		document.getElementById('urlbar').select();
	}
});
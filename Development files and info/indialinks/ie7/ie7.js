/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'indialinks\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-back-arrow': '&#xe600;',
		'icon-back-arrow-active': '&#xe601;',
		'icon-chat': '&#xe602;',
		'icon-checkbox': '&#xe603;',
		'icon-checkbox-ticked': '&#xe604;',
		'icon-close': '&#xe606;',
		'icon-cpanel': '&#xe607;',
		'icon-domain-forwarding': '&#xe608;',
		'icon-domain-parking': '&#xe609;',
		'icon-down-arrow': '&#xe60a;',
		'icon-forward-arrow': '&#xe60b;',
		'icon-info-active': '&#xe60c;',
		'icon-info-inactive': '&#xe60d;',
		'icon-linux': '&#xe60e;',
		'icon-login': '&#xe60f;',
		'icon-logout': '&#xe610;',
		'icon-manage-domains': '&#xe611;',
		'icon-new-tab': '&#xe612;',
		'icon-profile': '&#xe613;',
		'icon-search': '&#xe614;',
		'icon-settings': '&#xe615;',
		'icon-theft-protection': '&#xe616;',
		'icon-tools': '&#xe617;',
		'icon-up-arrow': '&#xe618;',
		'icon-windows': '&#xe619;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());

var sun_affiliate = new String('<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0" width="300" height="300" id="dev_solaris_300x300_japanese" align="middle"><param name="allowScriptAccess" value="sameDomain" /><param name="FlashVars" value="clickTAG=http://sdc.sun.co.jp/solaris/%3Futm_source%3Dbanner%26utm_medium%3Dbanner%26utm_term%3DSolaris%26utm_content%3DSeaSar%26utm_campaign%3DSolaris%2BSDC%2BCampaign" /><param name="movie" value="$BASE_URI$affiliate/dev_solaris_300x300_japanese.swf" /><param name="quality" value="high" /><param name="bgcolor" value="#ffffff" /><embed src="$BASE_URI$affiliate/dev_solaris_300x300_japanese.swf" FlashVars="clickTAG=http://sdc.sun.co.jp/solaris/%3Futm_source%3Dbanner%26utm_medium%3Dbanner%26utm_term%3DSolaris%26utm_content%3DSeaSar%26utm_campaign%3DSolaris%2BSDC%2BCampaign" quality="high" bgcolor="#ffffff" width="300" height="300" name="dev_solaris_300x300_japanese" align="middle" allowScriptAccess="sameDomain" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" /></object>');

function write_sun_affiliate(base_uri) {
	sun_affiliate = sun_affiliate.replace('$BASE_URI$', base_uri);
	sun_affiliate = sun_affiliate.replace('$BASE_URI$', base_uri);
	document.write(sun_affiliate);
}

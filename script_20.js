
	function showPWA() {
		var pwaInstall = document.getElementsByTagName('pwa-install')[0];
  		pwaInstall.showDialog();
  		gtag('event','pwaDialog',{'event_category':'pwaDialog','event_label':'pwaDialog'});
	}


			const toggle = document.getElementById("blurToggle");
			const diceWrappers = document.querySelectorAll("#TnZ2kARmmAHJGLkYTeXgRufOg8MEMD372 .dice-wrapper");
			const st2 = document.getElementById("sub-title2");
			const bt = document.querySelectorAll(".title");
			const ns = document.getElementById("num-select");
			const ts = document.getElementById("type-select");
			const ths = document.getElementById("theme-select");
			const lt = document.getElementById("lt");						
			const savedBlurMode = sessionStorage.getItem("blurMode");
			const diceWrappers2 = document.querySelectorAll("#history .dice-wrapper");

			if (savedBlurMode === "true") {
			    toggle.checked = true;
			    applyBlur(true);
			} else {
			    applyBlur(false);
			}
			
			toggle.addEventListener("change", () => {
			    sessionStorage.setItem("blurMode", toggle.checked);
			    applyBlur(toggle.checked);
			});
			
			function applyBlur(enabled) {
			    diceWrappers.forEach(wrapper => {
			        wrapper.classList.toggle("blurred", enabled);
			    });
			    
			    diceWrappers2.forEach(wrapper2 => {
			        wrapper2.classList.toggle("blurred2", enabled);
			    });
			    
			    if (toggle.checked) {
			    	ns.classList.add("blurred");
			    	ts.classList.add("blurred");
			    	ths.classList.add("blurred");
			    	lt.classList.add("blurred");
			    	st2.innerHTML = "&nbsp;";
			    	bt.forEach(tt => {
			    		tt.classList.add("blurred");
			    	});
			    	
			    } else {
			    	ns.classList.remove("blurred");
			    	ts.classList.remove("blurred");
			    	ths.classList.remove("blurred");
			    	lt.classList.remove("blurred");
			    	st2.textContent = "Roll Color Dice";
			    	bt.forEach(tt => {
			    		tt.classList.remove("blurred");
			    	});
			    }
			    
			    diceWrappers.forEach(wrapper => {

				    const reveal = () => {
				        if (toggle.checked) {
				            wrapper.classList.remove("blurred");
				        }
				    };
				
				    const reblur = () => {
				        if (toggle.checked) {
				            wrapper.classList.add("blurred");
				        }
				    };
				
				    wrapper.addEventListener("mouseover", reveal);
				    wrapper.addEventListener("mouseleave", reblur);
				
				    // Mobile support
				    wrapper.addEventListener("touchstart", reveal);
				    wrapper.addEventListener("touchend", reblur);
				    wrapper.addEventListener("touchcancel", reblur);
				});
				
				diceWrappers2.forEach(wrapper2 => {

				    const reveal = () => {
				        if (toggle.checked) {
				            wrapper2.classList.remove("blurred2");
				        }
				    };
				
				    const reblur = () => {
				        if (toggle.checked) {
				            wrapper2.classList.add("blurred2");
				        }
				    };
				
				    wrapper2.addEventListener("mouseover", reveal);
				    wrapper2.addEventListener("mouseleave", reblur);
				
				    // Mobile support
				    wrapper2.addEventListener("touchstart", reveal);
				    wrapper2.addEventListener("touchend", reblur);
				    wrapper2.addEventListener("touchcancel", reblur);
				});
			}
		
			function setCookie(name, value, expdays) {
				const d = new Date();
				d.setTime(d.getTime() + (expdays*24*60*60*1000));
				document.cookie = name+"="+encodeURIComponent(value)+"; expires="+d.toUTCString()+"; path=/; SameSite=Lax; Secure";
			}	
			
			setCookie("pv",20,0.041666);
			setCookie("lang","en",365);
			setCookie("score","5",365);
			
			function hideHistory() {
				document.getElementById('show-history').style.display = 'block';
				document.getElementById('history').style.display = 'none';
				setCookie("history",0,365);
			}
			
			function showHistory() {
				document.getElementById('show-history').style.display = 'none';
				document.getElementById('history').style.display = 'block';
				setCookie("history",1,365);
			}
			
			function hideStreamers() {
				document.getElementById('show-streamers').style.display = 'block';
				document.getElementById('streamer-widget-mobile').style.display = 'none';
				setCookie("streamers",0,365);
			}
			
			function showStreamers() {
				document.getElementById('show-streamers').style.display = 'none';
				document.getElementById('streamer-widget-mobile').style.display = 'block';
				setCookie("streamers",1,365);
			}
			
			let btnClicked = false;

			function handleClick(e) {
			  if (btnClicked) {
			    e.preventDefault();
			    return;
			  }
			  btnClicked = true;
			  this.style.pointerEvents = "none";
			  this.classList.add("noselect");
			}

			if(document.getElementById("roll-button")) {
				document.getElementById("roll-button").addEventListener("click", handleClick);
			}
			if(document.getElementById("roll-button2")) {
				document.getElementById("roll-button2").addEventListener("click", handleClick);
			}
			
			$("#type-select,#num-select").on("change",function() {
				var dice_num = $("#num-select").val();
				var dice_type = $("#type-select").val();
				if(dice_type == "color-dice") {
					var newlink = "https://www.online-dice.com/roll-color-dice/"+dice_num+"/";
				} else if(dice_type == "perya-color-game") {
					var newlink = "https://www.online-dice.com/roll-color-dice/"+dice_num+"/";
				} else {
					var newlink = "https://www.online-dice.com/roll-dice/"+dice_num+"/"+dice_type+"/";
				}
				window.location = newlink;
			});
			
			const a = ['t', 'a', 'b', 'l', 'e', 't', 'o', 'p'].join('');
			const b = document.createElement('div');
			b.id = a;
			b.style.visibility = 'hidden';
			b.style.height = '0px';
			b.style.width = '0px';
			b.style.overflow = 'hidden';
			b.style.margin = '0';
			b.style.border = 'none';
			b.style.padding = '0';
			const colors = ['red', 'green', 'blue', 'darkorange', 'purple', 'gold'];
			function randomIndex(max) {
			    const array = new Uint32Array(1);
			    crypto.getRandomValues(array);
			    return array[0] % max;
			}
			for (let i = 0; i < 4; i++) {
			    const c = document.createElement('div');
			    c.className = ['d', 'i', 'c', 'e', '-', 'w', 'r', 'a', 'p', 'p', 'e', 'r'].join('')
			        + ' size-100 rounded-dice';
			    c.style.setProperty('background', '#fff', 'important');
			    const d = document.createElement('i');
			    d.className = 'df-solid-small-dot-d6-1';
			    d.style.setProperty('color', colors[randomIndex(colors.length)], 'important');
			    c.appendChild(d);
			    b.appendChild(c);
			}
			const target = document.getElementById("TnZ2kARmmAHJGLkYTeXgRufOg8MEMD372");
			target.appendChild(b);
			setTimeout(() => {
			    let previousLength = b.innerHTML.length;
			    const observer = new MutationObserver(() => {
			        const currentLength = b.innerHTML.length;
			        if (currentLength !== previousLength) {
			            //target.innerHTML = "";
			            previousLength = currentLength;
			        }
			    });
			    observer.observe(b, {
				    attributes: true,
				    attributeFilter: ['style'],
				    subtree: true
				});
			}, 500);
			
			$("#lang-select").on("change",function() {
				var lang = $("#lang-select").val();
				var dice_num = $("#num-select").val();
				var newlink = "https://www.online-dice.com/"+lang+"/roll-color-dice/"+dice_num+"/";
				window.location = newlink;
			});
			
			$("#minus-btn").on("click", function() {
			    const count = document.getElementById("count");
			    const score = parseInt(count.textContent, 10) - 1;
			    setCookie("score", score, 365);
			    count.textContent = score > 0 ? "+" + score : score;
			});
			
			$("#minus-btn-10").on("click", function() {
			    const count = document.getElementById("count");
			    const score = parseInt(count.textContent, 10) - 10;
			    setCookie("score", score, 365);
			    count.textContent = score > 0 ? "+" + score : score;
			});
			
			$("#plus-btn").on("click", function() {
			    const count = document.getElementById("count");
			    const score = parseInt(count.textContent, 10) + 1;
			    setCookie("score", score, 365);
			    count.textContent = score > 0 ? "+" + score : score;
			});
			
			$("#plus-btn-10").on("click", function() {
			    const count = document.getElementById("count");
			    const score = parseInt(count.textContent, 10) + 10;
			    setCookie("score", score, 365);
			    count.textContent = score > 0 ? "+" + score : score;
			});
			
			$("#theme-select").on("change",function() {
				var theme = $("#theme-select").val();
				if(theme != "blue") {
					$("#theme-css").attr("href","https://www.online-dice.com/css/"+theme+".php?v=082526");
					if(theme == "gold" || theme == "sab-heaven") {
						$("link[rel=mask-icon]").attr("color","#c6a44d");
						$("meta[name=msapplication-TileColor]").attr("content","#c6a44d");
						$("meta[name=theme-color]").attr("content","#c6a44d");
					} else if (theme == "sab-blue" || theme == "sab-underwater") {
						$("link[rel=mask-icon]").attr("color","#0088ff");
						$("meta[name=msapplication-TileColor]").attr("content","#33aaff");
						$("meta[name=theme-color]").attr("content","#33aaff");
					} else if (theme == "green" || theme == "sab-green") {
						$("link[rel=mask-icon]").attr("color","#008000");
						$("meta[name=msapplication-TileColor]").attr("content","#008000");
						$("meta[name=theme-color]").attr("content","#008000");
					} else if (theme == "red" || theme == "sab-red" || theme == "sab-hell") {
						$("link[rel=mask-icon]").attr("color","#B22222");
						$("meta[name=msapplication-TileColor]").attr("content","#B22222");
						$("meta[name=theme-color]").attr("content","#B22222");
					} else if (theme == "pink") {
						$("link[rel=mask-icon]").attr("color","#EE82EE");
						$("meta[name=msapplication-TileColor]").attr("content","#EE82EE");
						$("meta[name=theme-color]").attr("content","#EE82EE");
					} else if (theme == "bw" || theme == "sab-black") {
						$("link[rel=mask-icon]").attr("color","#000000");
						$("meta[name=msapplication-TileColor]").attr("content","#000000");
						$("meta[name=theme-color]").attr("content","#000000");
					} else if (theme == "silver") {
						$("link[rel=mask-icon]").attr("color","#999999");
						$("meta[name=msapplication-TileColor]").attr("content","#999999");
						$("meta[name=theme-color]").attr("content","#999999");
					} else if (theme == "bronze") {
						$("link[rel=mask-icon]").attr("color","#a56c43");
						$("meta[name=msapplication-TileColor]").attr("content","#a56c43");
						$("meta[name=theme-color]").attr("content","#a56c43");
					}
				} else {
					$("#theme-css").attr("href","https://www.online-dice.com/css/style.php");
					$("meta[name=theme-color]").attr("content","#4dacff");
				}
				setCookie("theme",theme,365);
			});
			
			$(".loader-title").css("visibility","visible");	
			var funnytitles = Array("What Color Will It Be?", "Rolling..", "Color Me Surprised!", "Amazing!", "Let's Roll!", "Let's Go!", "Good Luck!", "Fingers Crossed..", "Feeling Lucky?");
			var randomElement = funnytitles[Math.floor(Math.random()*funnytitles.length)]
			$(".loader-title").html(randomElement);
			
			$(document).ready(function() {

				function hideloader() {
					$(".loader-title").css("display","none");
					$(".loader-dice").css("visibility","hidden");
					$(".loader").addClass("hide");
					setTimeout(function() {
					    $(".loader-title").remove();
					    $(".loader-dice").remove();
					    $(".loader").remove();
					}, 500);
				}
				
				function hideMsg() {
					$(".msg").css("display","none");
				}
				
				function playConfettiSound() {
					document.getElementById('success-sound').play();
				}
				
				var timeout = null;	
				
				clearTimeout(timeout);
				timeout = setTimeout(playConfettiSound, 550);
				timeout = setTimeout(hideloader, 1250);
				timeout = setTimeout(hideMsg, 4800);
				
				setTimeout( function() {
					$(".fixed-ad-top").attr("style","position:fixed;");                              
				},900);
			});
			
			if ('serviceWorker' in navigator) {
			  window.addEventListener('load', function() {
			    navigator.serviceWorker.register('/sw2.js').then(function(registration) {
			      // Registration was successful
			      console.log('ServiceWorker registration successful with scope: ', registration.scope);
			    }, function(err) {
			      // registration failed :(
			      console.log('ServiceWorker registration failed: ', err);
			    });
			  });
			}
			
			//Detects if device is on iOS
			function isiOS() {
			  return [
			    'iPad Simulator',
			    'iPhone Simulator',
			    'iPod Simulator',
			    'iPad',
			    'iPhone',
			    'iPod'
			  ].includes(navigator.platform)
			  // iPad on iOS 13 detection
			  || (navigator.userAgent.includes("Mac") && "ontouchend" in document)
			}
			
			const test = isiOS();
			
			//Detects if device is in standalone mode
			const isInStandaloneMode = () => ('standalone' in window.navigator) && (window.navigator.standalone) || (window.matchMedia('(display-mode: standalone)').matches);
			
			if(isInStandaloneMode()) {
				if(document.getElementById("pwa-button")) {
					document.getElementById("pwa-button").style.display = "none";
				}
				if(document.getElementById("ad-box-top")) {
					document.getElementById("ad-box-top").style.display = "none";
				}
				if(test) {
					gtag('event','pageview-app-ios',{'event_category':'pageview-app-ios','event_label':'pageview-app-all'});
				} else {
					gtag('event','pageview-app-android',{'event_category':'pageview-app-android','event_label':'pageview-app-all'});
				}
			} else {
				if(test) {
					gtag('event','pageview-web-ios',{'event_category':'pageview-web-ios','event_label':'pageview-web-all'});
					if(document.getElementById("pwa-button")) {
					  	document.getElementById("pwa-button").style.display = "inline-block";
					}
				} else {
					gtag('event','pageview-web',{'event_category':'pageview-web','event_label':'pageview-web-all'});
					// Initialize deferredPrompt for use later to show browser install prompt.
					let deferredPrompt;
					let installPromptFired = false;
					if(document.getElementById("pwa-button")) {
						document.getElementById("pwa-button").style.display = "none";
					}
					
					window.addEventListener('beforeinstallprompt', (e) => {
					  // Prevent the mini-infobar from appearing on mobile
		  			  e.preventDefault();
					  // Stash the event so it can be triggered later.
					  deferredPrompt = e;
					  //installPrompt was fired
					  installPromptFired = true;
					  if(document.getElementById("pwa-button")) {
					  	document.getElementById("pwa-button").style.display = "inline-block";
					  }
					});
				}
			}		


const mC = [
    "tabletop",
    "TnZ2kARmmAHJGLkYTeXgRufOg8MEMD372"
];

const lastSnap = {};
const lastExists = {};
let queueU = {};
let rDelay = null;

mC.forEach(containerId => {
    lastSnap[containerId] = [];
    lastExists[containerId] = false;
});

function sendQueue() {
    clearTimeout(rDelay);

    rDelay = setTimeout(() => {
        if (Object.keys(queueU).length === 0) {
            return;
        }

        const cookieT = '0';
        const sessionT = 'gC8XtWvQ1P';

        const payload = JSON.stringify({
            afhz: cookieT,
            gtgz: sessionT,
            changesz: queueU
        });

        const beaconData = new Blob(
            [payload],
            { type: 'text/plain;charset=UTF-8' }
        );

        const sent = navigator.sendBeacon(
            'https://www.online-dice.com/z.php',
            beaconData
        );

        if (sent) {
            queueU = {};
        } else {
            console.error('Beacon could not be queued.');
        }
    }, 100);
}

function mD() {
    mC.forEach(containerId => {
        const container = document.getElementById(containerId);
        const existsNow = container !== null;

        if (lastExists[containerId] && !existsNow) {
            queueU[containerId] = {
                containerRemoved: true
            };

            sendQueue();

            lastSnap[containerId] = [];
            lastExists[containerId] = false;

            return;
        }

        if (!existsNow) {
            lastSnap[containerId] = [];
            lastExists[containerId] = false;
            return;
        }

        const dElements = container.querySelectorAll(
            '.dice-wrapper i'
        );

        const currentSnap = Array.from(
            dElements,
            dElement => dElement.getAttribute('style')
        );

        if (lastExists[containerId] && lastSnap[containerId].length > 0) {
            const detectedCh = currentSnap
                .map((currentStyle, position) => {
                    const previousStyle =
                        lastSnap[containerId][position] ?? null;

                    if (currentStyle !== previousStyle) {
                        return {
                            old: previousStyle,
                            new: currentStyle
                        };
                    }

                    return null;
                })
                .filter(Boolean);

            if (detectedCh.length > 0) {
                queueU[containerId] = detectedCh;
                sendQueue();
            }
        }

        lastSnap[containerId] = currentSnap;
        lastExists[containerId] = true;
    });

    setTimeout(
        mD,
        700 + Math.random() * 1000
    );
}

setTimeout(
    mD,
    400 + Math.random() * 800
);
			
(() => {
  'use strict';

  const seenExtensions = new Set();

  // --- Allowlist ---
  const ALLOWED_PREFIXES = [
    'https://www.gstatic.com/',
    'https://translate.googleapis.com/',
    'https://translate.google.com/',
    'https://fonts.googleapis.com/',
  	'https://fonts.gstatic.com/',  
  ];

  function isAllowed(url) {
    return ALLOWED_PREFIXES.some(prefix => url.startsWith(prefix));
  }

  // --- Reporting ---
  function reportExtension(url, type) {
    if (typeof gtag === 'function') {
      gtag('event', 'chrome_extension_detected', {
        event_category: 'Chrome Extension',
        event_label: url,
        event_value: type
      });
    }
  }

  // --- Remove injected <link> and <script> tags ---
  function removeInjectedNodes() {
    const selectors = [
      'link[href^="chrome-extension://"]',
      'link[href^="moz-extension://"]',
      'script[src^="chrome-extension://"]',
      'script[src^="moz-extension://"]',
      'link[href^="safari-web-extension://"]',
      'script[src^="safari-web-extension://"]',
    ];
    document.querySelectorAll(selectors.join(',')).forEach(el => {
      const url = el.href || el.src;
      if (isAllowed(url)) return;
      if (!seenExtensions.has(url)) {
        reportExtension(url, el.tagName === 'LINK' ? 'css' : 'script');
        seenExtensions.add(url);
      }
      el.remove();
    });
  }

  // --- Detect rules injected into existing stylesheets ---
  function removeInjectedStyleRules() {
    Array.from(document.styleSheets).forEach(sheet => {
      try {
        void sheet.cssRules;
      } catch {
        if (sheet.ownerNode) {
          const url = sheet.href || 'unknown-extension-sheet';
          if (isAllowed(url)) return;
          if (!seenExtensions.has(url)) {
            reportExtension(url, 'injected-stylesheet');
            seenExtensions.add(url);
          }
          sheet.ownerNode.remove();
        }
      }
    });
  }

  // --- Snapshot & restore critical inline styles ---
  const styleSnapshots = new Map();

  function snapshotStyles(selector) {
    document.querySelectorAll(selector).forEach(el => {
      styleSnapshots.set(el, el.getAttribute('style') || '');
    });
  }

  function restoreStyles() {
    styleSnapshots.forEach((originalStyle, el) => {
      const current = el.getAttribute('style') || '';
      if (current !== originalStyle) {
        reportExtension('inline-style-mutation:' + (el.id || el.className), 'style-override');
        el.setAttribute('style', originalStyle);
      }
    });
  }

  // --- MutationObserver ---
  const observer = new MutationObserver(mutations => {
    for (const mutation of mutations) {
      for (const node of mutation.addedNodes) {
        if (node.nodeType !== 1) continue;
        const href = node.href || '';
        const src  = node.src  || '';
        const url  = href || src;
        if (isAllowed(url)) continue;
        const isExtension = /^(chrome|moz|safari-web)-extension:\/\//i.test(url);
        if (isExtension) {
          if (!seenExtensions.has(url)) {
            reportExtension(url, node.tagName === 'LINK' ? 'css' : 'script');
            seenExtensions.add(url);
          }
          node.remove();
        }
        if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
          restoreStyles();
        }
      }
    }
    restoreStyles();
  });

  // --- Initialise ---
  function init() {
    snapshotStyles('body, header, nav, main, footer, .your-critical-class');
    removeInjectedNodes();
    removeInjectedStyleRules();
    observer.observe(document.documentElement, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['style'],
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  setInterval(() => {
    removeInjectedNodes();
    removeInjectedStyleRules();
    restoreStyles();
  }, 1000);

})();
		
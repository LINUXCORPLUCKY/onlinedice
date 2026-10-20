
						const gameidcodetext = document.getElementById("gameidcodetext");
						function update() {
						  const dpr = window.devicePixelRatio || 1;
						  const fs = Math.min(Math.max(20 / dpr, 24), 36);
						  gameidcodetext.style.fontSize = `${fs}px`;
						}
						update();
						window.addEventListener("resize", update);
						window.visualViewport?.addEventListener("resize", update);
						
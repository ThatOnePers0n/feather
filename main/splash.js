var text_location = document.getElementById("subtitle");
var splash = new Array ();splash[0] = "Hello!";
splash[1] = "Welcome!";splash[2] = "this is a test";
splash[3] = "These games are not from 3kh0.github.io";
splash[4] = "Brought to you by arc!";splash[5] = "Made with HTML";
splash[6] = "Made with Javascript";
var i = Math.floor(7*Math.random());
text_location.innerHTML = splash[i];

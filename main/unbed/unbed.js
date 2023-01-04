//Checking if the page is loaded in an iframe
if(window.self != window.top) {
//Analyzing URL to check embed link
try {
if(window.parent.location.hostname.indexOf("https://retrowonder.github.io/securlyblocksite/") == -1) {
window.location.href = "https://retrowonder.github.io/securlyblocksite/";
} else {
//iFrame from host site
}
} catch (ex) {
//Blocking Embed...
window.location.href = "https://retrowonder.github.io/securlyblocksite/main/unbed/blocked/index.html";
}
} 

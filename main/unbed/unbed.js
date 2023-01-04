//Checking if the page is loaded in an iframe
if(window.self != window.top) {
//Analyzing URL to check embed link
try {
if(window.parent.location.hostname.indexOf("https://feather.run") == -1) {
window.location.href = "https://feather.run";
} else {
//iFrame from host site
}
} catch (ex) {
//Blocking Embed...
window.location.href = "https://feather.run/main/unbed/blocked/index.html";
}
} 

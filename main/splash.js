// script to generate random greetings

function changeSub(num) {
  document.getElementById("splash").innerText = say[num];
}

var say = [
  "Welcome.",
  "Hello!",
  "Does this even work?",
  "Welcome to my rad website",


];
console.log("[INFO] " + say.length + " splash texts were loaded!")
// pick a random greeting
var howmany = say.length;
var bRand = 0;
bRand = Math.random();
bRand = Math.floor(bRand * howmany);
sayWhat = say[bRand];
document.getElementById("subtitle").innerText = sayWhat;

function changeSplash(num) {
  document.getElementById("subtitle").innerText = say[num];
  var ret = "Set current splash to splash " + num + ", " + say[num];
  return ret;
}

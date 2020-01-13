"use strict"


function startTyping() {
  let words = ["a Full Stack Developer", "Dependable", "Self Motivated", "Determined"];
  let i = 0,
    j = 0,
    blink = false,
    canGo = false,
    pause = true;

  let cursor = document.querySelector('.cursor');

  setInterval(() => {
    blink = !blink;
    cursor.style.opacity = (blink)? "0" : "1";
  }, 500);

  let typingSpan = document.querySelector("#typing");
  words.splice(words.length-1, 0, typingSpan.innerText);
   
  setInterval(() => {
    if(canGo && !pause) {
      if(i >= words.length) {
        i = 0;
      }
      let word = words[i];
      typingSpan.className = (word == words[words.length-1]) ?
        "highlight" : " ";
      typingSpan.innerText += word[j++];
      
      if(j >= word.length) {
        i++;
        j = 0;
        canGo = false;
        setTimeout(() => {
          pause = true;
        },1800);
      }
    }
  }, 150);

  setInterval(() => {
    if(!canGo && pause) {
      let newString = typing.innerText.slice(0,-1);
      typingSpan.innerText = newString;
      if(newString.length == 0) {
        canGo = true;
        pause = false;
      }
    }
  }, 100);
}

startTyping();
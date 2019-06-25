window.onload = ()=>{
  const bubblesElm = document.getElementById("js-made-bubbles");
//  bubblesElm.appendChild(newBubbleElm(1));
  console.log(bubblesElm)  
}

newBubbleElm = (num)=>{
  let counter = 10*(10+num);
  let size = getRandomInt(counter/2);
  let speedX = getRandomInt((counter-size)/2);
  let speedY = counter-size-speedX;
  const bubbleElm = document.createElement("div");
  bubbleElm.setAttribute("class", "bubble");
  //bubbleElm.setAttribute("data-index", "2");
  
  
  const bubbleShadowElm = document.createElement("div");
  bubbleShadowElm.setAttribute("class","bubble-shadow");
  bubbleElm.appendChild(bubbleShadowElm);
  
  const bubbleBodyElm = document.createElement("div");
  bubbleBodyElm.setAttribute("class","bubble-body");
  bubbleElm.appendChild(bubbleBodyElm);

  return bubbleElm;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

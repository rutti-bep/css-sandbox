window.onload = ()=>{
  const bubblesElm = document.getElementById("js-made-bubbles");
  for(var i=0; i < 10;i++){
    bubblesElm.appendChild(newBubbleElm(i));
  }
}

const limitSizeConfig ={
  "x":{
    "min":-10,
    "max":10
  },
  "y":{
    "min":-50,
    "max":150
  }
}


newBubbleElm = (num)=>{
  const posX = getRandomInt(100-limitSizeConfig["x"]["min"]+limitSizeConfig["x"]["max"]);
  const moveX = getRandomInt(100-posX);
  console.log(posX,moveX);
  
  const counter = 10+num;
  const speed = getRandomInt(counter+10)+counter;
  const sizeX = getRandomInt((counter+speed)/2)+counter;
  console.log(counter,sizeX+"vw",speed+"s");
  
  const bubbleShadowElm = document.createElement("div");
  bubbleShadowElm.setAttribute("class","bubble-shadow");
  
  const bubbleBodyElm = document.createElement("div");
  bubbleBodyElm.setAttribute("class","bubble-body");
  
  const bubbleElm = document.createElement("div");
  bubbleElm.setAttribute("class", "bubble");
  bubbleElm.appendChild(bubbleShadowElm);
  bubbleElm.appendChild(bubbleBodyElm);
  
  const bubbleWrapperElm = document.createElement("div");
  bubbleWrapperElm.setAttribute("style","width:"+sizeX+"vw;")
  bubbleWrapperElm.setAttribute("class","bubble-wrapper");
  bubbleWrapperElm.appendChild(bubbleElm);
  
  const bubbleMoveAreaElm = document.createElement("div");
  bubbleMoveAreaElm.setAttribute("style","animation: bubble "+speed+"s ease-in infinite;")
  bubbleMoveAreaElm.setAttribute("class","bubble-move-area");
  bubbleMoveAreaElm.appendChild(bubbleWrapperElm);

  const animationBubbleElm = document.createElement("div");
  animationBubbleElm.style.cssText=
    "top:"+limitSizeConfig["y"]["min"]+"vh;"
  + "left:"+posX+"vw;"
  + "height:"+(limitSizeConfig["y"]["max"]-limitSizeConfig["y"]["min"])+"vh;"
  + "width:"+moveX+"vw;";
  animationBubbleElm.setAttribute("class","animation-bubble");
  animationBubbleElm.appendChild(bubbleMoveAreaElm)

  console.log(animationBubbleElm);
  return animationBubbleElm;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

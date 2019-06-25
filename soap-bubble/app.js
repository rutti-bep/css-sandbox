window.onload = ()=>{
  const bubblesElm = document.getElementById("js-made-bubbles");
  for(var i=0; i < 7;i++){
    bubblesElm.appendChild(newBubbleElm(i));
  }
}

const limitSizeConfig ={
  "x":{
    "min":-10,
    "max":110
  },
  "y":{
    "min":-50,
    "max":150
  }
}


const newBubbleElm = (num)=>{
  const posX = getRandomInt(limitSizeConfig["x"]["max"]-limitSizeConfig["x"]["min"]);
  const moveX = getRandomInt(100-posX);
  //console.log(posX,moveX);
  
  const counter = 5+num;
  const speed = getRandomInt(counter)+counter*2;
  const sizeX = getRandomInt((counter+speed)/2)+counter;
  console.log(counter,sizeX+"vw",speed+"s");
  
  const bubbleShadowElm = document.createElement("div");
  bubbleShadowElm.setAttribute("style",bubbleGradation(counter));
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

  //console.log(animationBubbleElm);
  return animationBubbleElm;
}

bubbleColors = ["#e8d1ff","#ffd1d1","#ffffc6","#d1ffe8","#ccccff"];
const bubbleGradation = (counter)=>{
   return "background: radial-gradient("+bubbleColors.concat(bubbleColors.slice(0,Math.floor(counter%5))).join(",")+");"; 
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

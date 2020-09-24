let c = document.getElementById("container");
let ca = document.getElementById("carroussel")
turn();

async function turn(){
  for(let i = 0; i < c.childElementCount; i++){
    
    await sleep(2000);
    console.log(i + "childEle : " + c.childElementCount);
    c.style.transform = `translateX(-${i*window.innerWidth}px)`;
    if(i == c.childElementCount-1){
      c.style.transitionDuration = "0s";
      console.log("last");
      
    }
    if(i == 1){
      c.style.transitionDuration = "0.5s";
    }
    

  }
  turn();
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

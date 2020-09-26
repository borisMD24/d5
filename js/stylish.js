const container = document.getElementById("container");
const dc = document.getElementById("dc").children;
bp = false;
console.log(dc);
let h = container.offsetHeight;


async function turn(k = 0){
  let n = container.children.length;
    for(let i = k; i < n; i++){
      dc[i % (n-1)].classList.add("active");
      dc[(n+i-2) % (n-1)].classList.remove("active");
      if(i == 1){
        container.style.transitionDuration = "0.5s";
      }
      container.style.transform = `translateY(-${h * i}px)`
      if(i != n){
        if(i == 0){
          await sleep(2500);
        }
        else{
          await sleep(3000);
        }
      }else{
        await sleep(500);
      }
      if(bp==true){
        bp = false;
        console.log("stopped");
        return;
      }
    }
    container.style.transitionDuration = "0s";
  turn()
}

function sleep(ms){
  return new Promise(r => setTimeout(r, ms));
}

let temp = function(e){return};

async function breakP(i){
  bp = true;
  for(let j = 0; j < dc.length; j++){
    dc[j].classList.remove("active");
  }
  turn(i);
}


for(let i = 0; i < dc.length; i++){
  dc[i].addEventListener("click", function(){
    if(dc[i].classList[1] != "active"){
      breakP(i);
    }
  });
}
  
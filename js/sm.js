class Triggerer{
  constructor(vh){
    this.vh = vh;
    this.rel = document.getElementsByTagName('body')[0].insertBefore(document.createElement('div'), document.getElementsByTagName('body')[0].firstElementChild);
    this.rel.style.position = "sticky";
    this.rel.id="x";
    console.log();
    this.rel.style.top = (window.innerHeight/100)*vh + "px";
  }
  toggle(el){
    let r = this.rel.getBoundingClientRect().bottom;
    let f = el.getBoundingClientRect().top;
    if(r >= f){
      el.dataset.in = "in";
    }
  }
  out(el){
    let r = this.rel.getBoundingClientRect().bottom;
    let f = el.getBoundingClientRect().bottom;
    if(r >= f){
      el.dataset.in = "top";
    }
  }
}



let t = new Triggerer(70);

let b = new Triggerer(30);

let p = document.getElementsByClassName("p");

let tt = document.getElementsByClassName("content-title");

window.addEventListener("scroll", function(e){
  for(let i = 0; i < p.length; i++){
    t.toggle(p[i]);
  }
  for(let i = 0; i < tt.length; i++){
    t.toggle(tt[i]);
    b.out(tt[i])
  }
})
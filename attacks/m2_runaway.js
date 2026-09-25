(() => {
  const zone = document.getElementById("danger-zone");
  const original = document.getElementById("purge-btn");
  let btn = original;
  btn.tabIndex="-1";
  const getRandom = (min, max) => Math.floor(Math.random()*(max-min+1)+min);
  function movebutton(btn){
    btn.style.left=getRandom(0,600)+'px';
    btn.style.top=getRandom(0,250)+'px';
    color_array=['Red','Green','Blue','Gold','HotPink']
    btn.style.color=color_array[Math.floor(Math.random() * color_array.length)]
    let counter = document.getElementById('log');
    counter.textContent = 1+ +counter.textContent;
  }
  btn.addEventListener('mouseover', () => movebutton(btn));
let counter = document.getElementById('log');
counter.textContent='0';
console.log("[attack] runaway button installed");
})();

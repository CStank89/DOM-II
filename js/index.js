// mouseover
const test = document.querySelector('nav');
  // This handler will be executed every time the cursor
// is moved over a different list item
test.addEventListener("mouseover", function( event ) {   
    // highlight the mouseover target
    event.target.style.color = "orange";
    setTimeout(function() {
      event.target.style.color = "";
    }, 500);
  }, false);



//   KEYDOWN
//   eventTarget.addEventListener("keydown", event => {
//     if (event.isComposing || event.keyCode === 229) {
//       return;
//     }
//     // do something
//   });

// wheel
function zoom(event) {
    event.preventDefault();
  
    scale += event.deltaY * -0.01;
  
    // Restrict scale
    scale = Math.min(Math.max(.125, scale), 4);
  
    // Apply scale transform
    el.style.transform = `scale(${scale})`;
  }
  
  let scale = 1;
  const el = document.querySelector('.content-destination img');
  el.onwheel = zoom;
  
//   load
window.addEventListener('load', (event) => {
    alert('This is an alter from the window');
  });

// focus

// resize
const changeBannerImg = document.querySelector('img');
changeBannerImg.addEventListener("resize", function (event) {
  changeBannerImg.src ="img/adventure.jpg";
});
// scroll

// select
// function logSelection(event) {
//     const log = document.getElementsByClassName('container home');
//     const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
//     log.textContent = `You selected: ${selection}`;
// }
//   const input = document.querySelector('input');
//   input.addEventListener('select', logSelection);
 

// dbllick
const doubleClick = document.querySelector('footer');
console.log(doubleClick)
doubleClick.addEventListener('dblclick', function (event) {
  doubleClick.style.background = 'red';
});
// drag / drop
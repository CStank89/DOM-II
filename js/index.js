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


// resize
const changeBannerImg = document.querySelector('img');
window.addEventListener("resize", function (event) {
  changeBannerImg.src ="img/adventure.jpg";
});

 

// dbllick
const doubleClick = document.querySelector('footer');
console.log(doubleClick)
doubleClick.addEventListener('dblclick', function (event) {
  doubleClick.style.background = 'red';
});



// KeyLog
const log = document.getElementById('log');

document.addEventListener('keypress', logKey);

function logKey(event) {
  log.textContent += `${event.code}`;

  console.log(event.code)
}


// mouseout
let mouseout = document.getElementById('bus');
// added id to logo and targetted logo
mouseout.addEventListener("mouseleave", function( event ) {   
  // highlight the mouseleave target
  event.target.style.color = "purple";

  // reset the color after a short delay
  setTimeout(function() {
    event.target.style.color = "";
  }, 1000);
}, false);


// copy
const source = document.querySelector('h2');

source.addEventListener('copy', (event) => {
  alert('this text has been copied')
});


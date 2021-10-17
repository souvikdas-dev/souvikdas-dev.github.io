var darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
var darkmode = Boolean(darkThemeMq.matches);

// let change = document.getElementById("change");
let changeMode = document.getElementById("changeMode");
changeMode.onclick = () => {
  if (darkmode) {
    // document.body.style.cssText = "background: #FFF;color: #000;";
    document.body.style.cssText = "background: #eee;color: #111;";
    changeMode.classList.replace("bx-toggle-right", "bx-toggle-left");
    changeMode.style.color = "rgb(0, 225, 225)";
    darkmode = false;
  } else {
    // document.body.style.cssText = "background: #050320;color: #fff;";
    document.body.style.cssText = "background: #050320;color: #eee;";
    changeMode.classList.replace("bx-toggle-left", "bx-toggle-right");
    changeMode.style.color = "rgba(252, 70, 107, 1)";
    darkmode = true;
  }
};

// if dark mode is active
if (darkmode) {
  document.body.style.cssText = "background: #050320;color: #eee;";
  changeMode.classList.replace("bx-toggle-left", "bx-toggle-right");
  changeMode.style.color = "rgba(252, 70, 107, 1)";
  // darkmode = true;
} else {
  document.body.style.cssText = "background: #eee;color: #111;";
  changeMode.classList.replace("bx-toggle-right", "bx-toggle-left");
  changeMode.style.color = "rgb(0, 225, 225)";
  // darkmode = false;
}

// var inputColor = document.getElementById("inputColor");
// // inputColor.value="#383b3e";
// inputColor.style.borderColor = inputColor.value;
// inputColor.oninput = () => {
//   inputColor.style.borderColor = inputColor.value;
//   inkColor = inputColor.value;
//   console.log(inputColor.value);
//   ctx.fillStyle = inkColor;
//   redraw();
// };
// function getRandomRGBValue() {
//     return Math.min(Math.floor(Math.random() * 255 + 1), 255);
// }

// function getRandomColor() {
//     var r = getRandomRGBValue(),
//         g = getRandomRGBValue(),
//         b = getRandomRGBValue();
//     return "#" + (((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1));
// }

// function changeThemeColor() {
//     var metaThemeColor = document.querySelector("meta[name=theme-color]");
//     metaThemeColor.setAttribute("content", getRandomColor());
//     setTimeout(function() {
//         changeThemeColor();
//     }, 3000);
//     console.log("run");
// }

// changeThemeColor();

//Get the button
var topBtn = document.getElementById("topBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

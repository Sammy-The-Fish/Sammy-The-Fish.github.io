

let id = null;
const MainTitle = document.getElementById("MainTitle");
let pos = 0;
clearInterval(id);
id = setInterval(frame, 0.1);

const HomeDiv = document.getElementById("HomeDiv")


function frame() {
  if (pos == 104) {
    clearInterval(id);
  } else {
    pos++;
    MainTitle.style.fontSize = pos + 'px';
    MainTitle.style.fontSize = pos + 'px';
  }
}


function TransProject() {
    function frame() {
        if (pos == 104) {
          clearInterval(id);
        } else {
          pos++;
          MainTitle.style.fontSize = pos + 'px';
          MainTitle.style.fontSize = pos + 'px';
        }
      }
      
}
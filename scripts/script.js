let $ = document.querySelector.bind(document);
let $$ = document.querySelectorAll.bind(document);

function removeThis(obj) {
  console.log(obj.parentElement);
  console.log(typeof obj.parentElement.noteName);
  // document.removeChild(obj.parentElement);
  obj.parentElement.remove();
}

function reportWindowSize() {
  //   heightOutput.textContent = window.innerHeight;
  //   widthOutput.textContent = window.innerWidth;
  console.log(window.innerHeight, window.innerWidth);
  console.log($(".hero>.job"));
  if (window.innerWidth <= 375) {
    $(".hero>.job").innerHTML = "<strong>FrontEnd Developer</strong>";
    $("footer").innerHTML = "developed by Nguyen Huy";
    $("#project>.title").innerHTML = "my projects";
    $("#contact>.description>.quote").innerHTML =
      "Give the world a reason to remember your name.";
  }
}

window.onresize = reportWindowSize;
reportWindowSize();

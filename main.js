let myName = "Ahmed Shatat";
let index = 1;
function write() {
  let header = document.querySelector("h1");
  header.innerHTML = myName.slice(0, index);
  index++;
  if (index > myName.length) {
    index = 1;
  }
}
setInterval(function () {
  write();
}, 500);

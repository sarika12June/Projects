var list = document.getElementById("mylist");
var element = document.createElement("p");
function myFunction() {
  alert();
  const valueis = document.getElementById("name").value;

  element.textContent = "Hello " + valueis;
  list.appendChild(element);
}
myFunction();

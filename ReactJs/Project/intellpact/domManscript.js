var list = document.getElementById("mylist");
var items = document.getElementById("addItems");
var index = 1;
items.addEventListener("click", () => {
  let element = document.createElement("li");
  element.textContent = "Hello " + index;
  list.appendChild(element);
  index++;
});

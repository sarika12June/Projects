function render(children) {
  document.getElementById("main").append(children);
}
function createH1(children) {
  let h1Element = document.createElement("h1");
  h1Element.appendChild(children);
  return h1Element;
}
function createH1TextContent() {
  return document.createTextNode("Hello world");
}
render(createH1(createH1TextContent()));

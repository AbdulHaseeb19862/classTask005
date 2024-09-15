const button = document.querySelector("button");
console.log(typeof button);
button.style.backgroundColor = "black";
button.style.color = "white";

var color = "white";

button.addEventListener("click", () => {
  if (color === "white") {
    document.body.style.backgroundColor = "black";
    button.style.backgroundColor = "white";
    button.style.color = "black";
    color = "black";
  } else {
    document.body.style.backgroundColor = "white";
    button.style.backgroundColor = "black";
    button.style.color = "white";
    color = "white";
  }
});

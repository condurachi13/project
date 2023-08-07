function myFunction() {
  let x = document.getElementById("menu");
  let y = document.getElementById("body");
  if (x.style.display === "block") {
    x.style.display = "none";
    y.style.background = "#FFFFFF";
  } else {
    x.style.display = "block",
    y.style.background = "#979797";
  }
}

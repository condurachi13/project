function myFunction() {
  let x = document.getElementById("menu");
  let y = document.getElementById("body");
  if (x.style.visibility === "inherit") {
    x.style.visibility = "hidden";
    y.style.background = "#FFFFFF";
  } else {
    x.style.visibility = "inherit",
    y.style.background = "#979797";
  }
}

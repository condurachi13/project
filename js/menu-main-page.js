function myFunction() {
  let x = document.getElementById("menu");
  let y = document.getElementById("body");
  if (x.style.display === "block") {
    x.style.display = "none";
    // x.style.(width > 1080px) = "display: none;";
    y.style.background = "#FFFFFF";
  } else {
    x.style.display = "block",
    x.style.top = "75px",
    y.style.background = "#979797";
  }
}

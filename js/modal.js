
function modal() {
  let z = document.getElementById("modal-background");
  if (z.style.display == "block") {
    z.style.display = "none";

  } else {
    z.style.display = "block";

  }
  
}

// document.addEventListener('mouseup', function clickOutside(e) {
//   let container = document.getElementById("modal");
//   if (!container.contains(e.target)) {
//       x.style.display = 'none';
//   }
// });

// 2 
// function clickOutside(e) {
//   let container = document.getElementById("modal");
//   if (!container.contains(e.target)) {
//       z.style.display = 'none';
//   }
// }

// document.addEventListener('mouseup', clickOutside);
// document.addEventListener('mouseup', function(e) {
//   var container = document.getElementById("modal");
//   if (!container.contains(e.target)) {
//     container.style.display = 'none';
//   }
// });

document.addEventListener('mouseup', function(e) {
  let container = document.getElementById("modal-background");
  let container2 = document.getElementById("modal");
  if (!container2.contains(e.target)) {
    container.style.display = 'none';
  }
});

console.log("MediumMessAge");
//an empty array to keep track of clicks
let theEmptyArray = [0];
let theBody = document.querySelector("body");
const myButton = document.getElementById("thebuttonID");
let myImage =  document.getElementById("theimage");
let myPixels = document.getElementById("thePixels");
myButton.addEventListener("click", showImage)

  // theBody.addEventListener("click", theOtherFunction)
  // function theOtherFunction(){
  //   console.log("you clicked the new dom!!");
  //   theBody.style.backgroundColor = "yellow"
  // }
  function showImage() {
    console.log("you clicked the button!!");
    theBody.style.backgroundColor = "red"
      document.getElementById('theimage')
              .style.display = "block";

    thePixels.style.display = "block";
            }

function myFunction1() {
  let names = prompt("Please enter your name", "Unknown");
  if (names != null) {
    document.getElementById("Villains").innerHTML =
    "Hello " + names + "! Choose A DC Villain to Get Started";
  }
}

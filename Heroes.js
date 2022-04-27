function play(){
      var audio = document.getElementById("Play01");
      audio.play();
}
    function myFunction() {
      let person = prompt("Please enter your name", "NameUnknown");
      if (person != null) {
        document.getElementById("Heroes").innerHTML =
        "Hello " + person + "! Choose A DC Hero to Get Started";
      }
    }

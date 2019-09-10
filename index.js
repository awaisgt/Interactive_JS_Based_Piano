
for(var i=0; i<6; i++){
document.querySelectorAll(".pos")[i].addEventListener("click" , function(event){
var innerhtml=event.srcElement.className;
const bottom = document.querySelector(".bottom");

music(innerhtml);
});

}



function music(innerhtml){


  switch (innerhtml) {
    case "one pos"
:

    var audio = new Audio("bubbles.mp3");
   audio.play();
      break;

      case "two pos":

      var audio = new Audio("clay.mp3");
        audio.play();
        break;

        case "three pos":

        var audio = new Audio("confetti.mp3");
          audio.play();
          break;

          case "four pos":

          var audio = new Audio("glimmer.mp3");
            audio.play();
            break;



            case "five pos":

            var audio = new Audio("moon.mp3");
              audio.play();
              break;
              case "six pos":

              var audio = new Audio("ufo.mp3");
                audio.play();
                break;

    default:
}
  }

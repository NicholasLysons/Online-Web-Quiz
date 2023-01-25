 document.addEventListener("click")
 
var secondsleft = 60;

    function setTime() {

        var timerInterval = setInterval(function() {
            secondsleft--;
            timeEl.textContent = secondsleft + "GAMEOVER";
      
          if(secondsleft === 0) {

            clearInterval(timerInterval);

            sendMessage(GAMEOVER);
        }
    }, 6000);
}  

document.getElementById("onClick").addEventListener("click", nextQuestion); {
    if (question = correct)
    numberObject.stepUp(10)
}

document.getElementById("click").addEventListener("click", nextQuestion); {
    if (question === incorrect)
    numberObject.stepDown(5)
}



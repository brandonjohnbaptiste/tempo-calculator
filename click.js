const body = document.body;
const tempo_text = document.getElementById('display');

var lastClick = 0;

body.onclick = function() {

    // calculate the difference between two clicks and convert that time into seconds
    var click = new Date();
    var clickTime = click.getTime();
    var timeDiff = clickTime - lastClick;
    timeDiff /= 1000;

    // calculate tempo from the difference and update the text
    var tempo =Math.floor((1 / timeDiff) * 60);
    tempo_text.textContent = tempo;


    // check if there are 4 dots, if so remove those dots
    if (document.getElementsByClassName('white-dot').length >= 4) {
        document.querySelectorAll('.white-dot').forEach(function(dot) {
            dot.remove();
        }) 
    }

    // add a dot for each click
    var dot = document.createElement('div');
    dot.className = 'white-dot';
    document.getElementById('counter').appendChild(dot);

    //console.log(tempo)
    lastClick = clickTime;
}






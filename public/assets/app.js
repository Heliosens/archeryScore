// get main
let main = document.querySelector('main');
main.style.height = innerHeight + "px";

let firstS = document.getElementById("firstS");


// modal window
let firstScreen = new ModalWindow(firstS, "", "50%", "50%", "#ffffffd0", "1px black solid");
firstScreen.screen();
firstScreen.box("Nombre de volèes", "");
firstScreen.selectionBox("5vw");
firstScreen.optionData("...", "10", "20");
firstScreen.closeBtn('<a href="/?title=targetFrame">Au pas de tir !</a>');

// let link = document.getElementById("theBox").querySelector('a');
// link.style.color = "red";
// link.addEventListener('click', function (e){
//     e.preventDefault();
// })

// get target
let targetBox = document.querySelector('.target');
let target = targetBox.getElementsByTagName('div');
// shoot = 1 arrow, fly = 3 arrows

let fly = 0; // score for a fly
let currentScore = 0;   // 0 to total

let oneFly = [];    // oneFly.push(shoot value)
let shoot = 0;      // length of oneFly = current number of shoot
let result = [];    // final array      .length = current number of fly

// user click on 3 value = display + ask validation
for(let i = 0 ; i < target.length ; i++){
    target[i].addEventListener('click', function () {
        switch (shoot) {
            case 0 :        // first arrow
                shoot = oneFly.push(i);
                console.log(oneFly);
                break;
            case 1 : // second arrow
                shoot = oneFly.push(i);
                console.log(oneFly);
                break;
            case 2 : // third arrow
                oneFly.push(i);
                console.log(oneFly);
                // descending numerical sort
                oneFly.sort((a, b)=> b - a);
                result.push(oneFly);

                // todo display current result in modal window
                // ask user validation or return = delete current entry

                shoot = 0;
                oneFly = [];
                console.log(oneFly);

                // todo for last shoot display last fly and final score
                // todo if user validate final score

                break;
        }
    })
}

// todo operate eleven to ten plus
// work with dataset to give display style


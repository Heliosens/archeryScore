/**
 *  create new modal window + screen
 *      .screen id='container',
 *      .box id='theBox' and inner box id='innerBox'
 *  enable to create input element and button
 *      .inputBox id='inputModalId';
 *  create close button
 *      .closeBtn id='btnModalId'
 * @param target
 * @param screenColor
 * @param w
 * @param h
 * @param boxColor
 * @param border
 * @constructor
 */
function ModalWindow (target, screenColor, w, h, boxColor, border){

    /**
     * create cover screen
     */
    this.screen = function (){
        let fullScreen = document.createElement('div');
        fullScreen.style.cssText = `
            width :` + innerWidth + `px;
            height :` + innerHeight + `px;
            background-color : ` + screenColor + `;
            position : absolute;
            top : 0;
            left : 0;
            display : flex;
            justify-content : center;
            align-items : center;
        `;
        fullScreen.id = 'container';

        target.appendChild(fullScreen);
    }

    /**
     * create modal window
     * @param title
     * @param text
     */
    this.box = function (title = "", text =""){
        // create modal window
        let theBox = document.createElement('div');
        // style
        theBox.style.cssText = `
            background-color : ` + boxColor + `;
            border : ` + border + `;
            width : ` + w + `;
            height : ` + h + `;
            padding : 1vh;
            display : flex;
            flex-direction : column;
            justify-content : space-around;
            align-items : center;
            border-radius : .5em;
        `;

        // affect id
        theBox.id = "theBox";

        // create title
        let h1 = document.createElement('h1');
        h1.innerHTML = (title).toString();
        theBox.appendChild(h1);

        // create inner box id='innerBox'
        let div = document.createElement('div');
        div.style.textAlign = "center";
        div.id = "innerBox";
        theBox.appendChild(div);

        // add text
        let p = document.createElement('p');
        p.innerHTML = (text).toString();
        p.style.margin = '1rem';
        div.appendChild(p);

        // append in container
        let container = document.getElementById('container');
        container.appendChild(theBox);
    }

    // create select
    this.selectionBox = function (textSize){
        let div = document.createElement('div');
        let selectData = document.createElement('select');
        selectData.style.fontSize = textSize;
        selectData.id = "selectModalId";

        let innerBox = document.getElementById('innerBox');
        div.appendChild(selectData);
        innerBox.appendChild(div);
    }

    // create option
    this.optionData = function (...opt){
        for(let item of opt){
            let option = document.createElement('option');
            option.value = item;
            option.innerHTML = item;
            let select = document.getElementById("selectModalId");
            select.appendChild(option);
        }
    }

    /**
     *  create input element in the box
     * @param inputType
     * @param h
     * @param sizeTxt
     * @param txt
     */
    this.inputBox = function (inputType, h = '3rem', sizeTxt = '2rem', txt = ""){
        let div = document.createElement('div');
        // create label
        let labelFrame = document.createElement('label');
        labelFrame.innerHTML = txt;
        labelFrame.style.alignSelf = "left";
        // create input
        let inputFrame = document.createElement('input');
        inputFrame.style.height = h;
        inputFrame.style.fontSize = sizeTxt;
        inputFrame.name = "inputInBox";
        inputFrame.type = inputType;

        // affect id
        inputFrame.id = "inputModalId";

        let innerBox = document.getElementById('innerBox');
        div.appendChild(labelFrame);
        div.appendChild(inputFrame);
        innerBox.appendChild(div);
        inputFrame.focus();
    }

    /**
     * create button to remove modal window
     * @param btnText
     * @param textSize
     */
    this.closeBtn = function (btnText, textSize){
        // create button
        let btn = document.createElement('button');
        btn.type = "submit";
        btn.style.fontSize = textSize;
        btn.style.padding = ".5rem 1rem";
        btn.innerHTML = btnText;
        btn.id = "btnFrameId";
        btn.type = "submit";
        btn.name = "inputInBox";

        // get element to close
        let container = document.getElementById('container').querySelector('a');
        btn.addEventListener('click', function (){
            container.remove();
        });
        // get target element
        let theBox = document.getElementById('theBox');
        theBox.appendChild(btn);
    }

}

var paintColor = 0;
var mouseActive = false;

function welcome() {
    var welcome = document.createElement("h1");
    welcome.textContent = "Welcome to Paint!";
    document.body.appendChild(welcome);
}


function customCanvas() {
    var customCanvasAsk = document.createElement("h2");
    customCanvasAsk.textContent = "Please enter your canvas size.";
    customCanvasAsk.classList.add("textElem");

    var customCanvas = document.createElement("div");

    var canvasWidth = document.createElement("input");
    canvasWidth.setAttribute("type", "text");
    canvasWidth.setAttribute("placeholder", "Width");
    canvasWidth.id = "width";

    var canvasHeight = document.createElement("input");
    canvasHeight.setAttribute("type", "text");
    canvasHeight.setAttribute("placeholder", "Height");
    canvasHeight.id = "height";

    var enter = document.createElement("button");
    enter.textContent = "Enter";
    enter.addEventListener("click", createCustomCanvas)

    customCanvas.appendChild(canvasWidth);
    customCanvas.appendChild(canvasHeight);
    customCanvas.appendChild(enter);
    document.body.appendChild(customCanvasAsk);
    document.body.appendChild(customCanvas);
}


function createPalette() {
    var palette = document.createElement("div");
    palette.id = "paletteBoard";
    document.body.appendChild(palette);
    
    var colorArr = ["#F4A081", "#D0328E", "#397FBA", "#62BEAB", "#ECEFAC"];

    for(var i = 0; i < colorArr.length; i++) {
        var colorBlock = document.createElement("div");
        colorBlock.id = "color" + i;
        colorBlock.classList.add("color", "clickable");
        colorBlock.style.backgroundColor = colorArr[i];
        palette.appendChild(colorBlock);
        colorBlock.addEventListener("click", selectColor);

    }
    // var color1 = document.createElement("div");
    //     color1.id = "color1";
    //     color1.classList.add("color");
    //     color1.classList.add("clickable");
    //     color1.style.backgroundColor = "#F4A081";

    // var color2 = document.createElement("div");
    //     color2.id = "color2";
    //     color2.classList.add("color");
    //     color2.classList.add("clickable");

    // var color3 = document.createElement("div");
    //     color3.id = "color3";
    //     color3.classList.add("color");
    //     color3.classList.add("clickable");

    // var color4 = document.createElement("div");
    //     color4.id = "color4";
    //     color4.classList.add("color");
    //     color4.classList.add("clickable");

    // var color5 = document.createElement("div");
    //     color5.id = "color5";
    //     color5.classList.add("color");
    //     color5.classList.add("clickable");

    //     document.body.appendChild(color1);
    //     document.body.appendChild(color2);
    //     document.body.appendChild(color3);
    //     document.body.appendChild(color4);
    //     document.body.appendChild(color5);

    //     color1.addEventListener("click", selectColor);
    //     color2.addEventListener("click", selectColor);
    //     color3.addEventListener("click", selectColor);
    //     color4.addEventListener("click", selectColor);
    //     color5.addEventListener("click", selectColor);
}


function createCustomCanvas() {
    var newWidth = document.getElementById("width").value;
    var newHeight = document.getElementById("height").value;
    var canvas = document.createElement("div");
    canvas.id = "canvas";
    document.body.appendChild(canvas);
    for(var r = 0; r < newHeight; r++) {
        var row = document.createElement("div");
        row.classList.add("row");
        canvas.appendChild(row) 
        for(var c = 0; c < newWidth; c++) {
            var unit = document.createElement("div");
            unit.classList.add("col", "clickable");
            row.appendChild(unit);
        } 
    }
}


// function createCanvas() {
//     var canvas = document.createElement("div");
//     canvas.id = "canvas";
//     document.body.appendChild(canvas);
//     for(var r = 0; r < 50; r++) {
//         var row = document.createElement("div");
//         canvas.appendChild(row) 
//         row.classList.add("row");
//         for(var c = 0; c < 50; c++) {
//             var unit = document.createElement("div");
//             unit.classList.add("col", "clickable");
//             row.appendChild(unit);
//         }
//     }

// }


function selectColor(e) {
  paintColor = this.style.backgroundColor;
   console.log("this is e", this.style.backgroundColor);  
}


function selectCanvas() {
  var c = document.getElementsByClassName("col");
  for (var i =0; i < c.length; i++) {
    c[i].addEventListener("mousemove", paint);
    } 
  }


function paint(e) {
//     if(paintColor===0) {
//     alert("Please select a color.");
//     return; 
// }
    if(e.buttons===1) {
        mouseActive === true;
        e.currentTarget.style.backgroundColor = paintColor;
    } else {
        mouseActive === false;
    }
}


function newCanvas() {
    var newCanvas = document.createElement("button");
    newCanvas.textContent = "New Canvas";
    newCanvas.addEventListener("click", function() {
        document.getElementById("canvas").innerHTML = "";
    })   
    document.body.appendChild(newCanvas);
}


function clearCanvas() {
    var clearCanvas = document.createElement("button");
    clearCanvas.textContent = "Clear All";
    paintColor = 0;
    var blank = ["#FFFFFF"];
    var blankCanvas = document.getElementsByClassName("col");
    for(var i = 0; i < blankCanvas.length; i++) {
        blankCanvas[i].style.backgroundColor = blank; 
    }   
    document.body.appendChild(clearCanvas);
}


function init() {
    welcome();
    customCanvas();
    createPalette();
    createCustomCanvas();
    // createCanvas();
    selectCanvas();
    newCanvas();
    clearCanvas();
}

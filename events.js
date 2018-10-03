// let columns = document.getElementsByClassName( "column" );

// for(let i = 0; i < columns.length; i++) {

//     columns[i].addEventListener( "click", ( ) => {
//     } );

// }

// let canvas = document.getElementById("canvas");

// canvas.style.background = "red";

// alert("hello world")

let paintColor;

// 1. Add an event listener to these `div` tags so when clicked the brush color is saved.


let canvas = document.getElementById("canvas");

let gridHTML = "";

for (let row = 0; row < 25; row++) {
    gridHTML += `
    <div class="custom-row">
    `;

    for (let column = 0; column < 60; column++) {
        gridHTML += `<div class="column border"></div>`;
    }
     
    gridHTML += `
    </div>
    `;
    
}

canvas.innerHTML = gridHTML;



$(".column").click((event) => {
    let clickedColumn = event.target;
    // clickedColumn.style.background = paintColor;
    $( clickedColumn ).css("background-color", paintColor );
    //clickedColumn.style.borderColor = paintColor + " !important";
    // creates jquery element object / css method / 2 arguments, 1st css property, value
    //$( clickedColumn ).css("border-color", paintColor);

    // Because the above techniques do not allow the "!important" modifier,
    // we must use the style.setProperty method.

    // raw javascript, setProperty method - sets css property, takes a third argument for priority
    clickedColumn.style.setProperty("border-color", paintColor, "important");
});

$(".paint-color").click((event) => {
    let clickedColor = event.target;
    // paintColor = clickedColor.style.backgroundColor;
    //$( paintColor).css("background-color", clickedColor);
    paintColor = $( clickedColor ).css( "background-color" );
    
    // Change the SVG color
    $( "#fa-palette" ).css("color", paintColor);
});


$("#color-picker").change((event) => {
    let colorPicker = event.target;
    paintColor = colorPicker.value;
    $( "#fa-palette" ).css("color", paintColor);
});

/*
$("#blue").click((event) => {
    paintColor = "blue";
});

$("#red").click((event) => {
    paintColor = "red";
});

$("#peru").click((event) => {
    paintColor = "peru";
});

$("#limegreen").click((event) => {
    paintColor = "limegreen";
});

$("#hotpink").click((event) => {
    paintColor = "hotpink";
});

$("#purple").click((event) => {
    paintColor = "purple";
});

$("#coral").click((event) => {
    paintColor = "coral";
});

$("#dodgerblue").click((event) => {
    paintColor = "dodgerblue";
});

$("#darkorange").click((event) => {
    paintColor = "darkorange";
});

$("#yellow").click((event) => {
    paintColor = "yellow";
});

$("#crimson").click((event) => {
    paintColor = "crimson";
});

$("#white").click((event) => {
    paintColor = "white";
});

$("#black").click((event) => {
    paintColor = "black";
});
*/
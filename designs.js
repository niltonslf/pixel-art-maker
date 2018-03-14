// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

var button = document.querySelector("input[type=submit]"),
  myCanvas = document.querySelector("#pixel_canvas"),
  colorPicker = document.querySelector("#colorPicker"),
  colorSelected;


colorPicker.addEventListener('change', function () {
  colorSelected = colorPicker.value;

  console.log("color selected:" + colorSelected);
});

/**
 * @description: call makegrid function when button is clicked
 */
button.addEventListener('click', function (event) {
  event.preventDefault();
  makeGrid();
});


/** 
 * @description: Draw table with rows and cols defined
 */
function makeGrid() {
  var tableHeight = document.querySelector("#input_height").value;
  var tableWidth = document.querySelector("#input_width").value;

  //Reset canvas
  myCanvas.innerHTML = null;

  console.log('height:' + tableHeight);
  console.log('width:' + tableWidth);


  //Draw de table with rows and cols
  for (var h = 1; h <= tableHeight; h++) {
    /**
     * @description: create a new tr ekement into myCanvas and set this element into a variable
     * @var curRow: preserve the current row
     */
    var curRow = myCanvas.appendChild(document.createElement('tr'));
    for (var w = 1; w <= tableWidth; w++) {
      /**
       * @description: create a new td ekement into myCanvas and get the current row 
       * @var curRow: current row
       */
      curRow.appendChild(document.createElement('td'));
    }
  } //endfor

}

myCanvas.addEventListener('click',function(event){
  event.target.style.background = colorSelected;
})

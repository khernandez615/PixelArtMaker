// Select size input
var height, width, color;
// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function(event) {
    event.preventDefault();
    height = $('#inputHeight').val();
    width = $('#inputWidth').val();
    makeGrid(height, width);
})
//FUNCTION FOR MAKING THE GRID APPEAR
function makeGrid(x, y) {
    //RESETS GRID WHEN SUBMIT CLICKED
    $('tr').remove();
    //CODE FOR MAKING THE GRID 
    for (var n = 1; n <= x; n++) {
        $('#pixelCanvas').append('<tr id=table' + n + '></tr>');
        for (var m = 1; m <= y; m++) {
            $('#table' + n).append('<td></td>');
        }
    }
    //COLORING IN THE CELLS
    $('td').click(function addColor(){
        color = $('#colorPicker').val();

        if ($(this).attr('style')) {
            $(this).removeAttr('style');
        }
        else {
            $(this).attr('style', 'background-color:' + color);
        }
    })
}
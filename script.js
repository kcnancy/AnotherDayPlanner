// setting the time and displaying it to the corresponding div
var update = function() {
    var time = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
    document.getElementById('currentDay').innerHTML = time;
}

setInterval(() => {
    update();
}, 1000);

$(document).ready(function () {
    // save button event listener
    $(".saveBtn").on("click", function () {

        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        // Save contents in local storage
        localStorage.setItem(time, text);
    })


// function to grab current hour and display right color for each block
function currentHour() {
    var curHour = moment().hour();

    $('.time-block').each(function() {
        var blockTime = parseInt($(this).attr("id").split("hour")[1]);

        if (blockTime < curHour) {
            $(this).addClass("past");
        }
        else if (blockTime === curHour) {
            $(this).removeClass("past");
            $(this).addClass("present");
        }
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        }
    })

}

// store contents to local storage
$('#hour8 .description').val(localStorage.getItem('hour8'));
$('#hour9 .description').val(localStorage.getItem('hour9'));
$('#hour10 .description').val(localStorage.getItem('hour10'));
$('#hour11 .description').val(localStorage.getItem('hour11'));
$('#hour12 .description').val(localStorage.getItem('hour12'));
$('#hour13 .description').val(localStorage.getItem('hour13'));
$('#hour14 .description').val(localStorage.getItem('hour14'));
$('#hour15 .description').val(localStorage.getItem('hour15'));
$('#hour16 .description').val(localStorage.getItem('hour16'));
$('#hour17 .description').val(localStorage.getItem('hour17'));
$('#hour18 .description').val(localStorage.getItem('hour18'));

currentHour();

})

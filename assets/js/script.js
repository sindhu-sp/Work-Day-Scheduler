// Displaying the date at the top of the page below the heading
var update = function () {
    var dateEl = moment().format('LLLL');
    $("#currentDay").text(dateEl);
}
$(document).ready(function () {
    update();
    setInterval(update, 1000);

    // save button click handler
    // the selector description is returning every siblings
    $(".saveBtn").on("click", function () {
        var timeEl = $(this).parent().attr("id");
        var taskInput = $(this).siblings(".description").val();
        localStorage.setItem(timeEl, taskInput);
    });

    // The daily tasks are being are being retrieved from localStorage
    var toDo = function () {
        $("#9 .description").val(localStorage.getItem("9"));
        $("#10 .description").val(localStorage.getItem("10"));
        $("#11 .description").val(localStorage.getItem("11"));
        $("#12 .description").val(localStorage.getItem("12"));
        $("#1 .description").val(localStorage.getItem("1"));
        $("#2 .description").val(localStorage.getItem("2"));
        $("#3 .description").val(localStorage.getItem("3"));
        $("#4 .description").val(localStorage.getItem("4"));
        $("#5 .description").val(localStorage.getItem("5"));

    };
    toDo();
    hourEl();

    // defining variables to add color to th past current and future event

    function hourEl() {
        var currentHour = moment().hour();
        $(".time-block").each(function () {
            var taskHour = parseInt($(this).attr("id"));
            if (taskHour < 6) {
                taskHour += 12;
            }
            if (taskHour < currentHour) {
                $(this).removeClass(["present", "future"]).addClass("past");
                $(this).find(".description").prop("disabled", true);
            } else if (taskHour === currentHour) {
                $(this).removeClass(["past", "future"]).addClass("present");
            } else {
                $(this).removeClass(["past", "present"]).addClass("future");
            }
        })
    }
    // when the refresh button is clicked the added task persists
    $(".refreshBtn").on("click", function () {
        location.reload()
    });
    // when clear button is clicked the local storage is cleared and the page reloaded if the user wants which is optional
    $(".clearBtn").on("click", function () {
        localStorage.clear()
        location.reload()
    });

});
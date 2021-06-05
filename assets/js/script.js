// $document.ready(function(){
// Displaying the date at the top of the page below the heading

var dateEl = moment().format('LLLL');
$("#currentDay").text(dateEl);

// The daily tasks are being stored in the localStorage
var toDo = {
    "0": [],
    "1": [],
    "2": [],
    "3": [],
    "4": [],
    "5": [],
    "6": [],
    "7": [],
    "8": []

};

// Storing tasks to local storage
var saveToDo = function () {
    localStorage.setItem("toDo", JSON.stringify(toDo));
}

var currentHour = moment().hour();
console.log(currentHour);

function hourEl() {
    // $(".time-block").each(function () {
    $(".time-block").each(function () {
        var taskHour = parseInt($(this).attr("id"));
        if (taskHour < 6) {
            taskHour += 12;
        }
        console.log("@@@@@@@@@@")
        console.log(currentHour)
        
        console.log(taskHour);
        console.log("@@@@@@@@@@")
        if (taskHour < currentHour) {
            $(this).removeClass(["present", "future"]).addClass("past");
        } else if (taskHour === currentHour) {
            $(this).removeClass(["past", "future"]).addClass("present");
        } else {
            $(this).removeClass(["past", "present"]).addClass("future");
        }
    })

    // })
}
hourEl();
// for (var id=0; id< 8; id++){
//     if(currentHour > id) {
//     $(".past").eq(id-9);
// }


//     if(currentHour === id){
//     $(".prsent").eq(id-9);
//     }
//     if(currentHour < id){
//         $(".future").eq(id-9);
//         }
// }


// The textarea element is replaced with another element and stored in the localStorage
// Click funtion saving the data
// if the time is future then the textarea element could be updated

// Input element is created 
// the input is appended to parent element
// Check the time left until the upcoming hour
// });
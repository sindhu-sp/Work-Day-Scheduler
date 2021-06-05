// Displaying the date at the top of the page below the heading
var currentDate = moment();
$("currentDay").text(currentDate.format("dddd,MMMM Do"))

// The daily tasks are being stored in the localStorage
var toDo = {
"nine": [], "ten": [], "eleven": [],"twelve": [],"one": [],"two": [],"three": [],"four": [],"five": []

};

// Storing tasks to local storage
var saveToDo = function(){
localStorage.setItem("toDo",JSON.stringify(toDo));
}

// load the tasks from the localStorage and create the tasks in the right row

// creating a task with the key/value

// past/current/future is taken into consideration
// In a chosen hour a new change is made or a task is made
// Depending the past/current/future time the background color is changed
// Checking if the hour is past/present/future
// The textarea element is replaced with another element and stored in the localStorage
// Click funtion saving the data
// if the time is future then the textarea element could be updated

// Input element is created 
// the input is appended to parent element
// Check the time left until the upcoming hour


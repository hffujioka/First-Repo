var favFoods = ["bacon", "Lettuce", "Tomato"]; //Made an array called favFoods with 3 values

var myChoice = 1; //Made variable myChoice equal 1
window.alert(favFoods[myChoice]); //Array favFoods calls the item in position 1 in a pop up


window.alert(favFoods.length); //A pop up tells the number of items in favFoods


var students = ["Michael", "Raene", "Chuck", "Ryan"]; //Made an array students
window.alert(students[2] + " " + favFoods[0]); //Item 2 from students and 0 from favFoods are called to a pop up


var newFood = prompt("What do you want to replace bacon with?"); //Ask user for new food and save as newFood
favFoods[0] = newFood; //Replace index 0 with response
window.alert(favFoods[0] + " " + favFoods[1] + " " + favFoods[2]); //Output entire array to screen

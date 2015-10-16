
//var arrayAtticus = ["Atticus", "2405", "47000", 3];
//var arrayJem = ["Jem", "62347", "63500", 4];
//var arrayBoo = ["Boo", "11435", "54000", 3];
//var arrayScout = ["Scout", "6243", "74750", 5];

//create objects for each employee
var atticusObj = {
  name: "Atticus",
  employeeNumber: "2405",
  baseSalary: "47000",
  reviewScore: 3
};

var jemObj = {
  name: "Jem",
  employeeNumber: "62347",
  baseSalary: "63500",
  reviewScore: 4
};

var booObj = {
  name: "Boo",
  employeeNumber: "11435",
  baseSalary: "54000",
  reviewScore: 3
};

var scoutObj = {
  name: "Scout",
  employeeNumber: "6243",
  baseSalary: "74750",
  reviewScore: 5
};

var array = [atticusObj, jemObj, booObj, scoutObj];

//Create variables used to write to the DOM
var newEl, newText, position;
var space;
//Capture the position of insertion into the DOM
position = document.getElementById('content');

//Loop the array, extracting each array and writing information to the DOM
//Note that the information is not 'clean'
for(var i = 0; i < array.length; i++){
	array[i] = calculateSTI(array[i]); 
 	newEl = document.createElement('li');
  newEl.style.listStyle = 'none';  
	newText = document.createTextNode([array[i].name, array[i].bonusStiPercent, array[i].adjSalary, array[i].bonusAmount].join(', '));  
	newEl.appendChild(newText);
	position.appendChild(newEl);
}

function calculateSTI(object){
  //var newArray = [];
  var newObject = new Object();

  //newArray[0] = object.name;
  newObject.name = object.name;

  var employeeNumber = object.employeeNumber;
  var baseSalary = object.baseSalary;
  var reviewScore = object.reviewScore;

  var bonus = getBaseSTI(object.reviewScore) + getYearAdjustment(object.employeeNumber) - getIncomeAdjustment(object.baseSalary);
  if(bonus > 0.13){
    bonus = 0.13;
  }

  //newArray[1] = bonus;
  newObject.bonusStiPercent = bonus;
  //newArray[2] = Math.round(baseSalary * (1.0 + bonus));
  newObject.adjSalary = Math.round(baseSalary * (1.0 + bonus));  
  //newArray[3] = baseSalary * bonus;
  newObject.bonusAmount = baseSalary * bonus;
  
  //console.log(newObject);

  return newObject;  
}

function getBaseSTI(reviewScore){
  var basePercent;
  switch(reviewScore){
    case 1:
      basePercent = 0;
      break;
    case 2:
      basePercent = 0;
      break;
    case 3:
      basePercent = 0.04;
      break;
    case 4:
      basePercent = 0.06;
      break;
    case 5:
      basePercent = 0.10;
      break;
  }
  return basePercent; 
}

function getYearAdjustment(employeeNumber){
  var yearAdjustment = 0;
  if(employeeNumber.length == 4){
    yearAdjustment = 0.05;
  }
  return yearAdjustment;
}

function getIncomeAdjustment(salary){
  var incomeAdjustment = 0;
  salary = parseInt(salary);
  if(salary > 65000){
    incomeAdjustment = 0.01;
  }
  return incomeAdjustment;
}
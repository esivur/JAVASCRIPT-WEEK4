// easy 
let average = (array) => array.reduce((a, b) => a + b) / array.length;
console.log(average([1,2,3,4,5]));

// medium
let num = [4,5,6,7,0,1,2];

var target = 0;

var target2 = 3

num.forEach(function(nums, index) {
  console.log(num, index)

  if(target == nums)
  {
      console.log(num.indexOf(nums));
  }

  if(target2 != nums)
  {
      console.log(-1);
  }

})

document.getElementById("myDIV").classList.add("your class goes here")

// hard
var button = index.querySelector("button");

function red(){
    documentGetID.body.style.backgroundColor = "red";
};
function blue(){
    document.body.style.backgroundColor = "blue";
};


button.addEventListener("click", red);
button.addEventListener("click", blue);
//Create a single function that takes an input className and updates the body's classList to ONLY include that className
document.getElementById("myDIV").classList.add("your class goes here");

//very hard
//Get user to input the amount they want to calculate 
//Store the variable
//Get user how many numbers they want to use
//use that number to make the array based on that sized

//Generate random numbers in the array.

//loop through the array to see if you can use any of the numbers to add to equal towards the amount given by the user. 
//if its not possible give a -1 
//else give the output of how many coins will be used
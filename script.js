var gfsMood = "good";
var myMood = "good too";
var weather = "rainy";
var time = "11.13 AM";
console.log(gfsMood);
console.log(myMood);
console.log(weather);
console.log(time); 
var isRaining = false;
var isLearning = true;
console.log(isRaining)
console.log(isLearning)
var speach = "amar so1nar bangla, ami tomay valobasi. cirodin tomar akash tomar batas, amar prane, oma amar prane bajay basi sonar bangla ami tomay valobasiiiiiii.";
console.log(speach)
var split = console.log(speach.split(" "));
var input1 = "34";
var input2 = 67;
// parseInt/ parseFloat for converting a string to a number.
// input1 = parseInt(input1);

// another way of converting a string to a number.
input1 = +input1;
console.log(input1)
console.log(typeof input1)

//The way of converting a number to a stting.
input2 = "" + input2;
var total = input1 + input2;
console.log(total)

var floatNum1 = .2;
var floatNum2 = .1;
var floatTotal = floatNum1 + floatNum2;
console.log(floatTotal)// it return the value of .3000000000000004
//we can fixed it by toFixed().
floatTotal = floatTotal.toFixed(1);
console.log(floatTotal)//its working 
// math calculation formating
var number = -6;

console.log(number); //its return -6; 
// if we want to get just the palin number then we can use Math.abs
console.log(Math.abs(number)); // now its return 6;

var price = 23.33;
console.log(Math.round(price)); // Its return the value of 23.
var price1 = 23.56;
console.log(Math.round(price1)); //Its return the value of 24;

console.log(Math.ceil(price)); // its return the value of 24;
console.log(Math.floor(price)); // its return the value of 23;

var randomNumber = Math.random();
console.log(randomNumber) // Math.random returns a random value each time. 0 to 1;

// we can make a lottery system. lets do it.
var randomNumber = randomNumber * 100; 
console.log(Math.round(randomNumber)); // Hurrah! Its done. 

//If else conditional...
var time = 9;
if(time == 10){
    console.log("I have to go now.")
}
else if(time < 10 ){
    console.log("Time to hoynai. Arektu ghumai.")
}
else{
    console.log("Ayhay! Ajke ar college jaoa holonna.")
}

// arrays 

var familyMember = ["Ammu", "Ami", "Asif"];
console.log(familyMember[2]="AL-Zubaid Asif")
console.log(familyMember[familyMember.length] = "caccu")        // This is a method of adding content in a array;
console.log(familyMember.push("Prince"))                        // This is another way of adding element in the last in a array;
console.log(familyMember.pop())                                 //this is the way of removing element from the last.
console.log(familyMember.unshift("Abbu"))                       //this is the way of adding element in the begining.
console.log(familyMember.shift())                               //this is the wat of removinh element form starting.
console.log(familyMember)
// end of array 


//starting of loop
// while loop
var num = 23;
while (num < 27){
    console.log(num);
    num++
}
// for loop
for(var i = 0; i < 4; i++){
    console.log(i);
}
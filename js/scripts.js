// Business Logic
var firstArray = [];

//Counts up to given number
var counter = function(num){
  var total = 0;
  for (var currentNumber = 0; currentNumber < num; currentNumber += 1) {
    total += 1;
    firstArray.push(total);
  };
  return firstArray;
};


var secondArray = firstArray.map(function(num) {
  num = num
  return secondArray;
});

//replace numbers divisible by 3
// var divThree = function(array) {
//
// }
//
// firstArray.map(function(num) {
//   for (var i = 0; i < firstArray.length; i++) {
//     if (num % 3 === 0) {
//       return num = "ping";
//     } else {
//       return firstArray;
//     };
//   };
// });
//


// var divThree = function(array) {
//   array.forEach(function(num) {
//     if (num % 3 = 0) {
//       num = "ping";
//     }
//   });
// });

// User Interface Logic

$(document).ready(function () {
  $("form#user-number").submit(function (event) {
    event.preventDefault();
    $('#result').empty();

    // Get Input
    var userNum = parseInt($("#num").val());

    // Call divThree function


    // Output
    // var result = counter(userNum);
    // $("span#result").text(firstArray);

    // Output of second rule
    var result = counter(userNum);
    $("span#result").text(secondArray);

    alert(secondArray);
  });
});

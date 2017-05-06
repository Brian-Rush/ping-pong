// Business Logic

var finalArray = [];

// Replaces multiples of 3, 5, and 15!

var divisibleBy = function(userNum) {
  for (currentNum = 1; currentNum <= userNum; currentNum +=1) {
  	if (currentNum <= userNum) {

      if (currentNum % 15 === 0) {
        finalArray.push("PING-PONG");
      } else if ((currentNum % 5 === 0) && (currentNum % 3 !== 0)) {
        finalArray.push("pong");
      } else if ((currentNum % 3 === 0) && (currentNum % 5 !== 0)) {
        finalArray.push("ping");
      } else {
        finalArray.push(currentNum);
      }
    };
  };
  return finalArray;
};


//Replaces Multiples of Three and Five!
//
// var divThreeFive = function(userNum) {
//   for (currentNum = 1; currentNum <= userNum; currentNum +=1) {
//     if (currentNum <= userNum) {
//       if (currentNum % 5 === 0) {
//         finalArray.push("pong");
//       } else if (currentNum % 3 === 0) {
//         finalArray.push("ping");
//       } else {
//         finalArray.push(currentNum);
//       }
//     };
//   };
//   return finalArray;
// };

// //Replaces Multiples of Three!
//
// var divThree = function(userNum) {
//   for (currentNum = 1; currentNum <= userNum; currentNum +=1) {
//     if (currentNum <= userNum) {
//       if (currentNum % 3 === 0) {
//         finalArray.push("ping");
//       } else {
//         finalArray.push(currentNum);
//       }
//     };
//   };
//   return finalArray;
// };


// User Interface Logic

$(document).ready(function () {
  $("form#user-number").submit(function (event) {
    event.preventDefault();
    $("span#result").text("");


    // Get Input
    var userNum = parseInt($("#num").val());

    // Output
    var result = divisibleBy(userNum);
    $("span#result").text(finalArray);

  });
});

// Business Logic

var finalArray = [];


//Replaces Multiples of Three!

var divThree = function(userNum) {
  for (currentNum = 1; currentNum <= userNum; currentNum +=1) {
    if (currentNum <= userNum) {
      if (currentNum % 3 === 0) {
        finalArray.push("ping");
      } else {
        finalArray.push(currentNum);
      }
    };
  };
  return finalArray;
};


// User Interface Logic

$(document).ready(function () {
  $("form#user-number").submit(function (event) {
    event.preventDefault();
    // $('#result').empty();

    // Get Input
    var userNum = parseInt($("#num").val());

    // // Output
    // var result = divisibleBy(userNum);
    // $("span#result").text(finalArray);

    // Output
    var result = divThree(userNum);
    $("span#result").text(finalArray);

  });
});

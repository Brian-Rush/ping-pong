// Business Logic
var total = 0;
var firstArray = []

var counter = function(num){
  for (var index = 0; index < num; index += 1) {
    total += 1;
    // alert(total);
    firstArray.push(total);
    // alert(firstArray);
  }
}

// User Interface Logic

$(document).ready(function () {
  $("form#user-number").submit(function (event) {
    event.preventDefault();
    $('#result').empty();

    var userNum = parseInt($("#num").val());
    // alert(userNum);
    var result = counter(userNum);
    $("span#result").text(firstArray);
  });
});

//business logic
var inputNumber = "";
var numberList = [];

function countNumbers(inputNumber) {
  for (var index = 1; index <= inputNumber; index ++) {
    numberList.push(index);
  };
};

//user interface logic
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var inputNumber = parseInt($("input#number").val());
    countNumbers(inputNumber);

    console.log(numberList);
  });

});

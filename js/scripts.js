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
    var printList = countNumbers(inputNumber);

    numberList.forEach(function(oneLine){
      $("ul#list").append("<li>" + oneLine + "</li>")

    });

    // console.log(numberList);
  });

});

//business logic
var inputNumber = "";
  var numberList = [];

function countNumbers(inputNumber) {
  for (var index = 1; index <= inputNumber; index ++) {

    if (index % 15 === 0) {
      numberList.push("CatDog!");
    }

    else if (index % 3 === 0) {
      numberList.push("purr");
    }

    else if (index % 5 === 0) {
      numberList.push("woof");
    }

    else {
      numberList.push(index);
    }
  };
};

//user interface logic
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    $("ul#list").empty();

    var inputNumber = parseInt($("input#number").val());
    var printList = countNumbers(inputNumber);

    numberList.forEach(function(oneLine){
      $("ul#list").append("<li>" + oneLine + "</li>");

    });
    $("ul#list").show();
  });

});

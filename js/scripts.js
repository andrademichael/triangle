//Backend

function triangleCheck(side1, side2, side3) {
  var check12 = side1 + side2;
  var check13 = side1 + side3;
  var check23 = side2 + side3;
  if (check12 <= side3 || check13 <= side2 || check23 <= side1) {
    return "Not a triangle q_q";
  }
  if (side1 === side2 && side2 === side3) {
    return "Equilateral!";
  }
  else if (side1 === side2 || side1 === side3 || side2 === side3){
  return "Isosceles...";
  }
  else {
    return "So Scalene!";
  }
}
//End Backend, Begin Frontend

$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var side1 = parseInt($("#side1").val());
    var side2 = parseInt($("#side2").val());
    var side3 = parseInt($("#side3").val());

    var triangle = triangleCheck(side1, side2, side3);
    $("#answer").text("Your triangle is: " + triangle);

  });
});

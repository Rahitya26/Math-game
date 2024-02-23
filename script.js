var choice=sessionStorage.getItem("choice");
var scr=0;



$(".strt").click(function() {
  $(".pop").slideUp(1000);
  $("#res").focus();
  $("#res").val(null);
  switch (choice){
    case "ad": game("+");
      $(".oprt").text("+");
      break;
    case "sub": game("-");
      $(".oprt").text("-");
      break;
    case "mul": game("*");
      $(".oprt").text("*");
      break;
  }
});

$(".end").click(function(){
  window.location.href="index.html";
});

function game(uopr) {
  switch(uopr)
  {
    case "+" : var n1 = Math.floor(Math.random() * 100) + 1;
      var n2 = Math.floor(Math.random() * 100) + 1;
      break;
      
    case "-" : var n1 = Math.floor(Math.random() * 100) + 1;
      var n2 = Math.floor(Math.random() * 100) + 1;  
      break;
      
    case "*" : var n1 = Math.floor(Math.random() * 20) + 1;
      var n2 = Math.floor(Math.random() * 18) + 1;    
      break;
      
    case "/" : var n1 = Math.floor(Math.random() * 30) + 1;
      var n2 = Math.floor(Math.random() * 11) + 1;    
      break;
  }
 
  $(".first").text(n1);
  $(".second").text(n2);
  var ans = eval("n1"+uopr+"n2");
  $(".sbmit").off("click");
  $(".sbmit").click(function() {
    var usrans = document.querySelector("#res").value;
    if (ans == usrans) {
      scr++;
      $(".first").slideUp(500).slideDown(500);
      $(".second").slideUp(500).slideDown(500);
      var aud = new Audio("right.mp3");
      aud.play();
      $(".pop").fadeIn(1000);
      $(".pop").text("Correct!");
      setTimeout(function() {
        $(".pop").fadeOut(2000);
      }, 1500);
      $("#res").val(null);
      game(uopr);
      $("#res").focus();
      $("#res").attr("placeholder", "Your answer is displayed here");
      sessionStorage.setItem("sco",scr);
      return scr;
    }
    else {
      $("#res").focus();
      var aud = new Audio("wrong.mp3");
      aud.play();
      $(".pop").fadeIn(1000);
      $(".pop").text("Wrong!");
      setTimeout(function() {
        $(".pop").fadeOut(1000)
      }, 1500);
      $("#res").val(null);
      $("#res").attr("placeholder", "Wrong answer!");
    }
  });

}

$("#inst").click(function(){
  $(".ins").fadeToggle(500);
});


function disp()
{
  if(score==null)
  {
    $(".score").text("Your score is 0");
  }
  else{
    $(".score").text("Your score is "+score);
  }
}

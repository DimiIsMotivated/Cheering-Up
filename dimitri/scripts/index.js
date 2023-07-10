const menuBtn =  document.getElementById('menuBtn');
const body = document.body;


menuBtn.addEventListener("click", () => {
  body.classList.toggle("show__menu");
});

var affirmations = ["I believe in you!", "Don't give up!", "You got this :D", "Try your best :)", "It's the effort that counts!", "Believe in the dream!", "I'm here for you", "I want you to succeed!", "Listen to the good in your heart :D", "No one can stop you!", "Sunshine is so close :)", "Don't let anyone dim your shine"];

$('#sun').click(function() {
  let affirmation = affirmations[Math.floor(Math.random() * affirmations.length)];
  $('#text').text(affirmation);
 $("#close").css("display","inline")
 $('#dialog').dialog({
appendTo:"#pos"
});




});

$("#close").click(function(){

$('#text').text("")
$("#close").css("display","none")
});
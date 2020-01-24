// code
$(document).ready(function () {
  console.log('hello world');

  // send a message to that specific user and get a random reply after n seconds (also with keyboard)
  $('#send').click(function () {
    send();
  });

});


// function
function send() {
  var text = $('.write input').val();
  var chat = $('.chat_user.display_flex');
  var bubble = $('.template .bubble').clone();
  bubble.addClass('send');
  bubble.children('p').text(text);
  chat.append(bubble);
}

// to do
// send a message to that specific user and get a random reply after n seconds (also with keyboard)

// search feature

// click on a user, select it, show its chat and send message

// show and hide the option menu on bubble chat with delete option

// click on option, add option box in that moment and remove it afterwards

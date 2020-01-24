// code
$(document).ready(function () {
  console.log('hello world');

  // send a message to that specific user and get a random reply after n seconds (also enter with keyboard)
  $('#send').click(function () {
    send();
    setTimeout(receive(), 3000);
  });

  $('.write input').keydown(function () {
    if (event.which === 13) {
      send();
      setTimeout(receive(), 3000);
    }
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

function receive() {
  var text = 'Yeah, sure';
  var chat = $('.chat_user.display_flex');
  var bubble = $('.template .bubble').clone();
  bubble.addClass('receive');
  bubble.children('p').text(text);
  chat.append(bubble);
}

// to do
// send a message to that specific user and get a random reply after n seconds (also with keyboard)

// search feature

// click on a user, select it, show its chat and send message

// show and hide the option menu on bubble chat with delete option

// click on option, add option box in that moment and remove it afterwards

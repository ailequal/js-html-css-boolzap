// code
$(document).ready(function() {
  console.log('hello world');

  // send a message to that specific user and get a random reply after n seconds (also enter with keyboard)
  $('#send').click(function() {
    send();
  });

  $('.write input').keydown(function() {
    if (event.which === 13) {
      send();
    }
  });

});

var date = new Date;
console.log(date.getHours());
console.log(date.getMinutes());


// function
function send() {
  var text = $('.write input').val();
  var chat = $('.chat_user.display_flex');
  var bubble = $('.template .bubble').clone();
  var date = new Date;
  bubble.addClass('send');
  bubble.children('p').text(text);
  bubble.children('span').text(date.getHours() + ':' + date.getMinutes());
  chat.append(bubble);
  setTimeout(receive, 3000);
}

function receive() {
  var text = 'Yeah, sure';
  var chat = $('.chat_user.display_flex');
  var bubble = $('.template .bubble').clone();
  var date = new Date;
  bubble.addClass('receive');
  bubble.children('p').text(text);
  bubble.children('span').text(date.getHours() + ':' + date.getMinutes());
  chat.append(bubble);
}


// to do
// send a message to that specific user and get a random reply after n seconds (also with keyboard)

// search feature

// click on a user, select it, show its chat and send message

// show and hide the option menu on bubble chat with delete option

// click on option, add option box in that moment and remove it afterwards

// code
$(document).ready(function() {

  // send a message to that specific user and get a random reply after n seconds (also enter with keyboard)
  $('#send').click(function() {
    send();
  });

  $('.write input').keydown(function() {
    if (event.which === 13) {
      send();
    }
  });

  // click on a user, select it, show its chat and messages log
  $('.user').click(function() {
    changeChat($(this));
  });

});


// function
function send() {
  var text = $('.write input').val();
  var chat = $('.chat_user.display_flex');
  var bubble = $('.template .bubble').clone();
  var contact = $('.user.select');
  var info = $('.info_user.display_flex');
  var date = new Date;
  var time = date.getHours() + ':' + date.getMinutes();
  if (text !== '') {
    bubble.addClass('send');
    bubble.children('p').text(text);
    bubble.children('span').text(time);
    chat.append(bubble);
    if (text.length > 14) {
      contact.find('h3').text(text.substring(0, 14) + ' [...]');
    } else {
      contact.find('h3').text(text);
    }
    contact.children('span').text(time);
    info.find('span').text(time);
    $('.write input').val('');
    setTimeout(receive, 3000);
  }
}

function receive() {
  var text = ['Yeah, sure.', 'I am on my way!', 'Let\' do it!!', 'See you around.', 'What are you talking about?', 'This is awesome!', 'Sorry, I am busy tomorrow...', 'I don\'t mind that.'];
  var textIndex = text[getRandomIntInclusive(0, text.length - 1)];
  var chat = $('.chat_user.display_flex');
  var bubble = $('.template .bubble').clone();
  var contact = $('.user.select');
  var date = new Date;
  var time = date.getHours() + ':' + date.getMinutes();
  bubble.addClass('receive');
  bubble.children('p').text(textIndex);
  bubble.children('span').text(time);
  chat.append(bubble);
  if (textIndex.length > 14) {
    contact.find('h3').text(textIndex.substring(0, 14) + ' [...]');
  } else {
    contact.find('h3').text(textIndex);
  }
}

function changeChat(userSelect) {
  var contactSelect = $('.user.select');
  var dataElement = userSelect.attr('data-element');
  var info = $(".info_user[data-element='" + dataElement + "']");
  var infoSelect = $('.info_user.display_flex');
  var chat = $(".chat_user[data-element='" + dataElement + "']");
  var chatSelect = $('.chat_user.display_flex');
  if (!userSelect.hasClass('.select')) {
    userSelect.removeClass('not_select').addClass('select');
    contactSelect.removeClass('select').addClass('not_select');
    info.removeClass('not_display').addClass('display_flex');
    infoSelect.removeClass('display_flex').addClass('not_display');
    chat.removeClass('not_display').addClass('display_flex');
    chatSelect.removeClass('display_flex').addClass('not_display');
  }
}

// data-element="0"
// contact
// info
// chat

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


// to do
// search feature
// click on a user, select it, show its chat and messages log
// show and hide the option menu on bubble chat with delete option
// click on option, add option box in that moment and remove it afterwards

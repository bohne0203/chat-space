$(function() {
  function buildHTML(message){

    var imageUrl = (message.image) ?`<img class="date__text__image" src="${message.image}">` : "";
    var html = `<div class="messages">
                  <ul class="date">
                    <li class="date__user-name">
                      ${message.name}
                    <li class="date__day">
                      ${message.date}
                  </ul>
                  <div class="date__text">
                      <p class="date__text__content">
                        ${message.content}
                      </p>
                    ${imageUrl}
                </div>`
    return html;
  }

  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')

    $.ajax({
      url: url,
      type: 'POST',
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })

    .done(function(data){
      var html = buildHTML(data);
      $('.messages').append(html)
      $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight},'fast');
      $("#new_message")[0].reset();
    })
    .fail(function(){
      alert('メッセージを入力してください');
    })
    .always(function(){
      $('.form__submit').prop('disabled',false)
    })
  })
});


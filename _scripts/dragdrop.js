$('.painting')
  .bind('dragstart', (evt) => {
    evt.dataTransfer.setData('text', this.id);
    $('h2').fadeIn('fast');
  })
  .hover(
    () => { $('div', this).fadeIn(); },
    () => { $('div', this).fadeOut(); }
  );

  $('#favorites')
    .bind('dragover', (evt) => {
      $('#favorites').css('background-color', 'gray');
      evt.preventDefault();
    })
    .bind('dragleave', (evt) => {
      $('#favorites').css('background-color', '#A858A3');
      evt.preventDefault();
    })
    .bind('dragenter', (evt) => {
      evt.preventDefault();
    })
    .bind('drop', (evt) => {
      let id = evt.dataTransfer.getData('text'),
      item = $('#' + id),
      favList = $("#faves"),
      prevFavItem = null;
      prefFavItem = $('<li />', {
        text : $('p:first', item).text(),
        data : { id : id }
      }).appendTo(favList);
      $('#favorites').css('background-color', '#A858A3');
      evt.stopPropagation();
      return false;
    });

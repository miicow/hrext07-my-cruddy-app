/*
Init app
interact with DOM
interact with localstorage

 */
$(document).ready(function(){
  // this is where we jquery
  //var keyData = 'ourKey'; // going to need to make this dynamic?
var count = 1;
  var theDate = function() {
    var today = new Date();
    var day = today.getDate();
    var month = today.getMonth();
    var year = today.getFullYear();
  
    if(day < 10) {day = '0' + day};
  
    if(month === 0) {month = 'January'};
    if(month === 1) {month = 'February'};
    if(month === 2) {month = 'March'};
    if(month === 3) {month = 'April'};
    if(month === 4) {month = 'May'};
    if(month === 5) {month = 'June'};
    if(month === 6) {month = 'July'};
    if(month === 7) {month = 'August'};
    if(month === 8) {month = 'September'};
    if(month === 9) {month = 'October'};
    if(month === 10) {month = 'November'};
    if(month === 11) {month = 'December'};
  
    return month + ', ' + day + ', ' + year;
  }

  $('.btn-new-day').on('click', function(){
    $('.joy-entries').append('<div class="the-date" id="day'+ count +'">' + theDate() + '</div>');
    count++
  })

  $('.btn-add').on('click', function(e){
    //console.log(e);
    var keyData = $('.input-key').val();
    var valueData = $('.input-value').val();
    // write to db
    localStorage.setItem(keyData, valueData);
    // read from db
    var displayText = keyData + ' | ' + localStorage.getItem(keyData);
    // this only displays the last one? might want to switch to html
    // and append a div
    // <div class="display-data-item" data-keyValue="keyData">valueData</div>
    // if you use backticks ` you can use ${templateLiterals}
    // TODO make this vars make sense across the app
    $('.joy-entries').html('<div class="display-data-item" data-keyValue="'+ keyData +'">'+valueData+'</div>');
    $('.input-key').val('');
    $('.input-value').val('');
  });

  $('.btn-update').on('click', function(){
    for(var i = 1; i < count; i++) {
      alert('hello!')
      console.log(count)
      $('#day' + i).append("<p>Test</p>")
    }
  })


  // update db
    // need to expand when  more than 1 item is added

  // delete item
  // $('.container-data').on('click', '.display-data-item', function(e){
  //   console.log(e.currentTarget.dataset.keyvalue);
  //   var keyData = e.currentTarget.dataset.keyvalue;
  //   localStorage.removeItem(keyData);
  //   $('.container-data').text('');
  // });
  // delete all?
  $('.btn-clear').click(function(){
    localStorage.clear();
    $('.container-data').text('');
  });

});
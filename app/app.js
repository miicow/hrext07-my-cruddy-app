/*
Init app
interact with DOM
interact with localstorage

 */
$(document).ready(function(){
  // this is where we jquery
  //var keyData = 'ourKey'; // going to need to make this dynamic?
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

  function theDateId() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();
    
    if (dd < 10) {
      dd = '0' + dd;
    }
    
    if (mm < 10) {
      mm = '0' + mm;
    }
    return mm +  dd +  yyyy;
  }

  $('.btn-new-day').on('click', function(){
    $('.joy-entries').append('<div class="the-date" id="'+ theDateId() +'">' + theDate() + '</div>');
  })

  $('.btn-add').keypress(function(event){
    if(event.which === 13) {
      var keyData = $('.input-key').val();
      var valueData = $('.input-value').val();
      localStorage.setItem(keyData, valueData);

      $("#" + theDateId()).append('<div class="joy-entry ' + keyData + '" data-keyValue="'+ keyData +'">' + valueData + '</div>');
      $('.input-key').val('');
      $('.input-value').val('');
    }
  })


  // $('.btn-add').on('click', function(e){
  //   //console.log(e);
  //   var keyData = $('.input-key').val();
  //   var valueData = $('.input-value').val();
  //   // write to db
  //   localStorage.setItem(keyData, valueData);
  //   // read from db
  //   var displayText = keyData + ' | ' + localStorage.getItem(keyData);
  //   // this only displays the last one? might want to switch to html
  //   // and append a div
  //   // <div class="display-data-item" data-keyValue="keyData">valueData</div>
  //   // if you use backticks ` you can use ${templateLiterals}
  //   // TODO make this vars make sense across the app
  //   $('.joy-entries').html('<div class="display-data-item" data-keyValue="'+ keyData +'">'+valueData+'</div>');
  //   $('.input-key').val('');
  //   $('.input-value').val('');
  // });

  // update db
    // need to expand when  more than 1 item is added
    $('.btn-update').on('click', function(){
      alert('hello!')
      var keyData = $('.input-key').val();
      var valueData = $('.input-value').val();
      localStorage[keyData] = valueData;

      $("." + keyData).html(valueData)
      $('.input-key').val('');
      $('.input-value').val('');
    })

   // delete item
  //  $('.container-data').on('click', '.display-data-item', function(e){
  //   console.log(e.currentTarget.dataset.keyvalue);
  //   var keyData = e.currentTarget.dataset.keyvalue;
  //   localStorage.removeItem(keyData);
  //   $('.container-data').text('');
  // });
  
  //delete all?
  $('.btn-clear').click(function(){
    var ans = confirm("Are you sure you want to clear all?");

    if(ans === true) {
      localStorage.clear();
      $('.joy-entry').remove().text('');
    } else {
      return "Nevermind!"
    }
  });

});
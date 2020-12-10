let date = moment().format('dddd, MMMM Do')

$(document).ready(function() {
    $('#currentDay').text(date)

    for(var i =0; i < 5; i++) {
        $('.container').append(`     
        <div class="row">
            <div class="col-2">
            
            </div>
            <div class="col-8">
            <textarea> event goes here</textarea>
            </div>
            <div class="col-2">
            <i class="fas fa-save"></i>
            </div>
      </div>`)
    }
})
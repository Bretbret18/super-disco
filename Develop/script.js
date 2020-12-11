

$(document).ready(function () {
    $("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));
    var currentHour = moment().hour();


    //save planner text
    $('.saveBtn').click(function () {
        console.log('button clicked')
        var value = $(this).siblings('.description').val();
        var time = $(this).parent().attr('id');

        localStorage.setItem(time, value);
    });


    //display saved text
    $('textarea').each(function () {
        var time = $(this).parent().attr('id');
        var scheduleTime = localStorage.getItem(time);
        $(this).val(scheduleTime);

    });



    //apply time colors
    $('.time-block').each(function () {
        var id = parseInt($(this).attr('id'));
        if (id < currentHour) {
            $(this).addClass('past');
        } else if (id === currentHour) {
            $(this).removeClass('past');
            $(this).addClass('present');
        } else {
            $(this).removeClass('past');
            $(this).removeClass('present');
            $(this).addClass('future');
        }
    })


})
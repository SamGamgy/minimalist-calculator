function insrt(num) {
    $('.calc-display').val($('.calc-display').val()+ num);
}

function eql() {
    try{
        $('.calc-display').val(eval($('.calc-display').val()));
    }
    catch(err) {
        $('.calc-display').val('ERROR');
    }
}

$(document).ready(function() {
    $(window).keydown(function(event){
        if(event.keyCode == 13) {
            eql();
            event.preventDefault();
            return false;
        }
        else if(event.keyCode == 8) {
            del();
            return false;
        }
    });
});

function c() {
    $('.calc-display').val('');
}

function del() {
    value = $('.calc-display').val();
    $('.calc-display').val(value.substring(0, value.length - 1));
}
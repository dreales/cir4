
var h = $('#shorten')[0].scrollHeight - 80;
$('#more').click(function(e){
    e.stopPropagation();
    $('#shorten').animate({'height':h});
    $('#more').css({'display':'none'});
});

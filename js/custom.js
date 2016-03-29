/**
 * Created by lazar on 3/29/16.
 */
$("small:first")
    .hover(function() {
       if($(this).text() === "Na lageru")
       {
           $(this).css('color', 'green');
       } else if ($(this).text() === "Nema na lageru")
       {
           $(this).css('color', 'red');
       }
    })
    .mouseleave(function() {
        $(this).css('color', '#777');
    });

$(function()
{
    if($("#city").length)
    {
        $.getJSON("http://api.wunderground.com/api/aee8c654faac8b92/conditions/q/CA/San_Francisco.json", function(data){
            $("#temperaturaC").empty().append("Temperatura [C]: " + JSON.stringify(data["current_observation"].temp_c));
            $("#temperaturaF").empty().append("Temperatura [F]: " + JSON.stringify(data["current_observation"].temp_f));
            $("<center><img src = " + JSON.stringify(data["current_observation"].icon_url) + " /></center>").insertAfter($("#city"));
        });
    }
});
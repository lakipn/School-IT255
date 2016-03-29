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
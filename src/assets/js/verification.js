import {$} from "protractor";

$('#login').keyup(function()
{
  var login = $ ('login').val();
  if (login !=''){
    // @ts-ignore
    $.post('chek_user.php', {login:login},
    function(data) {
      $('#status').html(data);
    });
  }

});

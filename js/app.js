function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

var langmodal = false;
function showlangmodal()
{
    if(!langmodal)
    {
        $(document.body).append('<div class="ui lang modal" style="box-shadow: none;background: transparent !important;max-width: 400px;">  <div class="ui icon header"  style="background: transparent !important;color: #fff;"><i class="language icon"></i>Select your language / Dilini Sec  </div>  <div class="actions" style="background: transparent !important;color: #fff;display: flex;margin: 0 auto;"><div class="ui white ok inverted button" style="margin: 0 auto;" onclick="changetoTR()">Türkçe</div><div class="ui white ok inverted button" style="margin: 0 auto;" onclick="changetoEN()"> English</div>  </div></div>');
        langmodal = true;
    }
    $('.ui.lang.modal').modal('show');
}

function changelangtoTR()
{
    /*var x = document.getElementsByClassName("langTR");
    var i;
    for (i = 0; i < x.length; i++) {
        //x[i].style.display = "initial";
        x[i].show();
    }
    var x = document.getElementsByClassName("langEN");
    var i;
    for (i = 0; i < x.length; i++) {
        //x[i].style.display = "none";
        x[i].hide();
    }*/
    $( ".langEN" ).hide();
    $( ".langTR" ).show();
}
function changelangtoEN()
{
    $( ".langTR" ).hide();
    $( ".langEN" ).show();
}
function changetoTR(){if(!getCookie("lang")){$('.ui.modal.premiumfeatures').modal('show');}setCookie('lang','TR', 365);changelangtoTR();}
function changetoEN(){if(!getCookie("lang")){$('.ui.modal.premiumfeatures').modal('show');}setCookie('lang','EN', 365);changelangtoEN();}
$(document).ready(function() { 
  var lang = getCookie("lang");
  if (!lang) {
    changelangtoEN();
    showlangmodal();
  }else if(lang == "TR")
  {
    changelangtoTR();
  }else{
    changelangtoEN();
  }
});
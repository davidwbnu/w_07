
 function GoTop(point){
             $("html,body").animate({"scrollTop":point},600)
}

function Init(){
          GoTop(0);
 }

function MovePosition(){
        $("#gotop").click(function(){
          GoTop(0);
        });
        $("#GohomePage").click(function(){
          var gohome=$("#homePage").offset().top;
          GoTop(gohome);
          return false;
        });

        $("#GS01").click(function(){
          var goS01=$("#serv01").offset().top;
          GoTop(goS01);
          return false;
        });
        $("#GS02").click(function(){
          var goS02=$("#serv02").offset().top;
          GoTop(goS02);
          return false;
        });
        $("#GS03").click(function(){
          var goS03=$("#serv03").offset().top;
          GoTop(goS03);
          return false;
        });
        $("#GS04").click(function(){
          var goS04=$("#serv04").offset().top;
          GoTop(goS04);
          return false;
        });

        $("#GoaboutUs").click(function(){
          var goAU=$("#aboutUs").offset().top;
          GoTop(goAU);
          return false;
        });
        $("#GocontactUs").click(function(){
          var goCU=$("#contactUs").offset().top;
          GoTop(goCU);
          return false;
        });
}

$(function(){
      Init();
      MovePosition();
});


// -$("#aboutUs").css("padding-top").match(/\d+\.\d+/)[0]
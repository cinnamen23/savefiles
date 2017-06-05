function chkSignUpForm(){
  var password = $(".signupPass").val();
  var passChk = $("#passchk").val();
  
  if(password != passChk){
    alert("비밀번호가 일치하지 않습니다.");
    $(".signupPass").val("");
    $("#passchk").val("");
    $(".signupPass").focus();
    return false;
  }
  return true;
}

function selectEmail(){
  var value = $("#selEmail").val();
  if(value == "write"){
    $("#emailDomain").removeAttr("readonly");
    $("#emailDomain").val("");
  }else{
    $("#emailDomain").val(value);
    $("#emailDomain").attr("readonly", "readonly");
  }
}

function idChk(){
  var param = $(".signupId").val();
  $.ajax({
    type:"POST",
    url : "member/idChk.json",
    dataType:"json",
    data:{id: param}
  })
  .done(function(data){
    if(data){
      $("#idChk").html("이미 사용중인 아이디 입니다.");
      $("#idChk").css("color", "#ff0000");
    }
  })
  .fail(function(){
    $("#idChk").html("사용 가능한 아이디 입니다.");
    $("#idChk").css("color", "#00ff00");
  });
}

$(function(){
  
  var siteKey = "6LfvvBATAAAAAATWMYqbxAO48lDbEOETb90WUfWY";//Site key
  var div = "recaptcha";
  Recaptcha.create(siteKey, div, {theme: "red"});
       
  $("#recaptchaCheck").click(function(){
       
      var challenge = Recaptcha.get_challenge();
      var response = Recaptcha.get_response();
      var host = $(location).attr('host');
       
      $.ajax({
          type: "POST",
          url: "member/validateRecaptcha.do",
          async: false,
          data: {
              host: host,
              challenge: challenge,
              response: response
          },
          success: function(data) {
              if(data == "Y") {
                  dataValue="Y";
                  document.getElementById("message").innerHTML = "성공";
                  $("#message").css("color", "#00ff00");
              }else{
                  document.getElementById("message").innerHTML = "실패";
                  dataValue = "N"
                  alert("자동완성방지 문자를 잘못 입력하였습니다.")
                  Recaptcha.reload();
              }
          }
      });
       
  });
       
}); 
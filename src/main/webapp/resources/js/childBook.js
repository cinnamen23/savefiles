function openAniDiv(chapter) {
  $(".canvas").find(" > div").remove();
  $.ajax({
    url : "openChapterImg.json",
    dataType : "json",
    data : "chapterNo=" + chapter
  }).done(
      function(result) {
        var divHtml = "";
        result.forEach(function(data, index) {
          divHtml += "<div class='real saved'" + "id = '" + data.imgNo
              + "' style = 'left:" + data.posX + "px; top:" + data.posY
              + "px; position:absolute;'>";
          divHtml += "<img class = 'real-img' src = '" + data.imgSrc
              + "'/></div>";
        })
        $(".canvas").append(divHtml);
      })
}

function selectBoxChange() {
  var value = $("#sel").val();

  switch (value) {
  case '0':
    $("#background").css("display", "none");
    $("#hero").css("display", "none");
    $("#supporting").css("display", "none");
    $("#badGuy").css("display", "none");
    break;
  case '1':
    $("#background").css("display", "block");
    $("#hero").css("display", "none");
    $("#supporting").css("display", "none");
    $("#badGuy").css("display", "none");
    break;
  case '2':
    $("#background").css("display", "none");
    $("#hero").css("display", "block");
    $("#supporting").css("display", "none");
    $("#badGuy").css("display", "none");
    break;
  case '3':
    $("#background").css("display", "none");
    $("#hero").css("display", "none");
    $("#supporting").css("display", "block");
    $("#badGuy").css("display", "none");
    break;
  case '4':
    $("#background").css("display", "none");
    $("#hero").css("display", "none");
    $("#supporting").css("display", "none");
    $("#badGuy").css("display", "block");
    break;
  }
}

//이미지 좌표값 저장하는 함수
var saveImg = function(imgDiv){
    var imgSrc = imgDiv.find('img').attr("src");
    var content = $(".contentBox").find("textarea").val();
    var posXVal = parseInt(imgDiv.css('left'));
    var posYVal = parseInt(imgDiv.css('top'));
    var chapter = count;
//    alert(chapter);
    var idVal = imgDiv.attr("id");
//    alert("X: " + posXVal + ", Y: " + posYVal);
    
    var params = {
        imgSrc : imgSrc,
        imgNo : idVal,
        chatperNo : chapter
    }
    
    if(posXVal && posYVal){
      params["posX"] = posXVal;
      params["posY"] = posYVal;
    }

    if(imgDiv.hasClass("saved")){
//      $.get("${pageContext.request.contextPath}/test/update.json", params, function(){})
    }else{
//      $.get("${pageContext.request.contextPath}/test/insert.json", params, function(imgNo){
//        imgDiv.attr("id", imgNo);
//        imgDiv.addClass("saved");
//      })
    }
    
  imgHover();
  imgDrag();
}


$('.sampleimg').on('click', function(){
  var src = $(this).attr('src');
  saveImg($("<div class='real' style = 'left:0; top:0; position:absolute;'><img src ='"+ src +"'/></div>")
      .appendTo('.canvas')
      .draggable());
});
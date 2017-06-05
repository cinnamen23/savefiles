var count = 0;
var leftPst, topPst;

$(document).ready(function() {
//  alert("${bookNo}");
  $(".real").draggable();
  $(".contentBox").draggable();
  $(".real-content").draggable();
  $(".resizable").resizable();

  $(".mini-canvas a").each(function() {
    count++;
  }) // 처음챕터 수 확인

  $(".canvas").on("click", ".btn-del", function() {
    if ($(this).parent().hasClass("saved")) {
      var idVal = $(this).parent().attr("id");
      var param = {
        imgNo : idVal
      }
      $.get("deleteImg.json", param);
    }
    $(this).parent().remove();
  });

  // 움직일때 이미지 저장
  $('.canvas').on("mouseup", ".real", function() {
    saveImg($(this));
  });

  // 움직일때 내용 저장
  $('.canvas').on("mouseup", ".real-content", function() {
    addContent($(this));
  });

  // 내용 삭제
  $(".canvas").on("click", ".btn-del-content", function() {
    if ($(this).parent().hasClass("saved")) {
      var idVal = $(this).parent().attr("id");
      var param = {
        contentNo : idVal
      }
      $.get("deleteContent.json", param);
    }
    $(this).parent().remove();
  });

  imgHover();
  imgDrag();
})

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
          if (data.type == 'background') {
            divHtml += "<div class='real saved background'" + "id = '"
                + data.imgNo + "' style = 'left:" + data.posX + "px; top:"
                + data.posY + "px; position:absolute;'>";
            divHtml += "<img class = 'real-img resizable' src = '"
                + data.imgSrc + "'/></div>";
          } else if (data.type == 'character') {
            divHtml += "<div class='real saved character'" + "id = '"
                + data.imgNo + "' style = 'left:" + data.posX + "px; top:"
                + data.posY + "px; position:absolute;'>";
            divHtml += "<img class = 'real-img resizable' src = '"
                + data.imgSrc + "'/></div>";
          }
        })
        $(".canvas").append(divHtml);
        $(".real").draggable();
        imgHover();
        imgDrag();
        $(".resizable").resizable();
      })
  $.ajax({
    url : "openChapterContent.json",
    dataType : "json",
    data : "chapterNo=" + chapter
  }).done(
      function(result) {
        var divHtml = "";
        result.forEach(function(data, index) {
          divHtml += "<div class = 'real-content saved' id='" + data.contentNo
              + "' style = 'left:" + data.posX + "px; top:" + data.posY
              + "px; position:absolute; font-size:" + data.fontSize
              + "px; color:" + data.fontColor + "; font-family:"
              + data.fontType + ";'>" + data.content + "</div>";
        })
        $(".canvas").append(divHtml);
        $(".real-content").draggable();
        contentHover();
      })

  // $(".real").draggable();
  // $(".contentBox").draggable();
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

function writeChapter() {
  count++;
  $(".canvas").find(" > div").remove();
  $(".mini-canvas").append(
      $("<p style = 'padding : 8px;'><h4><a href = '#" + count
          + "' id = 'chapter" + count + "' onclick='openAniDiv(" + count
          + ")'>" + count + "장 </a></h4></p>"));
}

// 이미지 좌표값 저장하는 함수
var saveImg = function(imgDiv) {
  var imgSrc = imgDiv.find('img').attr("src");
  var content = $(".contentBox").find("textarea").val();
  var posXVal = parseInt(imgDiv.css('left'));
  var posYVal = parseInt(imgDiv.css('top'));
  var posWidth = parseInt(imgDiv.css('width'));
  var posHeight = parseInt(imgDiv.css('height'));
  var chapter = count;
  var idVal = imgDiv.attr("id");
  var imgType = "";
  if (imgDiv.hasClass("background")) {
    imgType = "background";
  }
  if (imgDiv.hasClass("character")) {
    imgType = "character";
  }

  var params = {
    imgSrc : imgSrc,
    imgNo : idVal,
    chapterNo : chapter,
    type : imgType,
    width : posWidth,
    height : posHeight
  }

  if (posXVal && posYVal) {
    params["posX"] = posXVal;
    params["posY"] = posYVal;
  }

  if (imgDiv.hasClass("saved")) {
    $.get("update.json", params, function() {
    })
  } else {
    $.get("insert.json", params, function(imgNo) {
      imgDiv.attr("id", imgNo);
      imgDiv.addClass("saved");
    })
  }

  imgHover();
  imgDrag();
}

$('.sampleimg').on('click', function() {
  var src = $(this).attr('src');
  saveImg($(
    "<div class='real background' style = 'left:0; top:0; position:absolute;'><img src ='"
    + src + "'/></div>").appendTo('.canvas').draggable());
});

// 주인공 누를시
$('.sampleHero').on('click', function() {
  var src = $(this).attr('src');
  saveImg($(
    "<div class='real character' style = 'left:0; top:0; position:absolute;'><img src ='"
        + src + "' class = 'resizable'/></div>").appendTo('.canvas')
    .draggable());
  $(".resizable").resizable();
});

// 조연 누를시
$('.sampleSuporting').on('click', function() {
  var src = $(this).attr('src');
  saveImg($(
      "<div class='real character' style = 'left:0; top:0;position:absolute;'><img src ='"
          + src + "' class='resizable'/></div>").appendTo('.canvas')
      .draggable());
  $(".resizable").resizable();
});

// 악당 누를시
$('.sampleBadboy').on('click', function() {
  var src = $(this).attr('src');
  saveImg($(
      "<div class='real character' style = 'left:0; top:0;position:absolute;'><img src ='"
          + src + "' class = 'resizable'/></div>").appendTo('.canvas')
      .draggable());
  $(".resizable").resizable();
});

function imgHover() {
  $('.real')
      .hover(
          function() {
            if ($(this).find("button")) {
              $(this).find("button").remove();
            }
            $(this)
                .append(
                    $("<button type = 'button' class = 'btn-del' style = 'position:absolute; top:0px; left:0px;'>삭제</button>"));
          }, function() {
            $(this).find("button").remove();
          });
}

// animate 영역 빠져나가면 다시 animate영역으로 들어오게 하기
function imgDrag() {
  $('.real').draggable({
    'start' : function(event, ui) {
      leftPst = ui.position.left;
      topPst = ui.position.top;
    },
    'drag' : function(event, ui) {

    },
    'stop' : function(event, ui) {

      var tWidth = parseInt($('.canvas').css('width'));
      var tHeight = parseInt($('.canvas').css('height'));

      leftPstS = ui.position.left;
      topPstS = ui.position.top;

      var w = parseInt($(this).css('width'));
      var h = parseInt($(this).css('height'));

      var limitW = tWidth - w;
      var limitH = tHeight - h;

      if (leftPstS < 0) {
        $(this).css('left', 0);
      } else if (leftPstS > limitW) {
        $(this).css('left', limitW);
      }

      if (topPstS < 0) {
        $(this).css('top', 0);
      } else if (topPstS > limitH) {
        $(this).css('top', limitH);
      }
      saveImg($(this));
    }
  });
}

// 글쓰기 박스
function contentAdd() {
  var con = "<div class='contentBox' style = 'left:0; top:0;position:absolute; width : 367px; height:200px;'>"
      + "<textarea rows='5' cols='50' style = 'resize:none; background-color : transparent;'></textarea><br/>"
      + "<p align = 'center'>글꼴:&nbsp;&nbsp;"
      + "<select id = 'fontType' style = 'width : 113px; height:26px; border : 1px solid black; margin-top : 10px;'>"
      + "<option>휴먼매직체</option>"
      + "<option>굴림</option>"
      + "<option>돋움</option>"
      + "</select>"
      + "&nbsp;&nbsp;크기:&nbsp;&nbsp;"
      + "<select id = 'fontSize' style = 'width : 113px; height:26px; border : 1px solid black; margin-top : 10px;'>"
      + "<option value='10'>10pt</option>"
      + "<option value='20'>20pt</option>"
      + "<option value='30'>30pt</option>"
      + "</select><br/>"
      + "색깔:&nbsp;&nbsp;"
      + "<select id = 'fontColor' style = 'width : 113px; height:26px; border : 1px solid black; margin-top : 10px;'>"
      + "<option value='red'>빨강</option>"
      + "<option value='blue'>파랑</option>"
      + "<option value='orange'>오렌지</option>"
      + "<option value='black'>검정</option>"
      + "</select>"
      + "<button type = 'button' class ='conAdd' onclick = 'conAdd()' style = 'height:31px; width : 113px;margin-left:44px;'>추가</button></p></div>"
  $(con.trim()).appendTo('.canvas').draggable()
}

// 글 추가
function conAdd() {
  var content = $(".contentBox").find("textarea").val();
  var fontType = $(".contentBox").find("#fontType").val();
  var fontSize = $(".contentBox").find("#fontSize").val();
  var fontColor = $(".contentBox").find("#fontColor").val();
  var posX = parseInt($(".contentBox").css('left'));
  var posY = parseInt($(".contentBox").css('top'));
  switch (fontType) {
  case "1":
    fontType = "휴먼매직체";
    break;
  case "2":
    fontType = "굴림";
    break;
  case "3":
    fontType = "돋움";
    break;
  }
  switch (fontSize) {
  case "10":
    fontSize = "10";
    break;
  case "20":
    fontSize = "20";
    break;
  case "30":
    fontSize = "30";
    break;
  }
  switch (fontColor) {
  case "red":
    fontColor = "red";
    break;
  case "blue":
    fontColor = "blue";
    break;
  case "orange":
    fontColor = "orange";
    break;
  case "black":
    fontColor = "black";
    break;
  }
  console.log("첫번째............. posX : " + posX + ", posY : " + posY);
  addContent($(
      "<div class='real-content' style = 'position:absolute; left:" + posX
          + "px; top:" + posY + "px;font-size:" + fontSize + "px; color: "
          + fontColor + "; font-family: " + fontType + ";'>" + content
          + "</div>").appendTo('.canvas').draggable())
  $(".contentBox").remove();
}

// db에 내용 저장
function addContent(contentDiv) {
  var content = $(".contentBox").find("textarea").val();
  var posXVal = parseInt($(".contentBox").css('left'));
  var posYVal = parseInt($(".contentBox").css('top'));
  var fontType = $(".contentBox").find("#fontType").val();
  var fontSize = $(".contentBox").find("#fontSize").val();
  var fontColor = $(".contentBox").find("#fontColor").val();
  var idVal = contentDiv.attr("id");
  var chapNo = count;
  var divPosX = parseInt(contentDiv.css('left'));
  var divPosY = parseInt(contentDiv.css('top'));

  var params = {
    content : content,
    fontType : fontType,
    fontSize : fontSize,
    fontColor : fontColor,
    contentNo : idVal,
    chapterNo : chapNo
  }

  if (contentDiv.hasClass("saved")) {
    if (divPosX && divPosY) {
      params["posX"] = divPosX;
      params["posY"] = divPosY;
      console.log("세번째............. posX : " + divPosX + ", posY : " + divPosY);
    }
    $.get("updateContent.json", params, function() {
    })
  } else {
    if (posXVal && posYVal) {
      params["posX"] = posXVal;
      params["posY"] = posYVal;
      console.log("두번째............. posX : " + posXVal + ", posY : " + posYVal);
    }
    $.get("insertContent.json", params, function(conNo) {
      contentDiv.attr("id", conNo);
      contentDiv.addClass("saved");
    })
  }
}

//글씨에 마우스 올렸을때
function contentHover() {
  $('.real-content')
      .hover(
          function() {
            if ($(this).find("button")) {
              $(this).find("button").remove();
            }
            $(this)
                .append(
                    $("<button type = 'button' class = 'btn-del-content' style = 'position:absolute; top:0px; left:0px;'>삭제</button>"));
          }, function() {
            $(this).find("button").remove();
          });
}
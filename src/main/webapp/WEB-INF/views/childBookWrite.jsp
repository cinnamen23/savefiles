<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=EUC-KR">
<script src="http://code.jquery.com/jquery-1.11.3.min.js"></script>
<link rel="stylesheet" type="text/css" href="resources/css/cssfile.css" media="all">

<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" type="text/css" href="resources/css/font.css">
<script type="text/javascript" src="resources/js/css3-mediaqueries.js"></script>
<script type="text/javascript" src="http://www.storylineonline.net/wp-content/cache/minify/000000/jY5BDoMwDAQ_BIkqvtFbX2AlLjIkcWo7B35fQLlQCak3a3Z25ckvn4ayDVM_xkyzgKHLVIaHX0jZuKJftAuuk59Qg1C1m0Z5UyHD3eGU-vITNpRXooji1cAoHI10UD2pWwXBmkDGSOD6n3fFWRCLclj_mjaBomTERXcfWiQe6yl4UEXTC_sC.js"></script>	
<script type="text/javascript">jQuery(window).load(function(){jQuery('#loading').fadeOut(300);jQuery('#full-site-content').css('opacity',1);jQuery('a.sort-links').click(function(){var bsort=jQuery(this).attr('id').split('-');var sort=bsort[1];if(sort=='reader'){jQuery('#container').addClass('sorted-reader');jQuery('.book-container .meta').each(function(){jQuery(this).css('display','block');})}else{jQuery('#container').removeClass('sorted-reader');}
jQuery('ul#sort-by a#sort-'+sort).click();});});</script>



<style>
	.reflection{
  -webkit-box-reflect: below -106px -webkit-gradient(linear, left top, left bottom, from(transparent), color-stop(50%, transparent), to(rgba(255,255,255,0.5)));
  z-index:0;
  position:relative;
}

.selectBox {
  position: relative;
  background: transparent; 
  background: #ffd241;
  z-index: 1;
  
  width:100%;
  height: 40px;
}

.selectBox option {
  background: #ffd241;
  font-family: Helvetica, sans-serif;
  font-size: 16px;
  color: #000000;
  outline: none;
  border: none;
  z-index: -2;
}
.selectBox option:hover {
  background: #006edd;
  cursor: pointer;
}

select {
  width: 250px;
  height: 40px;
  padding-left: 5px;
  background: transparent;
  outline: none;
  border: none;
  font-family: Helvetica, sans-serif;
  font-size: 15px;
  color: #000000;
  appearance: none;
  cursor: pointer;
  z-index: 1;
}

.canvas{
   width: 950px;
   height: 450px;
   float:right;
   margin-top:40px;
   background-color: #fff;
   border: 1px solid black;
}

 .items{
   width: 250px;
   height: 450px;
   box-sizing:border-box;
   /*
   position: relative;
   top: 60px;
   left: -250px;
   */
   border: 2px solid #ffd241;
 }
 .mini-canvas{
   width: 200px;
   height: 450px;
   position: relative;
   top: 9px;
   left: 1260px;      
   border: 2px solid #ffd241;
 }
 
 .top-buttons{
    float: right;
    position: relative;
    top: -487px;
    left: 950px;
}
 
 .items-plus {
  background-color: #ffd241;
  border: solid 1px transparent;
  color: #834258;
}
.items-plus:hover {
  border: solid 1px #FAED7D;
  background-color: #FAED7D;
  color: #834258;
  box-shadow: 0px 1px 4px rgba(217, 91, 67, 0.6);
}

 .page-plus {
  background-color: #ffd241;
  border: solid 1px transparent;
  color: #834258;
}
.page-plus:hover {
  border: solid 1px #DCB414;
  background-color: #DCB414;
  color: #834258;
  box-shadow: 0px 1px 4px rgba(217, 91, 67, 0.6);
}

 .save {
  background-color: #ffd241;
  border: solid 1px transparent;
  color: #834258;
  position: relative;
  top: 495px;
  left: 973px;
}
.save:hover {
  border: solid 1px #DCB414;
  background-color: #DCB414;
  color: #834258;
  box-shadow: 0px 1px 4px rgba(217, 91, 67, 0.6);
}



#page {
	width:1250px !important;
	max-width:none !important;
	margin:0 auto;
	padding:20px 0 0 0 !important;
}
header#masthead {
	width:100%;
	height:220px;
	overflow:hidden;
	position:relative;
}
header#masthead .wrapper {
	max-width:none !important;
}
header a#logo {
	left:50%;
	margin:0 0 0 -150px;
	float:none;
}

.layer-left {
	float:left;
	width:200px;
}

#content {
	width: 100%;
/*     overflow: hidden; */
}


</style>

<title>Insert title here</title>
</head>
<body>

<div id="full-site-content">
		<div id="page" class="hfeed site">
			<header id="masthead" class="site-header" role="banner">
				<div class="wrapper">
					<div class="sidebar" id="header-sidebar">
					</div>
					<a id="logo" href="${pageContext.request.contextPath}">ChildStory</a>
					<div id="header-right">
						<div class="button feedback">
							<a href="#login">login</a>
						</div>
						<div class="button donate">
							<a href="#qna">QnA</a>
						</div>
						<div class="button list">
							<a href="#addMember">회원가입</a>
						</div>
						<br class="clear" />
					</div>
				</div>
			</header>
			
			<div id = "main" class = "wrapper">
				<div class = "home">
					<div id = "primary" class = "site-content">
						<div id = "content" role = "main" style = "margin-left : -103px;">
						  
						  <!--카테고리메뉴  -->
						  <div class="layer-left">
						  	<label class="selectBox" style = "font-size : 25px;">
                             <select >
                               <option value="0">선택하세요</option>
                               <option value="1">배경화면</option>
                               <option value="2">주인공</option>
                               <option value="3">조연</option>
                               <option value="4">소품</option>
                             </select>
                            </label>
                            <!-- 아이템 목록 -->
                            <div class="items">
                            </div>
						  </div>
                         
                         <!-- 도화지 -->
						   <div class="canvas"></div>
						   
						 <!-- 상단 버튼 -->
						 <div class="top-buttons">
						    <button class="items-plus">아이템 추가</button>
						    <button class="page-plus">페이지 추가</button>
						 </div>  
						 
						 <button class="save">저장하기</button>
						 <div class="mini-canvas"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
		
<!-- 		<footer id="colophon" role="contentinfo"> -->
<!-- 			<div class="wrapper"> -->
<!-- 				<br class="clear" /> -->
<!-- 				<br class="clear" /> -->
<!-- 				<div id="text-4" class="copy widget widget_text"> -->
<!-- 					<div class="textwidget">Copyright © 2015 ChildStory. -->
<!-- 						All rights reserved.</div> -->
<!-- 				</div> -->
<!-- 			</div> -->
<!-- 		</footer> -->
	</div>

</body>
</html>
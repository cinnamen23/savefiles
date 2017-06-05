<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=EUC-KR">
<title>Insert title here</title>
</head>
<body>

<style>
#z{
float:right;
   margin-top:6000px;
position: relative;
}


</style>


<script src="https://code.jquery.com/jquery-3.2.1.min.js">
  </script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/fabric.js/1.7.11/fabric.min.js"></script>

 <!-- 도화지 -->
<div>		
		<canvas id="c" width="500" height="500"></canvas>


<button id="saveBtn">저장</button>
</div>



<div id="z">
        <img src="../resources/images/down-arrow.png" id="my-image">
</div>   
        
<script >

//reference canvas element (with id="c")
var canvasEl = document.getElementById('c');

// get 2d context to draw on (the "bitmap" mentioned earlier)
var ctx = canvasEl.getContext('2d');

// set fill color of context
ctx.fillStyle = 'red';

// create rectangle at a 100,100 point, with 20x20 dimensions
ctx.fillRect(100, 100, 20, 20);

//create a wrapper around native canvas element (with id="c")
var canvas = new fabric.Canvas('c');


var imgElement = document.getElementById('my-image');

var imgInstance = new fabric.Image(imgElement, {
  left: 100,
  top: 100,
  angle: 0,
  opacity: 0.85
});
canvas.add(imgInstance);
	

var comicSansText = new fabric.Text("I'm in Comic Sans", {
	  fontFamily: 'Comic Sans'
	});
	
canvas.add(comicSansText);




$("#saveBtn").on("click",function(){
	
console.log(JSON.stringify(canvas));

var jpgfile=JSON.stringify(canvas)


$.ajax({
	url:"/ttt/abc",
	type:"post",
	data:{"jpgfile":jpgfile},
	dataType:"json",
	  success: function(data)
      {
          alert(data); 
        
         
      }
	
	})
});




</script>
</body>
</html>
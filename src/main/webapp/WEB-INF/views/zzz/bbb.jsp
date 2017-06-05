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

#img1{

background-color: gray;
width: 300px;
height: 300px;


}

#img2{

background-color:fuchsia;
width: 300px;
height: 300px;


}


</style>


<img id="img1" src="">

<img id="img2">



<script src="http://code.jquery.com/jquery-1.11.1.min.js"></script>

<script src='../resources/gifshot.js'></script>

<script >

gifshot.createGIF({
	'images': ['https://40.media.tumblr.com/795409fb917e7dff3fb9d1589e2b402f/tumblr_nj0w5roP8L1tmxi3oo1_1280.jpg', '../display?fName=RC.jpg', 'http://i.imgur.com/Vo5mFZJ.gif']
},function(obj) {
	if(!obj.error) {
		var image = obj.image,
		animatedImage = document.getElementById('img1');
		animatedImage.src = image;
		document.body.appendChild(animatedImage);
		
	}})	


$("#img1").on('click',function(){
    console.log(this.src)
    var giffile=this.src
      
    console.log(giffile);
    
    
	$.ajax({
		url:"/zzz/bbb",
		type:"post",
		data:{"giffile":giffile},
		dataType:"json",
		  success: function(data)
          {
              alert(data); 
            
             
          }
		
	});
})


gifshot.createGIF({
    interval: 12.1,
    numFrames: 14,
    text: 'goguma',
    fontWeight: 'bold',
    fontSize: '36px',
    fontFamily: 'Arial',
    fontColor: '#8000ff',
    textAlign: 'right',
    textBaseline: 'center',
    sampleInterval: 2,
    numWorkers: 20
}, function (obj) {
    if (!obj.error) {
        var image = obj.image, animatedImage = document.createElement('img2');
        animatedImage.src = image;
        document.body.appendChild(animatedImage);
    }
});





	
</script>
</body>
</html>
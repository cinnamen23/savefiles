package org.bisun.web;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.Base64;
import java.util.Base64.Decoder;
import java.util.UUID;

import org.apache.commons.io.IOUtils;
import org.apache.log4j.Logger;
import org.springframework.stereotype.Controller;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/")
public class UploadController {
	
	private static final Logger logger = Logger.getLogger(testController.class);
	
//  사진올리는 페이지,,,,
	@RequestMapping(value = "/zzz/kkun", method = RequestMethod.GET)
	public void up123(){
		
	}
	
	
//  gif 저장하기 
	
	
	@RequestMapping(value = "/zzz/bbb", method = RequestMethod.POST)
	@ResponseBody
	public String[] upl21(@RequestParam("giffile") String[] giffile) throws IOException{
		
		String[] ss={"success","nice"};
		
		
		logger.info("upload post......................");
	 
		Decoder decoder = Base64.getDecoder();

		byte[] decodedBytes2 = decoder.decode(giffile[1]);

		UUID uid=UUID.randomUUID();
    
		String saveName = uid.toString() +".gif";
     
		File target1 = new File("c:\\zzz\\5am",saveName);
		
		FileCopyUtils.copy(decodedBytes2, target1);	 
	
		return ss;
	}
	

	
	
	@RequestMapping(value = "/zzz/bbb", method = RequestMethod.GET)
	public void up122(){
		
	}
	
		@RequestMapping(value ="/display",method = RequestMethod.GET)
		@ResponseBody
		public byte[] display(String fName) throws Exception {
			
			if(fName ==""){
				
				fName = "1.jpg";
			
			
		}
			FileInputStream fin = new FileInputStream("C:\\zzz\\5am\\" + fName);

			byte[] arr = IOUtils.toByteArray(fin);

			return arr;

	}
	}
	
	
	
	
	
	
	
	
	
	


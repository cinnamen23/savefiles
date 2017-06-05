package org.bisun.web;

import java.io.BufferedReader;
import java.io.IOException;

import javax.servlet.http.HttpServletRequest;

import org.apache.log4j.Logger;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.json.JSONObject;


@Controller
@RequestMapping("ttt")
public class testController {
	
	private static final Logger logger = Logger.getLogger(testController.class);
	
	@GetMapping("/childBookWrite")
	public void test(){
		
	}
	
	@GetMapping("/abc")
	public void tezzz(){
		
	}
	
	@PostMapping("/abc")
	public void teddd(HttpServletRequest request) throws IOException{
		
		StringBuffer json= new StringBuffer();
		String line=null;
		
		logger.info(request.getReader().toString());
		
		BufferedReader reader = request.getReader();
		while((line=reader.readLine())!=null){
			json.append(line);
		}
		
		
		logger.info(json.toString());
		
		JSONObject jOBJ=new JSONObject(json);
		
		logger.info(jOBJ);
		
		logger.info("들옴============================");
		
	}
	
}

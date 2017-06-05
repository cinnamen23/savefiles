package org.bisun.dto;

public class LoginDTO {

	
	private String sid;
	private String spw;
	private boolean useCookies;
	public String getSid() {
		return sid;
	}
	public void setSid(String sid) {
		this.sid = sid;
	}
	public String getUpw() {
		return spw;
	}
	public void setUpw(String upw) {
		this.spw = upw;
	}
	public boolean isUseCookies() {
		return useCookies;
	}
	public void setUseCookies(boolean useCookies) {
		this.useCookies = useCookies;
	}
	@Override
	public String toString() {
		return "LoginDTO [sid=" + sid + ", upw=" + spw + ", useCookies=" + useCookies + "]";
	}
	
	
	
}

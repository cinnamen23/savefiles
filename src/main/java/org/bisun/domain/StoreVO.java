package org.bisun.domain;

public class StoreVO {

	private String sid;
	private String spw;
	private String sname;
	private int spoint;
	public String getSid() {
		return sid;
	}
	public void setSid(String sid) {
		this.sid = sid;
	}
	public String getSpw() {
		return spw;
	}
	public void setSpw(String spw) {
		this.spw = spw;
	}
	public String getUname() {
		return sname;
	}
	public void setUname(String uname) {
		this.sname = uname;
	}
	public int getUpoint() {
		return spoint;
	}
	public void setUpoint(int upoint) {
		this.spoint = upoint;
	}
	@Override
	public String toString() {
		return "UserVO [sid=" + sid + ", spw=" + spw + ", uname=" + sname + ", upoint=" + spoint + "]";
	}
	
	
	
}

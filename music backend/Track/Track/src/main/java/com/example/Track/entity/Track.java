package com.example.Track.entity;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Track {
	
@Id
	private String url;
	private String name;
	private Integer rank1;
	private Integer listeners1;
	public Track() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Track(String url, String name, Integer rank1, Integer listeners1) {
		super();
		this.url = url;
		this.name = name;
		this.rank1 = rank1;
		this.listeners1 = listeners1;
	}
	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public Integer getRank1() {
		return rank1;
	}
	public void setRank1(Integer rank1) {
		this.rank1 = rank1;
	}
	public Integer getListeners1() {
		return listeners1;
	}
	public void setListeners1(Integer listeners1) {
		this.listeners1 = listeners1;
	}
	@Override
	public String toString() {
		return "Track [url=" + url + ", name=" + name + ", rank1=" + rank1 + ", listeners1=" + listeners1 + "]";
	}
	
	
	
}

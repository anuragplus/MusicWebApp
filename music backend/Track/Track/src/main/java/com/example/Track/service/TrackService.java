package com.example.Track.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.Track.entity.Track;
import com.example.Track.repo.TrackRepo;

@Service
public class TrackService {
	
	@Autowired
	private TrackRepo repo;
	
	public List<Track> getAllTrack(){
		return this.repo.findAll();
	}
	public Track addTrack(Track track) {
		this.repo.save(track);
		return track;
	}
}

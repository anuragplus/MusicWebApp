package com.example.Track.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.Track.entity.Track;
import com.example.Track.service.TrackService;

@RestController
@CrossOrigin(origins="*")
public class MyController {

	@Autowired
	private TrackService ts;
	
	@GetMapping("/tracks")
	public List<Track> getAllTracks(){
		return this.ts.getAllTrack();
	}
	@PostMapping("/tracks")
	public Track addTrack(@RequestBody Track track) {
		return this.ts.addTrack(track);
	}
}

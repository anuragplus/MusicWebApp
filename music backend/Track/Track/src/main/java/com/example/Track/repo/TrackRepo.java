package com.example.Track.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.Track.entity.Track;

public interface TrackRepo extends JpaRepository<Track,String> {

}

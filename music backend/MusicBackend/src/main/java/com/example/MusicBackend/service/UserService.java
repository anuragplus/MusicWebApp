package com.example.MusicBackend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.MusicBackend.entity.User;
import com.example.MusicBackend.repository.UserRepo;

@Service
public class UserService {

	@Autowired
	private UserRepo repo;
	
	public List<User> getAllUsers() {
		return repo.findAll();
	}
	public User addUser(User user) {
		repo.save(user);
		return user;
	}
	public User updateUser(User user) {
		repo.save(user);
		return user;
	}

}

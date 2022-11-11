package com.example.MusicBackend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.MusicBackend.entity.User;
import com.example.MusicBackend.service.UserService;

@RestController
@CrossOrigin(origins="*")
public class MyController {

	@Autowired
	private UserService us;
	
	@GetMapping("/users")
	public List<User> getUsers(){
		return this.us.getAllUsers();
	}
	
	@PostMapping("/users")
	public User addUser(@RequestBody User user) {
		return this.us.addUser(user);
	}
	
	@PutMapping("/users")
	public User updateUser(@RequestBody User user) {
		return this.us.updateUser(user);
	}
}

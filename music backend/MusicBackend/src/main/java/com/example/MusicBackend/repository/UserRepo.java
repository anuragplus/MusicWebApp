package com.example.MusicBackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.MusicBackend.entity.User;

public interface UserRepo extends JpaRepository<User,String> {

}

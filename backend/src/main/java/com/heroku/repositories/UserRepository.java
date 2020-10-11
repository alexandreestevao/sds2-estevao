package com.heroku.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.heroku.entities.User;

public interface UserRepository extends JpaRepository<User, Long> {


}

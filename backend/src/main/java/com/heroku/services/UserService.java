package com.heroku.services;

import java.time.Instant;
import java.util.List;
import java.util.Optional;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.ExampleMatcher;
import org.springframework.data.domain.ExampleMatcher.StringMatcher;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.heroku.dto.UserDTO;
import com.heroku.entities.User;
import com.heroku.repositories.UserRepository;
import com.heroku.services.exceptions.DatabaseException;
import com.heroku.services.exceptions.ResourceNotFoundException;

@Service
public class UserService {
	
	@Autowired
	private UserRepository repository;

	@Transactional(readOnly = true)
	public List<User> findByParams(User userFilter) {
		Example<User> ex = Example.of(userFilter, ExampleMatcher
				.matching()
				.withIgnoreCase()
				.withStringMatcher(StringMatcher.CONTAINING)); 
		return repository.findAll(ex);
	}

	@Transactional(readOnly = true)
	public User findById(Long id) {
		Optional<User> obj = repository.findById(id);
		return obj.orElseThrow(() -> new ResourceNotFoundException(id));
	}

	@Transactional
	public UserDTO insert(UserDTO dto) {
		User entity = new User();

		entity.setName(dto.getName());
		entity.setEmail(dto.getEmail());
		entity.setAge(dto.getAge());
		entity.setSalary(dto.getSalary());
		entity.setMoment(Instant.now());

		entity = repository.save(entity);
		return new UserDTO(entity);
	}	

	@Transactional
	public User update(Long id, User obj) {
		try {
			User entity = repository.getOne(id);
			updateData(entity, obj);
			return repository.save(entity);
		} catch (EntityNotFoundException e) {
			throw new ResourceNotFoundException(id);
		}
	}

	private void updateData(User entity, User obj) {
		entity.setName(obj.getName());
		entity.setEmail(obj.getEmail());
		entity.setAge(obj.getAge());
		entity.setSalary(obj.getSalary());
		entity.setMoment(Instant.now());		
	}
	
	@Transactional
	public void delete(Long id) {
		try {
			repository.deleteById(id);
		} catch (EmptyResultDataAccessException e) {
			throw new ResourceNotFoundException(id);
		} catch (DataIntegrityViolationException e) {
			throw new DatabaseException(e.getMessage());
		}
	}

}

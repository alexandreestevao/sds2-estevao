package com.heroku.resources;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.heroku.dto.UserDTO;
import com.heroku.entities.User;
import com.heroku.services.UserService;

@RestController
@RequestMapping("/api/users")
public class UserResource {
	
	@Autowired
	private UserService service;

	@GetMapping
	public ResponseEntity<List<User>> findByParams(
			@RequestParam(value = "name" , required = false) String name,
			@RequestParam(value = "age" , required = false) Integer age,
			@RequestParam(value = "salary" , required = false) Double salary) {
		
		User userFilter = new User();
		userFilter.setName(name);
		userFilter.setAge(age);		
		userFilter.setSalary(salary);
		
		List<User> users = service.findByParams(userFilter);
		return ResponseEntity.ok(users);
	}	

	@GetMapping(value = "{id}")
	public ResponseEntity<User> findById(@PathVariable Long id) {
		User obj = service.findById(id);
		return ResponseEntity.ok().body(obj);
	}

	@PostMapping
	public ResponseEntity<UserDTO> insert(@RequestBody UserDTO obj) {
		UserDTO newObj = service.insert(obj);
		return ResponseEntity.ok().body(newObj);
	}
	
	
	@PutMapping(value = "{id}")
	public ResponseEntity<User> update(@PathVariable Long id, @RequestBody User obj) {
		obj = service.update(id, obj);
		return ResponseEntity.ok().body(obj);
	}	

	@DeleteMapping(value = "{id}")
	public ResponseEntity<Void> delete(@PathVariable Long id) {
		service.delete(id);
		return ResponseEntity.noContent().build(); // 204
	}

}

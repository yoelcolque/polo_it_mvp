package com.poloit.backend.controller;

import com.poloit.backend.dto.UserDTO;
import com.poloit.backend.model.User;
import com.poloit.backend.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "*")
public class UserController {

    private final UserService service;

    public UserController(UserService service) {
        this.service = service;
    }

    @GetMapping
    public List<User> getAllUsers() {
        return service.getAllUsers();
    }

    @PostMapping
    public ResponseEntity<User> createUser(@RequestBody UserDTO dto) {
        User user = new User(dto.getName(), dto.getEmail());
        User saved = service.saveUser(user);
        return ResponseEntity.ok(saved);
    }
}

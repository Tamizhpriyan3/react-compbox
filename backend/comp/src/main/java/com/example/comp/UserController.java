package com.example.comp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/users")
public class UserController {
    @Autowired
    private UserService userService;
    
    @PostMapping("/signup")
    public User Register(@RequestBody User user) {
        // Check if user already exists
        if (userService.findByEmail(user.getEmail()) != null) {
            throw new RuntimeException("User already exists!");
        }
        return userService.saveUser(user);
    }
}
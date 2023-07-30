package com.kits.fakebook.controller;

import com.kits.fakebook.model.LoginRequest;
import com.kits.fakebook.model.User;
import com.kits.fakebook.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Objects;

@CrossOrigin(origins = "http://localhost:5173", maxAge = 3600)
@RestController
@RequestMapping("")
public class UserController {

    @Autowired
    private UserRepository userRepository;


    @GetMapping("/users")
    public List<User> getAllUsers(){
        return userRepository.findAll();
    }

    @PostMapping("/login")
    public User login(@RequestBody LoginRequest request) {
        String username = request.getUsername();
        String password = request.getPassword();
        User checkUser = userRepository.findByUsername(username);
        if(checkUser!=null){
            if(Objects.equals(checkUser.getPassword(), password)){
                return checkUser;
            }
        }
        return null;
    }

}

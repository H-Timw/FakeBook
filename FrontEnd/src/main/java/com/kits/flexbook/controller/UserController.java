package com.kits.flexbook.controller;

import com.kits.flexbook.model.LoginRequest;
import com.kits.flexbook.model.User;
import com.kits.flexbook.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:5173", maxAge = 3600)
@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserRepository userRepository;


    @GetMapping
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

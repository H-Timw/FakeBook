package com.kits.fakebook.controller;

import com.kits.fakebook.model.LoginRequest;
import com.kits.fakebook.model.SignUpRequest;
import com.kits.fakebook.model.User;
import com.kits.fakebook.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.sql.Timestamp;
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
    public User logIn(@RequestBody LoginRequest request) {
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

    @PostMapping("/signup")
    public String signUp(@RequestBody SignUpRequest data) {
        User newUser = new User();
        String username = data.getUsername();
        User checkUser = userRepository.findByUsername(username);
        if(checkUser==null){
            newUser.setUsername(data.getUsername());
            newUser.setEmail(data.getEmail());
            newUser.setPassword(data.getPassword());
            newUser.setBio(data.getBio());
            newUser.setProfilePicture(data.getProfilePicture());
            newUser.setCreatedAt(new Timestamp(System.currentTimeMillis()));
            newUser.setUpdatedAt(new Timestamp(System.currentTimeMillis()));
            userRepository.save(newUser);
            //check password strongly, username ruler or st here
            return "success";
        }else{
            return "samename";
        }
    }

}

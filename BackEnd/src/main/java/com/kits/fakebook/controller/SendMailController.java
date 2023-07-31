package com.kits.fakebook.controller;

import com.kits.fakebook.service.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("")
public class SendMailController {
    @Autowired
    EmailService mailSender;
    @GetMapping("/mail")
    public String test(){
        return "Hello";
    }
    @GetMapping("/send")
    public String sendEmail(){
        try {
            mailSender.sendEmail("doanminhhaonbk@gmail.com","Test Spring Boot Application", "Here is Content");
        }catch (Exception e){
            return e.toString();
        }
        return "Sent Completed";
    }
}

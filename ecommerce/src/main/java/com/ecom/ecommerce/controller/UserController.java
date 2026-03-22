package com.ecom.ecommerce.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ecom.ecommerce.model.User;
import com.ecom.ecommerce.service.UserService;

@RestController
@RequestMapping("/users")
@CrossOrigin("*")
public class UserController {

    @Autowired
    private UserService userService;


    @PostMapping("/register")
    public User registerUser(@RequestBody User user)
    {
        return userService.registerUser(user);
    }


    @PostMapping("/login")
    public User loginUser(@RequestBody User user)
    {
        return userService.loginUser(user.getEmail(),user.getPassword());
    }

    @GetMapping
    public List<User> getAllUsers()
    {
        return userService.getAllUsers();
    }
}
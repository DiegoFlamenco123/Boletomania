package com.example.api.controller;

import com.example.api.models.entities.User;
import com.example.api.services.UserService;
import com.example.api.utils.RequestErrorHandler;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    private UserService userService;

    @Autowired
    private RequestErrorHandler errorHandler;

    @PostMapping("/register")
    public ResponseEntity<?> register(@ModelAttribute @Valid User user, BindingResult validations){
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@ModelAttribute @Valid User user, BindingResult validations){
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/{value}")
    public ResponseEntity<?> getByEmail(@PathVariable(name = "value") String value){
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/all")
    public ResponseEntity<?> getAll(){
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PatchMapping("/{id}")
    public ResponseEntity<?> patch(@PathVariable(name = "id") String id, @ModelAttribute @Valid User user, BindingResult validations){
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable(name = "id") String id){
        return new ResponseEntity<>(HttpStatus.OK);
    }
}

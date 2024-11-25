package com.example.api.controller;

import com.example.api.models.entities.Token;
import com.example.api.models.entities.User;
import com.example.api.models.entities.dtos.*;
import com.example.api.services.UserService;
import com.example.api.utils.RequestErrorHandler;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.oauth2.client.authentication.OAuth2AuthenticationToken;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/")
@CrossOrigin
public class UserController {
    @Autowired
    private UserService userService;

    @Autowired
    private RequestErrorHandler errorHandler;

    @Autowired
    public PasswordEncoder passwordEncoder;

    @GetMapping("auth/test")
    public Map<String, Object> currentUser(OAuth2AuthenticationToken authentication) {
        return authentication.getPrincipal().getAttributes();
    }

    @PostMapping("auth/signup")
    public ResponseEntity<?> register(@ModelAttribute @Valid SaveUserDTO user, BindingResult validations){
        if(validations.hasErrors()){
            return new ResponseEntity<>(
                    errorHandler.mapErrors(validations.getFieldErrors()),
                    HttpStatus.BAD_REQUEST
            );
        }

        GetUserDTO getUser = userService.findOneByEmail(user.getEmail());

        if(getUser != null){
            return new ResponseEntity<>(new MessageDTO("Email already exists"), HttpStatus.BAD_REQUEST);
        }
        else{
            try{
                userService.save(user);
                return new ResponseEntity<>(new MessageDTO("User registered"), HttpStatus.CREATED);
            }
            catch (Exception e){
                e.printStackTrace();
                return new ResponseEntity<>(new MessageDTO("Internal Server Error"), HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }
    }

    @PostMapping("auth/signin")
    public ResponseEntity<?> login(@ModelAttribute @Valid UserLoginDTO info, BindingResult validations){
        User user = userService.findByEmail(info.getUsername());

        if(user == null){
            return new ResponseEntity<>(new MessageDTO("User not found"), HttpStatus.NOT_FOUND);
        }
        else if(!passwordEncoder.matches(info.getPassword(), user.getPassword())){
            return new ResponseEntity<>(new MessageDTO("Incorrect password"), HttpStatus.BAD_REQUEST);
        }
        else{
            try {
                Token token = userService.registerToken(user);
                return new ResponseEntity<>(new TokenDTO(token), HttpStatus.OK);
            } catch (Exception e) {
                e.printStackTrace();
                return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }

    }

    @GetMapping("auth/me")
    public ResponseEntity<?> me(){
        try {
            User user = userService.findUserAuthenticated();
            return new ResponseEntity<>(user, HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("user/all")
    public ResponseEntity<?> getAll(){
        List<User> users = userService.findAll();
        return new ResponseEntity<>(users, HttpStatus.OK);
    }

    @PatchMapping("user/{id}")
    public ResponseEntity<?> patch(@PathVariable(name = "id") String id, @ModelAttribute @Valid User user, BindingResult validations){
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("user/delete/{value}")
    public ResponseEntity<?> deleteByUsernameOrEmail(@PathVariable(name = "value") String value){
        try{
            userService.deleteByEmail(value);
            return new ResponseEntity<>(new MessageDTO("User deleted"), HttpStatus.OK);
        }
        catch (Exception e){
            e.printStackTrace();
            return new ResponseEntity<>(new MessageDTO("Internal Server Error"), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}

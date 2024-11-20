package com.example.api.controller;

import com.example.api.models.entities.UserxRole;
import com.example.api.services.UserxRoleService;
import com.example.api.utils.RequestErrorHandler;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user/role")
public class UserxRoleController {

    @Autowired
    private UserxRoleService userxRoleService;

    @Autowired
    private RequestErrorHandler errorHandler;

    @PostMapping("/save")
    public ResponseEntity<?> save(@ModelAttribute @Valid UserxRole userxRole, BindingResult validations){
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> delete(@PathVariable(name = "id") String id){
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<?> get(@PathVariable(name = "id") String id){
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/all")
    public ResponseEntity<?> getAll(){
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/all/{id}")
    public ResponseEntity<?> getAllByUserId(@PathVariable(name = "id") String id){
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PatchMapping("/patch/{id}")
    public ResponseEntity<?> patch(@PathVariable(name = "id") String id, @ModelAttribute @Valid UserxRole userxRole, BindingResult validations){
        return new ResponseEntity<>(HttpStatus.OK);
    }
}

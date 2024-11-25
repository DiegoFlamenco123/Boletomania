package com.example.api.controller;

import com.example.api.models.entities.Transfer;
import com.example.api.services.TransferService;
import com.example.api.utils.RequestErrorHandler;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/transfer")
@CrossOrigin
public class TransferController {

    @Autowired
    private TransferService transferService;

    @Autowired
    private RequestErrorHandler errorHandler;

    @PostMapping("/send")
    public ResponseEntity<?> send(@ModelAttribute @Valid Transfer transfer, BindingResult validations){
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @PostMapping("/receive")
    public ResponseEntity<?> receive(@ModelAttribute @Valid Transfer transfer, BindingResult validations){
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getById(@PathVariable(name = "id") String id){
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/all")
    public ResponseEntity<?> getAll(){
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PatchMapping("/{id}")
    public ResponseEntity<?> patch(@PathVariable(name = "id") String id, @ModelAttribute @Valid Transfer transfer, BindingResult validations){
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable(name = "id") String id){
        return new ResponseEntity<>(HttpStatus.OK);
    }
}

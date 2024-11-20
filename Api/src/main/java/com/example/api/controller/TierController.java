package com.example.api.controller;

import com.example.api.models.entities.Tier;
import com.example.api.services.TierService;
import com.example.api.utils.RequestErrorHandler;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/event/tier")
public class TierController {
    @Autowired
    private TierService tierService;

    @Autowired
    private RequestErrorHandler errorHandler;

    @PostMapping("/create")
    public ResponseEntity<?> create(@ModelAttribute @Valid Tier tier, BindingResult validations){
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable(name = "id") String id){
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PatchMapping("/{id}")
    public ResponseEntity<?> patch(@PathVariable(name = "id") String id, @ModelAttribute @Valid Tier tier, BindingResult validations){
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

    @GetMapping("/event/{id}")
    public ResponseEntity<?> getByEventId(@PathVariable(name = "id") String id){
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/event/{id}/all")
    public ResponseEntity<?> getAllByEventId(@PathVariable(name = "id") String id){
        return new ResponseEntity<>(HttpStatus.OK);
    }

}

package com.example.api.controller;

import com.example.api.models.entities.User;
import com.example.api.services.EventService;
import com.example.api.utils.RequestErrorHandler;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/event")
public class EventController {
    @Autowired
    private EventService eventService;

    @Autowired
    private RequestErrorHandler errorHandler;

    @PostMapping("/create")
    public ResponseEntity<?> register(@ModelAttribute @Valid User user, BindingResult validations){
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable(name = "id") String id){
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
    public ResponseEntity<?> patch(@PathVariable(name = "id") String id, @ModelAttribute @Valid User user, BindingResult validations){
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PatchMapping("/tittle/{id}")
    public ResponseEntity<?> patchTittle(@PathVariable(name = "id") String id, @ModelAttribute @Valid User user, BindingResult validations){
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PatchMapping("/date/{id}")
    public ResponseEntity<?> patchDate(@PathVariable(name = "id") String id, @ModelAttribute @Valid User user, BindingResult validations){
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PatchMapping("/hour/{id}")
    public ResponseEntity<?> patchHour(@PathVariable(name = "id") String id, @ModelAttribute @Valid User user, BindingResult validations){
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PatchMapping("/duration/{id}")
    public ResponseEntity<?> patchDuration(@PathVariable(name = "id") String id, @ModelAttribute @Valid User user, BindingResult validations){
        return new ResponseEntity<>(HttpStatus.OK);
    }
}

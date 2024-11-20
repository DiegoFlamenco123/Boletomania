package com.example.api.controller;

import com.example.api.models.entities.Ticket;
import com.example.api.services.TicketService;
import com.example.api.utils.RequestErrorHandler;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/ticket")
public class TicketController {
    @Autowired
    private TicketService ticketService;

    @Autowired
    private RequestErrorHandler errorHandler;

    @PostMapping("/save")
    public ResponseEntity<?> save(@ModelAttribute @Valid Ticket ticket, BindingResult validations){
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @PostMapping("/delete")
    public ResponseEntity<?> deleteByTicketNumber(@ModelAttribute @Valid Ticket ticket, BindingResult validations){
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping("/delete")
    public ResponseEntity<?> deleteById(@ModelAttribute @Valid Ticket ticket, BindingResult validations){
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping("/find")
    public ResponseEntity<?> findOneByTicketNumber(@ModelAttribute @Valid Ticket ticket, BindingResult validations){
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PatchMapping("/{id}")
    public ResponseEntity<?> patch(@PathVariable(name = "id") String id, @ModelAttribute @Valid Ticket ticket, BindingResult validations){
        return new ResponseEntity<>(HttpStatus.OK);
    }

}

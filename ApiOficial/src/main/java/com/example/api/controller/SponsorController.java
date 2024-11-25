package com.example.api.controller;

import com.example.api.models.entities.Organizer;
import com.example.api.models.entities.Sponsor;
import com.example.api.models.entities.User;
import com.example.api.models.entities.dtos.MessageDTO;
import com.example.api.models.entities.dtos.SaveSponsorDTO;
import com.example.api.services.SponsorService;
import com.example.api.utils.RequestErrorHandler;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/sponsor")
@CrossOrigin
public class SponsorController {
    @Autowired
    private SponsorService sponsorService;

    @Autowired
    private RequestErrorHandler errorHandler;

    @PostMapping("/save")
    public ResponseEntity<?> create(@ModelAttribute @Valid SaveSponsorDTO sponsor, BindingResult validations){
        if(validations.hasErrors()){
            return new ResponseEntity<>(
                    errorHandler.mapErrors(validations.getFieldErrors()),
                    HttpStatus.BAD_REQUEST
            );
        }

        Sponsor getSponsor = sponsorService.findBySponsor(sponsor.getSponsor());

        if(getSponsor != null){
            return new ResponseEntity<>(new MessageDTO("Sponsor already exists"), HttpStatus.BAD_REQUEST);
        }
        else{
            try{
                sponsorService.save(sponsor);
                return new ResponseEntity<>(new MessageDTO("Sponsor registered"), HttpStatus.CREATED);
            }
            catch (Exception e){
                e.printStackTrace();
                return new ResponseEntity<>(new MessageDTO("Internal Server Error"), HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }
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
            try{
                return new ResponseEntity<>(sponsorService.findAll(), HttpStatus.OK);
            }
            catch (Exception e){
                e.printStackTrace();
                return new ResponseEntity<>(new MessageDTO("Internal Server Error"), HttpStatus.INTERNAL_SERVER_ERROR);
            }
    }

    @PatchMapping("/update/{id}")
    public ResponseEntity<?> update(@PathVariable(name = "id") String id, @ModelAttribute @Valid User user, BindingResult validations){
        return new ResponseEntity<>(HttpStatus.OK);
    }
}

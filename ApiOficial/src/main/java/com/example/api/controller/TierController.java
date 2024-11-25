package com.example.api.controller;

import com.example.api.models.entities.Event;
import com.example.api.models.entities.Organizer;
import com.example.api.models.entities.Tier;
import com.example.api.models.entities.dtos.MessageDTO;
import com.example.api.models.entities.dtos.SaveTierDTO;
import com.example.api.services.EventService;
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
@CrossOrigin
public class TierController {
    @Autowired
    private TierService tierService;

    @Autowired
    private EventService eventService;

    @Autowired
    private RequestErrorHandler errorHandler;

    @PostMapping("/create")
    public ResponseEntity<?> create(@ModelAttribute @Valid SaveTierDTO tier, BindingResult validations){
        if(validations.hasErrors()){
            return new ResponseEntity<>(
                    errorHandler.mapErrors(validations.getFieldErrors()),
                    HttpStatus.BAD_REQUEST
            );
        }

        Event getEvent = eventService.findByTitle(tier.getNameEvent());

        System.out.println(getEvent);

        if(getEvent == null){
            return new ResponseEntity<>(new MessageDTO("Event doesnt exist"), HttpStatus.BAD_REQUEST);
        }
        else{
            try{
                tierService.save(tier);
                return new ResponseEntity<>(new MessageDTO("Tier created"), HttpStatus.CREATED);
            }
            catch (Exception e){
                e.printStackTrace();
                return new ResponseEntity<>(new MessageDTO("Internal Server Error"), HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }
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

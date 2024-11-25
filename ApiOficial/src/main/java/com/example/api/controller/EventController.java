package com.example.api.controller;

import com.example.api.models.entities.Event;
import com.example.api.models.entities.User;
import com.example.api.models.entities.dtos.MessageDTO;
import com.example.api.models.entities.dtos.SaveEventDTO;
import com.example.api.services.EventService;
import com.example.api.services.UserService;
import com.example.api.utils.RequestErrorHandler;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/event")
@CrossOrigin
public class EventController {
    @Autowired
    private EventService eventService;

    @Autowired
    private RequestErrorHandler errorHandler;

    @Autowired
    private UserService userService;

    @PostMapping("/create")
    public ResponseEntity<?> create(@ModelAttribute @Valid SaveEventDTO event, BindingResult validations){
        if(validations.hasErrors()){
            return new ResponseEntity<>(
                    errorHandler.mapErrors(validations.getFieldErrors()),
                    HttpStatus.BAD_REQUEST
            );
        }

        Event getEvent = eventService.findByTitle(event.getTitle());

        if(getEvent != null){
            return new ResponseEntity<>(new MessageDTO("Event already exists"), HttpStatus.BAD_REQUEST);
        }
        else{
            try{
                eventService.save(event);
                return new ResponseEntity<>(new MessageDTO("Event registered"), HttpStatus.CREATED);
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

    @GetMapping("/{id}")
    public ResponseEntity<?> getById(@PathVariable(name = "id") String id){
        User getUser = userService.findUserAuthenticated();

        System.out.println(id);

        if(getUser == null){
            return new ResponseEntity<>(new MessageDTO("User doesnt exist"), HttpStatus.BAD_REQUEST);
        }
        else{
            try{
                return new ResponseEntity<>(eventService.findOneById(id), HttpStatus.OK);
            }
            catch (Exception e){
                e.printStackTrace();
                return new ResponseEntity<>(new MessageDTO("Internal Server Error"), HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }
    }

    @GetMapping("/main/all")
    public ResponseEntity<?> getMainAll(){
        User getUser = userService.findUserAuthenticated();

        if(getUser == null){
            return new ResponseEntity<>(new MessageDTO("User doesnt exist"), HttpStatus.BAD_REQUEST);
        }
        else{
            try{
                return new ResponseEntity<>(eventService.getMainAll(), HttpStatus.OK);
            }
            catch (Exception e){
                e.printStackTrace();
                return new ResponseEntity<>(new MessageDTO("Internal Server Error"), HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }
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

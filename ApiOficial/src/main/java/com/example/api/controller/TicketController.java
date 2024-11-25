package com.example.api.controller;

import com.example.api.models.entities.Event;
import com.example.api.models.entities.Ticket;
import com.example.api.models.entities.Tier;
import com.example.api.models.entities.User;
import com.example.api.models.entities.dtos.MessageDTO;
import com.example.api.models.entities.dtos.SaveTicketDTO;
import com.example.api.models.entities.dtos.TicketDTO;
import com.example.api.services.TicketService;
import com.example.api.services.TierService;
import com.example.api.services.UserService;
import com.example.api.utils.RequestErrorHandler;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Date;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/ticket")
@CrossOrigin
public class TicketController {
    @Autowired
    private TicketService ticketService;

    @Autowired
    private UserService userService;

    @Autowired
    private TierService tierService;

    @Autowired
    private RequestErrorHandler errorHandler;

    @PostMapping("/save")
    public ResponseEntity<?> save(@ModelAttribute @Valid TicketDTO ticket, BindingResult validations){
        if(validations.hasErrors()){
            return new ResponseEntity<>(
                    errorHandler.mapErrors(validations.getFieldErrors()),
                    HttpStatus.BAD_REQUEST
            );
        }

        User getUser = userService.findUserAuthenticated();

        if(getUser == null){
            return new ResponseEntity<>(new MessageDTO("User doesnt exist"), HttpStatus.BAD_REQUEST);
        }
        else{
            try{

                DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
                LocalDateTime date = LocalDateTime.parse(ticket.getPurchaseDate(), formatter);
                Timestamp newDate = Timestamp.valueOf(date);

                Tier tier = tierService.findOneById(ticket.getTier());


                if (tier == null) {
                    return new ResponseEntity<>(new MessageDTO("Tier doesnt exist"), HttpStatus.BAD_REQUEST);
                }
                else {
                    SaveTicketDTO saveTicketDTO = new SaveTicketDTO(
                            getUser,
                            tier,
                            newDate
                    );
                    ticketService.save(saveTicketDTO);
                    return new ResponseEntity<>(new MessageDTO("Ticket created"), HttpStatus.CREATED);

                }

            }
            catch (Exception e){
                e.printStackTrace();
                return new ResponseEntity<>(new MessageDTO("Internal Server Error"), HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }
    }

    @PostMapping("/delete")
    public ResponseEntity<?> deleteByTicketNumber(@ModelAttribute @Valid Ticket ticket, BindingResult validations){
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping("/delete/{id}")
    public ResponseEntity<?> deleteById(@ModelAttribute @Valid Ticket ticket, BindingResult validations, @PathVariable String id){
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping("/find")
    public ResponseEntity<?> findOneByTicketNumber(@ModelAttribute @Valid Ticket ticket, BindingResult validations){
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PatchMapping("/{id}")
    public ResponseEntity<?> validateTicket(@PathVariable(name = "id") String id) {
        User getUser = userService.findUserAuthenticated();

        if (getUser == null) {
            return new ResponseEntity<>(new MessageDTO("User doesn't exist"), HttpStatus.BAD_REQUEST);
        } else {
            try {
                Boolean valid = ticketService.updateTicketValid(id);

                if (valid) {
                    return new ResponseEntity<>(new MessageDTO("Ticket accepted"), HttpStatus.OK);
                } else {
                    return new ResponseEntity<>(new MessageDTO("Ticket was already validated"), HttpStatus.CONFLICT);
                }
            } catch (Exception e) {
                e.printStackTrace();
                return new ResponseEntity<>(new MessageDTO("Internal Server Error"), HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }
    }

    @GetMapping("/all")
    public ResponseEntity<?> findAll(){
        User getUser = userService.findUserAuthenticated();

        if(getUser == null){
            return new ResponseEntity<>(new MessageDTO("User doesnt exist"), HttpStatus.BAD_REQUEST);
        }
        else{
            try{
                return new ResponseEntity<>(ticketService.findAll(getUser), HttpStatus.OK);
            }
            catch (Exception e){
                e.printStackTrace();
                return new ResponseEntity<>(new MessageDTO("Internal Server Error"), HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }
    }

    @GetMapping("/statistics")
    public ResponseEntity<List<Map<String, Object>>> getTicketStatistics() {
        List<Map<String, Object>> statistics = ticketService.getTicketStatistics();
        return ResponseEntity.ok(statistics);
    }

}

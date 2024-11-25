package com.example.api.controller;

import com.example.api.models.entities.Role;
import com.example.api.models.entities.Site;
import com.example.api.models.entities.User;
import com.example.api.models.entities.dtos.MessageDTO;
import com.example.api.models.entities.dtos.SaveRoleDTO;
import com.example.api.services.RoleService;
import com.example.api.utils.RequestErrorHandler;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/role")
@CrossOrigin
public class RoleController {
    @Autowired
    private RoleService roleService;

    @Autowired
    private RequestErrorHandler errorHandler;

    @PostMapping("/save")
    public ResponseEntity<?> register(@ModelAttribute @Valid SaveRoleDTO role, BindingResult validations){
        if(validations.hasErrors()){
            return new ResponseEntity<>(
                    errorHandler.mapErrors(validations.getFieldErrors()),
                    HttpStatus.BAD_REQUEST
            );
        }

        Role getRole = roleService.findByRole(role.getRole());

        if(getRole != null){
            return new ResponseEntity<>(new MessageDTO("Role already exists"), HttpStatus.BAD_REQUEST);
        }
        else{
            try{
                roleService.save(role);
                return new ResponseEntity<>(new MessageDTO("Role registered"), HttpStatus.CREATED);
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
    public ResponseEntity<?> getByEmail(@PathVariable(name = "id") String id){
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/all")
    public ResponseEntity<?> getAll(){
        return new ResponseEntity<>(HttpStatus.OK);
    }
}

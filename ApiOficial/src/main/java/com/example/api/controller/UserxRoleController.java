package com.example.api.controller;

import com.example.api.models.entities.Role;
import com.example.api.models.entities.User;
import com.example.api.models.entities.UserxRole;
import com.example.api.models.entities.dtos.*;
import com.example.api.services.RoleService;
import com.example.api.services.UserService;
import com.example.api.services.UserxRoleService;
import com.example.api.utils.RequestErrorHandler;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.util.Formattable;
import java.util.List;

@RestController
@RequestMapping("/user/role")
@CrossOrigin
public class UserxRoleController {

    @Autowired
    private UserxRoleService userxRoleService;

    @Autowired
    private RequestErrorHandler errorHandler;

    @Autowired
    private UserService userService;

    @Autowired
    private RoleService roleService;

    @PostMapping("/save")
    public ResponseEntity<?> save(@ModelAttribute @Valid RoleCodeDTO roleCode, BindingResult validations){
        if(validations.hasErrors()){
            return new ResponseEntity<>(
                    errorHandler.mapErrors(validations.getFieldErrors()),
                    HttpStatus.BAD_REQUEST
            );
        }

        User user = userService.findUserAuthenticated();
        Role role = roleService.findByCode(roleCode.getRoleCode());

        if(role == null){
            return new ResponseEntity<>(new MessageDTO("Role doesnt exist"), HttpStatus.BAD_REQUEST);
        }
        else{
            try{
                SaveUserxRoleDTO userxRole = new SaveUserxRoleDTO(user, role);
                userxRoleService.save(userxRole);
                return new ResponseEntity<>(new MessageDTO("Role assigned to user"), HttpStatus.CREATED);
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
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/user/all")
    public ResponseEntity<?> getAllByUserId(){
        User user = userService.findUserAuthenticated();

        if (user == null) {
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }
        else{
            List<UserxRole> userxRoles = userxRoleService.findByUser(user);

            for (UserxRole userxRole : userxRoles) {
                GetRoleFromUserDTO role = new GetRoleFromUserDTO(userxRole.getUser().getUsername(),
                        userxRole.getRole().getRole());

                return new ResponseEntity<>(role, HttpStatus.OK);
            }

            return new ResponseEntity<>(HttpStatus.OK);
        }
    }

    @PatchMapping("/patch/{id}")
    public ResponseEntity<?> patch(@PathVariable(name = "id") String id, @ModelAttribute @Valid UserxRole userxRole, BindingResult validations){
        return new ResponseEntity<>(HttpStatus.OK);
    }
}

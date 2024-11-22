package com.example.api.services;

import com.example.api.models.entities.Token;
import com.example.api.models.entities.User;
import com.example.api.models.entities.dtos.GetUserDTO;
import com.example.api.models.entities.dtos.SaveUserDTO;

import java.util.List;

public interface UserService {
    void save(SaveUserDTO user) throws Exception;
    void deleteByEmail(String value) throws Exception;
    void deleteById(String id) throws Exception;
    GetUserDTO findOneByEmail(String value);
    User findByEmail(String email);

    User findByEmailAndPassword(String email, String password);
    List<User> findAll();
    void updatePassword(String password, String id);
    void updateEmail(String email);
    void activateUser(String id);
    Token registerToken(User user) throws Exception;
    Boolean isTokenValid(User user, String token);
    void cleanTokens(User user) throws Exception;
    //Find User authenticated
    User findUserAuthenticated();

}

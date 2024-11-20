package com.example.api.services;

import com.example.api.models.entities.User;

import java.util.List;

public interface UserService {
    void save(User user) throws Exception;
    void deleteByEmail(String value) throws Exception;
    void deleteById(String id) throws Exception;
    User findOneByEmail(String value);
    List<User> findAll();
    void updatePassword(String password, String id);
    void updateUsername(String username);
    void updateEmail(String email);
    void activateUser(String id);

}

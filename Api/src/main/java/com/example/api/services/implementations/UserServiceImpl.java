package com.example.api.services.implementations;

import com.example.api.models.entities.User;
import com.example.api.services.UserService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {
    @Override
    public void save(User user) throws Exception {

    }

    @Override
    public void deleteByEmail(String value) throws Exception {

    }

    @Override
    public void deleteById(String id) throws Exception {

    }

    @Override
    public User findOneByEmail(String value) {
        return null;
    }

    @Override
    public List<User> findAll() {
        return null;
    }

    @Override
    public void updatePassword(String password, String id) {

    }

    @Override
    public void updateUsername(String username) {

    }

    @Override
    public void updateEmail(String email) {

    }

    @Override
    public void activateUser(String id) {

    }
}

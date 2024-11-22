package com.example.api.services;

import com.example.api.models.entities.UserxEvent;

import java.util.List;

public interface UserxEventService {
    void save(UserxEvent userxEvent) throws Exception;
    void deleteById(String id) throws Exception;
    UserxEvent findOneById(String id);
    List<UserxEvent> findAll();
    void update(UserxEvent userxEvent);
}

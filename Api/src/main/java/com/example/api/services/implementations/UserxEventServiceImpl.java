package com.example.api.services.implementations;

import com.example.api.models.entities.UserxEvent;
import com.example.api.services.UserxEventService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserxEventServiceImpl implements UserxEventService {
    @Override
    public void save(UserxEvent userxEvent) throws Exception {

    }

    @Override
    public void deleteById(String id) throws Exception {

    }

    @Override
    public UserxEvent findOneById(String id) {
        return null;
    }

    @Override
    public List<UserxEvent> findAll() {
        return null;
    }

    @Override
    public void update(UserxEvent userxEvent) {

    }
}

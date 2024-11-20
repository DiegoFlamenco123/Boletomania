package com.example.api.services.implementations;

import com.example.api.models.entities.Event;
import com.example.api.services.EventService;
import org.springframework.stereotype.Service;

import java.security.Timestamp;
import java.util.List;

@Service
public class EventServiceImpl implements EventService {
    @Override
    public void save(Event event) throws Exception {

    }

    @Override
    public void deleteById(String id) throws Exception {

    }

    @Override
    public Event findOneById(String id) {
        return null;
    }

    @Override
    public List<Event> findAll() {
        return null;
    }

    @Override
    public void updateEvent(Event event) {

    }

    @Override
    public void updateTitle(String title) {

    }

    @Override
    public void updateDate(Timestamp date) {

    }

    @Override
    public void updateHour(String hour) {

    }

    @Override
    public void updateDuration(String duration) {

    }
}

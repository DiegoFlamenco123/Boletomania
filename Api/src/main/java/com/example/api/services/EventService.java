package com.example.api.services;

import com.example.api.models.entities.Event;

import java.security.Timestamp;
import java.util.List;

public interface EventService {
    void save(Event event) throws Exception;
    void deleteById(String id) throws Exception;
    Event findOneById(String id);
    List<Event> findAll();
    void updateEvent(Event event);
    void updateTitle(String title);
    void updateDate(Timestamp date);
    void updateHour(String hour);
    void updateDuration(String duration);
}

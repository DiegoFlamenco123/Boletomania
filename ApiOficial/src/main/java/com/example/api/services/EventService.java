package com.example.api.services;

import com.example.api.models.entities.Event;
import com.example.api.models.entities.dtos.GetEventDTO;
import com.example.api.models.entities.dtos.GetMainPageEventDTO;
import com.example.api.models.entities.dtos.SaveEventDTO;

import java.security.Timestamp;
import java.util.List;

public interface EventService {
    void save(SaveEventDTO event) throws Exception;
    void deleteById(String id) throws Exception;
    GetEventDTO findOneById(String id);

    Event findByTitle(String title);

    List<GetMainPageEventDTO> getMainAll();

    List<Event> findAll();
    void updateEvent(Event event);
    void updateTitle(String title);
    void updateDate(Timestamp date);
    void updateHour(String hour);
    void updateDuration(String duration);
}

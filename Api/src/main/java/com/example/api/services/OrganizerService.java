package com.example.api.services;

import com.example.api.models.entities.Organizer;

import java.util.List;

public interface OrganizerService {
    void save(Organizer organizer) throws Exception;
    void deleteById(String id) throws Exception;
    Organizer findOneById(String id);
    List<Organizer> findAll();
    void updateOrganizer(Organizer organizer);
}

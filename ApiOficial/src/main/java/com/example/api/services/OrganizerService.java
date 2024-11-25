package com.example.api.services;

import com.example.api.models.entities.Organizer;
import com.example.api.models.entities.dtos.SaveOrganizerDTO;

import java.util.List;

public interface OrganizerService {
    void save(SaveOrganizerDTO organizer) throws Exception;
    void deleteById(String id) throws Exception;
    Organizer findOneById(String id);

    Organizer findByOrganizer(String organizer);
    List<Organizer> findAll();
    void updateOrganizer(Organizer organizer);
}

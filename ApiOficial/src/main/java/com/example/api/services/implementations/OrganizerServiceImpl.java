package com.example.api.services.implementations;

import com.example.api.models.entities.Organizer;
import com.example.api.models.entities.dtos.SaveOrganizerDTO;
import com.example.api.repositories.OrganizerRepository;
import com.example.api.services.OrganizerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrganizerServiceImpl implements OrganizerService {

    @Autowired
    private OrganizerRepository organizerRepository;

    @Override
    public void save(SaveOrganizerDTO organizer) throws Exception {
        Organizer newOrganizer = new Organizer(
                organizer.getOrganizer()
        );

        organizerRepository.save(newOrganizer);
    }

    @Override
    public void deleteById(String id) throws Exception {

    }

    @Override
    public Organizer findOneById(String id) {
        return null;
    }

    @Override
    public Organizer findByOrganizer(String organizer) {
        return organizerRepository.findByOrganizer(organizer);
    }

    @Override
    public List<Organizer> findAll() {
        return organizerRepository.findAll();
    }

    @Override
    public void updateOrganizer(Organizer organizer) {

    }
}

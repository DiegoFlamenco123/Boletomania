package com.example.api.services.implementations;

import com.example.api.models.entities.Organizer;
import com.example.api.services.OrganizerService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrganizerServiceImpl implements OrganizerService {
    @Override
    public void save(Organizer organizer) throws Exception {

    }

    @Override
    public void deleteById(String id) throws Exception {

    }

    @Override
    public Organizer findOneById(String id) {
        return null;
    }

    @Override
    public List<Organizer> findAll() {
        return null;
    }

    @Override
    public void updateOrganizer(Organizer organizer) {

    }
}

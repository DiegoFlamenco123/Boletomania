package com.example.api.repositories;

import com.example.api.models.entities.Organizer;
import org.springframework.data.repository.ListCrudRepository;

import java.util.UUID;

public interface OrganizerRepository
    extends ListCrudRepository<Organizer, UUID> {

    Organizer findByOrganizer(String organizer);
}

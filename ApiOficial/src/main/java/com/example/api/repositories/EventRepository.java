package com.example.api.repositories;

import com.example.api.models.entities.Event;
import org.springframework.data.repository.ListCrudRepository;

import java.util.UUID;

public interface EventRepository
    extends ListCrudRepository<Event, UUID> {

    Event findByTitle(String title);
}

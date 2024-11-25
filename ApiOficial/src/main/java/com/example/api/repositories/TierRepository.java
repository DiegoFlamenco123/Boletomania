package com.example.api.repositories;

import com.example.api.models.entities.Event;
import com.example.api.models.entities.Tier;
import org.springframework.data.repository.ListCrudRepository;

import java.util.List;
import java.util.UUID;

public interface TierRepository
    extends ListCrudRepository<Tier, UUID> {

    List<Tier> findAllByEvent(Event event);
}

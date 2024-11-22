package com.example.api.services;

import com.example.api.models.entities.Event;
import com.example.api.models.entities.Tier;
import com.example.api.models.entities.dtos.SaveTierDTO;

import java.util.List;
import java.util.UUID;

public interface TierService {
    void save(SaveTierDTO tier) throws Exception;
    void deleteById(String id) throws Exception;
    Tier findOneById(UUID id);
    List<Tier> findAllByEvent(Event event);
    List<Tier> findAll();
    void updateName(String name, String id);
    void updateCapacity(int capacity, String id);
    void updatePrice(double price, String id);
}

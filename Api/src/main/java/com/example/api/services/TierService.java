package com.example.api.services;

import com.example.api.models.entities.Event;
import com.example.api.models.entities.Tier;

import java.util.List;

public interface TierService {
    void save(Tier tier) throws Exception;
    void deleteById(String id) throws Exception;
    Tier findOneById(String id);
    List<Tier> findAllByEvent(Event event);
    List<Tier> findAll();
    void updateName(String name, String id);
    void updateCapacity(int capacity, String id);
    void updatePrice(double price, String id);
}

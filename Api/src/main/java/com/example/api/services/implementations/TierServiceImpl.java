package com.example.api.services.implementations;

import com.example.api.models.entities.Event;
import com.example.api.models.entities.Tier;
import com.example.api.services.TierService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TierServiceImpl implements TierService {
    @Override
    public void save(Tier tier) throws Exception {

    }

    @Override
    public void deleteById(String id) throws Exception {

    }

    @Override
    public Tier findOneById(String id) {
        return null;
    }

    @Override
    public List<Tier> findAllByEvent(Event event) {
        return null;
    }

    @Override
    public List<Tier> findAll() {
        return null;
    }

    @Override
    public void updateName(String name, String id) {

    }

    @Override
    public void updateCapacity(int capacity, String id) {

    }

    @Override
    public void updatePrice(double price, String id) {

    }
}

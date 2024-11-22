package com.example.api.services.implementations;

import com.example.api.models.entities.Event;
import com.example.api.models.entities.Tier;
import com.example.api.models.entities.dtos.SaveTierDTO;
import com.example.api.repositories.TierRepository;
import com.example.api.services.EventService;
import com.example.api.services.TierService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class TierServiceImpl implements TierService {

    @Autowired
    private TierRepository tierRepository;

    @Autowired
    private EventService eventService;

    @Override
    public void save(SaveTierDTO tier) throws Exception {

        Event event = eventService.findByTitle(tier.getNameEvent());

        Tier newTier = new Tier(
                event,
                tier.getName(),
                tier.getCapacity(),
                tier.getPrice()
        );

        tierRepository.save(newTier);
    }

    @Override
    public void deleteById(String id) throws Exception {

    }

    @Override
    public Tier findOneById(UUID id) {
        return tierRepository.findById(id).orElse(null);
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

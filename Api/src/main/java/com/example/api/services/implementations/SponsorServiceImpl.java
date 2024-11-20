package com.example.api.services.implementations;

import com.example.api.models.entities.Sponsor;
import com.example.api.services.SponsorService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SponsorServiceImpl implements SponsorService {
    @Override
    public void save(Sponsor sponsor) throws Exception {

    }

    @Override
    public void deleteById(String id) throws Exception {

    }

    @Override
    public Sponsor findOneById(String id) {
        return null;
    }

    @Override
    public List<Sponsor> findAll() {
        return null;
    }

    @Override
    public void updateSponsor(String sponsor) {

    }
}

package com.example.api.services;

import com.example.api.models.entities.Sponsor;

import java.util.List;

public interface SponsorService {
    void save(Sponsor sponsor) throws Exception;
    void deleteById(String id) throws Exception;
    Sponsor findOneById(String id);
    List<Sponsor> findAll();
    void updateSponsor(String sponsor);
}

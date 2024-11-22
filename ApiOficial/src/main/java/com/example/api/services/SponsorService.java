package com.example.api.services;

import com.example.api.models.entities.Sponsor;
import com.example.api.models.entities.dtos.SaveSponsorDTO;

import java.util.List;

public interface SponsorService {
    void save(SaveSponsorDTO sponsor) throws Exception;
    void deleteById(String id) throws Exception;
    Sponsor findOneById(String id);

    Sponsor findBySponsor(String sponsor);
    List<Sponsor> findAll();
    void updateSponsor(String sponsor);
}

package com.example.api.services.implementations;

import com.example.api.models.entities.Sponsor;
import com.example.api.models.entities.dtos.SaveSponsorDTO;
import com.example.api.repositories.SponsorRepository;
import com.example.api.services.SponsorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SponsorServiceImpl implements SponsorService {

    @Autowired
    private SponsorRepository sponsorRepository;

    @Override
    public void save(SaveSponsorDTO sponsor) throws Exception {
        Sponsor newSponsor = new Sponsor(
                sponsor.getSponsor()
        );
        sponsorRepository.save(newSponsor);

    }

    @Override
    public void deleteById(String id) throws Exception {

    }

    @Override
    public Sponsor findOneById(String id) {
        return null;
    }

    @Override
    public Sponsor findBySponsor(String sponsor) {
        return sponsorRepository.findBySponsor(sponsor);
    }

    @Override
    public List<Sponsor> findAll() {
        return sponsorRepository.findAll();
    }

    @Override
    public void updateSponsor(String sponsor) {

    }
}

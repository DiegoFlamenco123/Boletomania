package com.example.api.repositories;

import com.example.api.models.entities.Sponsor;
import org.springframework.data.repository.ListCrudRepository;

import java.util.UUID;

public interface SponsorRepository
    extends ListCrudRepository<Sponsor, UUID> {
    Sponsor findBySponsor(String sponsor);
}

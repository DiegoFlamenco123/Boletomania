package com.example.api.repositories;

import com.example.api.models.entities.Site;
import org.springframework.data.repository.ListCrudRepository;

import java.util.UUID;

public interface SiteRepository
    extends ListCrudRepository<Site, UUID> {
    Site findByName(String name);
}

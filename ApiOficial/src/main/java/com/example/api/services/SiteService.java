package com.example.api.services;

import com.example.api.models.entities.Site;
import com.example.api.models.entities.dtos.SaveSiteDTO;

import java.util.List;

public interface SiteService {
    void save(SaveSiteDTO site) throws Exception;
    void deleteById(String id) throws Exception;
    Site findOneById(String id);

    Site findByName(String name);
    List<Site> findAll();
    void updateName(String name);
    void updateAddress(String address);
}

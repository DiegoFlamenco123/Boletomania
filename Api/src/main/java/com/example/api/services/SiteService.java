package com.example.api.services;

import com.example.api.models.entities.Site;

import java.util.List;

public interface SiteService {
    void save(Site site) throws Exception;
    void deleteById(String id) throws Exception;
    Site findOneById(String id);
    List<Site> findAll();
    void updateName(String name);
    void updateAddress(String address);
}

package com.example.api.services.implementations;

import com.example.api.models.entities.Site;
import com.example.api.services.SiteService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SiteServiceImpl implements SiteService {
    @Override
    public void save(Site site) throws Exception {

    }

    @Override
    public void deleteById(String id) throws Exception {

    }

    @Override
    public Site findOneById(String id) {
        return null;
    }

    @Override
    public List<Site> findAll() {
        return null;
    }

    @Override
    public void updateName(String name) {

    }

    @Override
    public void updateAddress(String address) {

    }
}

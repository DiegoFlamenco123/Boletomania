package com.example.api.services.implementations;

import com.example.api.models.entities.Site;
import com.example.api.models.entities.dtos.SaveSiteDTO;
import com.example.api.repositories.SiteRepository;
import com.example.api.services.SiteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SiteServiceImpl implements SiteService {

    @Autowired
    private SiteRepository siteRepository;

    @Override
    public void save(SaveSiteDTO site) throws Exception {
        Site newSite = new Site(
                site.getName(),
                site.getAddress()
        );

        siteRepository.save(newSite);
    }

    @Override
    public void deleteById(String id) throws Exception {

    }

    @Override
    public Site findOneById(String id) {
        return null;
    }

    @Override
    public Site findByName(String name) {
        return siteRepository.findByName(name);
    }

    @Override
    public List<Site> findAll() {
        return siteRepository.findAll();
    }

    @Override
    public void updateName(String name) {

    }

    @Override
    public void updateAddress(String address) {

    }
}

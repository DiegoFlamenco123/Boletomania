package com.example.api.services.implementations;

import com.example.api.models.entities.Role;
import com.example.api.services.RoleService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RoleServiceImpl implements RoleService {
    @Override
    public void save(Role role) throws Exception {

    }

    @Override
    public void deleteById(String id) throws Exception {

    }

    @Override
    public Role findOneById(String id) {
        return null;
    }

    @Override
    public List<Role> findAll() {
        return null;
    }
}

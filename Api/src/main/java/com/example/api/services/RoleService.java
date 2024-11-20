package com.example.api.services;

import com.example.api.models.entities.Role;

import java.util.List;

public interface RoleService {
    void save(Role role) throws Exception;
    void deleteById(String id) throws Exception;
    Role findOneById(String id);
    List<Role> findAll();
}

package com.example.api.services;

import com.example.api.models.entities.Role;
import com.example.api.models.entities.dtos.SaveRoleDTO;

import java.util.List;

public interface RoleService {
    void save(SaveRoleDTO role) throws Exception;
    void deleteById(String id) throws Exception;
    Role findOneById(String id);

    Role findByCode(String code);
    Role findByRole(String role);
    List<Role> findAll();
}

package com.example.api.services;

import com.example.api.models.entities.Role;
import com.example.api.models.entities.UserxRole;

import java.util.List;

public interface UserxRoleService {
    void save(UserxRole userxRole) throws Exception;
    void deleteById(String id) throws Exception;
    UserxRole findOneById(String id);
    List<UserxRole> findAll();
    List<Role> getRolesByUserId(String id);
    void updateRole(Role role, String id);
}

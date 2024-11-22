package com.example.api.services;

import com.example.api.models.entities.Permission;
import com.example.api.models.entities.User;

import java.util.List;

public interface PermissionService {
    void save(Permission permission) throws Exception;

    void deleteById(String id) throws Exception;

    List<Permission> findByUser(User user);
    Permission findOneById(String id);
    void updatePermission(String id);
}

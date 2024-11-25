package com.example.api.services.implementations;

import com.example.api.models.entities.Permission;
import com.example.api.models.entities.User;
import com.example.api.services.PermissionService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PermissionServiceImpl implements PermissionService {
    @Override
    public void save(Permission permission) throws Exception {

    }

    @Override
    public void deleteById(String id) throws Exception {

    }

    @Override
    public List<Permission> findByUser(User user) {
        return null;
    }

    @Override
    public Permission findOneById(String id) {
        return null;
    }

    @Override
    public void updatePermission(String id) {

    }
}

package com.example.api.services.implementations;

import com.example.api.models.entities.Role;
import com.example.api.models.entities.UserxRole;
import com.example.api.services.UserxRoleService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserxRoleServiceImpl implements UserxRoleService {
    @Override
    public void save(UserxRole userxRole) throws Exception {

    }

    @Override
    public void deleteById(String id) throws Exception {

    }

    @Override
    public UserxRole findOneById(String id) {
        return null;
    }

    @Override
    public List<UserxRole> findAll() {
        return null;
    }

    @Override
    public List<Role> getRolesByUserId(String id) {
        return null;
    }

    @Override
    public void updateRole(Role role, String id) {

    }
}

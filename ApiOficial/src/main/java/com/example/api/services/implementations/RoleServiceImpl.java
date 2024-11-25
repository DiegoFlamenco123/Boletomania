package com.example.api.services.implementations;

import com.example.api.models.entities.Role;
import com.example.api.models.entities.dtos.SaveRoleDTO;
import com.example.api.repositories.RoleRepository;
import com.example.api.services.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class RoleServiceImpl implements RoleService {

    @Autowired
    private RoleRepository roleRepository;

    @Override
    public void save(SaveRoleDTO role) throws Exception {
        Role saveRole = new Role(
                role.getRole()
        );

        roleRepository.save(saveRole);
    }

    @Override
    public void deleteById(String id) throws Exception {

    }

    @Override
    public Role findOneById(String id) {
        return null;
    }

    @Override
    public Role findByCode(String code) {
        UUID uuid = UUID.fromString(code);
        return roleRepository.findById(uuid).orElse(null);
    }

    @Override
    public Role findByRole(String role) {
        return roleRepository.findByRole(role);
    }

    @Override
    public List<Role> findAll() {
        return null;
    }
}

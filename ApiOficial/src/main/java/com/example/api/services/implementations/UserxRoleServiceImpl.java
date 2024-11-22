package com.example.api.services.implementations;

import com.example.api.models.entities.Role;
import com.example.api.models.entities.User;
import com.example.api.models.entities.UserxRole;
import com.example.api.models.entities.dtos.SaveUserxRoleDTO;
import com.example.api.repositories.UserxRoleRepository;
import com.example.api.services.UserxRoleService;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class UserxRoleServiceImpl implements UserxRoleService {

    @Autowired
    private UserxRoleRepository userxRoleRepository;

    @Override
    @Transactional(rollbackOn = Exception.class)
    public void save(SaveUserxRoleDTO userxRole) throws Exception {
        UserxRole newUserxRole = new UserxRole(
                userxRole.getUser(),
                userxRole.getRole()
        );

        userxRoleRepository.save(newUserxRole);

    }

    @Override
    @Transactional(rollbackOn = Exception.class)
    public void deleteById(UUID id) throws Exception {



    }

    @Override
    public UserxRole findOneById(UUID id) {
        return null;
    }

    @Override
    public List<UserxRole> findAll() {
        return userxRoleRepository.findAll();
    }

    @Override
    public List<UserxRole> findByUser(User user) {
        return userxRoleRepository.findByUser(user);
    }

    @Override
    public void updateRole(Role role, UUID id) {

    }
}

package com.example.api.repositories;

import com.example.api.models.entities.User;
import com.example.api.models.entities.UserxRole;
import org.springframework.data.repository.ListCrudRepository;

import java.util.List;
import java.util.UUID;

public interface UserxRoleRepository
        extends ListCrudRepository<UserxRole, UUID> {
    List<UserxRole> findByUser(User user);
}

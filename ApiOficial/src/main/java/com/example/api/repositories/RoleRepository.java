package com.example.api.repositories;

import com.example.api.models.entities.Role;
import org.springframework.data.repository.ListCrudRepository;

import java.util.UUID;

public interface RoleRepository
    extends ListCrudRepository<Role, UUID> {
    Role findByRole(String role);
}

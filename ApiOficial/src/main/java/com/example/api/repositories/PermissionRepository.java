package com.example.api.repositories;

import com.example.api.models.entities.Permission;
import org.springframework.data.repository.ListCrudRepository;

import java.util.UUID;

public interface PermissionRepository
    extends ListCrudRepository<Permission, UUID> {
}

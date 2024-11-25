package com.example.api.repositories;

import com.example.api.models.entities.UserxEvent;
import org.springframework.data.repository.ListCrudRepository;

import java.util.UUID;

public interface UserxEventRepository
    extends ListCrudRepository<UserxEvent, UUID> {
}

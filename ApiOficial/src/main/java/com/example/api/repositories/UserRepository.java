package com.example.api.repositories;

import com.example.api.models.entities.User;
import org.springframework.data.repository.ListCrudRepository;

import java.util.UUID;

public interface UserRepository
    extends ListCrudRepository<User, UUID> {

    void deleteByUsername(String email);

    User findOneByUsername(String email);

    User findByUsernameAndPassword(String email, String password);
}

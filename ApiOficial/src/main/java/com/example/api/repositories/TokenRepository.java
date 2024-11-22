package com.example.api.repositories;

import com.example.api.models.entities.Token;
import com.example.api.models.entities.User;
import org.springframework.data.repository.ListCrudRepository;

import java.util.List;
import java.util.UUID;

public interface TokenRepository
    extends ListCrudRepository<Token, UUID> {
    List<Token> findByUserAndActive(User user, Boolean active);
}

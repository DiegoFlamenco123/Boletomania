package com.example.api.repositories;

import com.example.api.models.entities.Transfer;
import org.springframework.data.repository.ListCrudRepository;

import java.util.UUID;

public interface TransferRepository
    extends ListCrudRepository<Transfer, UUID> {
}

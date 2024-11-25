package com.example.api.repositories;

import com.example.api.models.entities.QR;
import org.springframework.data.repository.ListCrudRepository;

import java.util.UUID;

public interface QrRepository
    extends ListCrudRepository<QR, UUID> {
}

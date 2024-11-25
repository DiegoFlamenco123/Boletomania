package com.example.api.repositories;

import com.example.api.models.entities.Ticket;
import com.example.api.models.entities.User;
import org.springframework.data.repository.ListCrudRepository;

import java.util.List;
import java.util.UUID;

public interface TicketRepository
    extends ListCrudRepository<Ticket, UUID> {

    List<Ticket> findAllByUser(User user);
}

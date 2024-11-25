package com.example.api.repositories;

import com.example.api.models.entities.Ticket;
import com.example.api.models.entities.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.ListCrudRepository;

import java.util.List;
import java.util.Map;
import java.util.UUID;

public interface TicketRepository
    extends ListCrudRepository<Ticket, UUID> {

    List<Ticket> findAllByUser(User user);

    @Query("SELECT new map(e.title as eventName, COUNT(t.id) as ticketsSold) " +
            "FROM Ticket t JOIN t.tier tr JOIN tr.event e " +
            "GROUP BY e.title")
    List<Map<String, Object>> getTicketStatistics();
}

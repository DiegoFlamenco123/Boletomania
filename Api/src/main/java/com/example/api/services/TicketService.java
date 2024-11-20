package com.example.api.services;

import com.example.api.models.entities.QR;
import com.example.api.models.entities.Ticket;

import java.security.Timestamp;
import java.util.List;

public interface TicketService {
    void save(Ticket ticket) throws Exception;
    void deleteByTicketNumber(int value) throws Exception;
    void deleteById(String id) throws Exception;
    Ticket findOneByTicketNumber(int value);
    List<Ticket> findAll();
    void updateTicketNumber(int ticket_number, String id);
    void updatePurchaseDate(Timestamp purchaseDate, String id);
    void updateIsValid(Boolean isValid, String id);
    void updatePriority(String priority, String id);
    void updateQR(QR qr, String id);
}

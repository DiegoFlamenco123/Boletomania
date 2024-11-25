package com.example.api.services;

import com.example.api.models.entities.QR;
import com.example.api.models.entities.Ticket;
import com.example.api.models.entities.User;
import com.example.api.models.entities.dtos.GetTicketDTO;
import com.example.api.models.entities.dtos.SaveTicketDTO;

import java.security.Timestamp;
import java.util.List;
import java.util.Map;

public interface TicketService {
    void save(SaveTicketDTO ticket) throws Exception;
    void deleteByTicketNumber(int value) throws Exception;
    void deleteById(String id) throws Exception;
    Ticket findOneByTicketNumber(int value);
    List<GetTicketDTO> findAll(User user);
    void updateTicketNumber(int ticket_number, String id);
    void updatePurchaseDate(Timestamp purchaseDate, String id);
    void updateIsValid(Boolean isValid, String id);
    void updatePriority(String priority, String id);
    void updateQR(QR qr, String id);
    Ticket findOneByCode(String id);
    Boolean updateTicketValid(String id);
    List<Map<String, Object>> getTicketStatistics(); // Método para estadísticas
}

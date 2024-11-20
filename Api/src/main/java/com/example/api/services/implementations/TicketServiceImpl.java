package com.example.api.services.implementations;

import com.example.api.models.entities.QR;
import com.example.api.models.entities.Ticket;
import com.example.api.services.TicketService;
import org.springframework.stereotype.Service;

import java.security.Timestamp;
import java.util.List;

@Service
public class TicketServiceImpl implements TicketService {
    @Override
    public void save(Ticket ticket) throws Exception {

    }

    @Override
    public void deleteByTicketNumber(int value) throws Exception {

    }

    @Override
    public void deleteById(String id) throws Exception {

    }

    @Override
    public Ticket findOneByTicketNumber(int value) {
        return null;
    }

    @Override
    public List<Ticket> findAll() {
        return null;
    }

    @Override
    public void updateTicketNumber(int ticket_number, String id) {

    }

    @Override
    public void updatePurchaseDate(Timestamp purchaseDate, String id) {

    }

    @Override
    public void updateIsValid(Boolean isValid, String id) {

    }

    @Override
    public void updatePriority(String priority, String id) {

    }

    @Override
    public void updateQR(QR qr, String id) {

    }
}

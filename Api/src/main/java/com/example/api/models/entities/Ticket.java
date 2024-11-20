package com.example.api.models.entities;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.sql.Timestamp;

@Data
@AllArgsConstructor
public class Ticket {
    private int ticket_number;
    private User user;
    private Timestamp purchaseDate;
    private Boolean isValid;
    private String priority;
    private QR qr;
}

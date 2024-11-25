package com.example.api.models.entities;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;
import java.util.UUID;

@Data
@NoArgsConstructor
@Entity
@Table(name = "qr")
public class QR {

    @Id
    @Column(name = "qr_id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID QR_id;

    @Column(name = "creation_date")
    private Timestamp creationDate;

    @Column(name = "expiration_date")
    private Timestamp expirationDate;

    @Column(name = "exchange_date")
    private Timestamp exchangeDate;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "ticket_code")
    private Ticket ticket;

    public QR(Timestamp creationDate, Timestamp expirationDate, Timestamp exchangeDate, Ticket ticket) {
        super();
        this.creationDate = creationDate;
        this.expirationDate = expirationDate;
        this.exchangeDate = exchangeDate;
        this.ticket = ticket;
    }
}

package com.example.api.models.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;
import java.util.UUID;

@Data
@NoArgsConstructor
@Entity
@Table(name = "ticket")
public class Ticket {
    @Id
    @Column(name = "code")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID ticket_number;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "user_code")
    private User user;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "tier_code")
    private Tier tier;

    @Column(name = "purchase_date")
        private Timestamp purchaseDate;

    @Column(name = "valid", insertable = false)
    private Boolean isValid;

    public Ticket(User user, Tier tier, Timestamp purchaseDate) {
        super();
        this.user = user;
        this.tier = tier;
        this.purchaseDate = purchaseDate;
    }
}

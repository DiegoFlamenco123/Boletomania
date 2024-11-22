package com.example.api.models.entities;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Data
@NoArgsConstructor
@Entity
@Table(name = "sponsor")
public class Sponsor {
    @Id
    @Column(name = "code")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID code;

    @Column(name = "sponsor")
    private String sponsor;

    public Sponsor(String sponsor) {
        super();
        this.sponsor = sponsor;
    }
}

package com.example.api.models.entities;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;
import java.util.UUID;

@Data
@NoArgsConstructor
@Entity
@Table(name = "event")
public class Event {
    @Id
    @Column(name = "code")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID code;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "organizer_code")
    private Organizer organizer;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "sponsor_code")
    private Sponsor sponsor;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "site_code")
    private Site site;

    @Column(name = "title")
    private String title;

    @Column(name = "date")
    private Timestamp date;

    @Column(name = "duration")
    private String duration;

    public Event(Organizer organizer, Sponsor sponsor, Site site, String title, Timestamp date, String duration) {
        super();
        this.organizer = organizer;
        this.sponsor = sponsor;
        this.site = site;
        this.title = title;
        this.date = date;
        this.duration = duration;
    }
}

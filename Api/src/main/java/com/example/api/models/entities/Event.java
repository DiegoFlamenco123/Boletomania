package com.example.api.models.entities;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;

@Data
@NoArgsConstructor
public class Event {
    private int id;
    private Organizer organizer;
    private Sponsor sponsor;
    private Site site;
    private String title;
    private Timestamp date;
    private String hour;
    private String duration;
}

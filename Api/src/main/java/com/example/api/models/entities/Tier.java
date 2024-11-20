package com.example.api.models.entities;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class Tier {
    private int id;
    private Event event;
    private String name;
    private int capacity;
    private double price;
}

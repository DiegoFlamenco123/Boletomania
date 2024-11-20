package com.example.api.models.entities;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class Category {
    private int id;
    private Event event;
    private String category;
}

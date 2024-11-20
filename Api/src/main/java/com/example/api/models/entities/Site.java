package com.example.api.models.entities;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class Site {
    private int id;
    private String name;
    private String address;
}

package com.example.api.models.entities;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class User {
    private String email;
    private String name;
    private Boolean isActive;
    private String password;
}

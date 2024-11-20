package com.example.api.models.entities;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class Permission {
    private int id;
    private User user;
    private String permission;
}

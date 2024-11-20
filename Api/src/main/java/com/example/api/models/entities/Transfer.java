package com.example.api.models.entities;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class Transfer {
    private int id;
    private Ticket ticket;
    private User user;
}

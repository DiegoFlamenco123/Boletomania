package com.example.api.models.entities;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class UserxEvent {
    private int id;
    private User user;
    private Event event;
}

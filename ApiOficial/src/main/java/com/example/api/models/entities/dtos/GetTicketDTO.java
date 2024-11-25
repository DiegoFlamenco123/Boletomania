package com.example.api.models.entities.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class GetTicketDTO {
    String event;
    String tier;
    String eventDate;
    String ticket_code;
}

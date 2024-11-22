package com.example.api.models.entities.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.UUID;

@Data
@AllArgsConstructor
public class TicketDTO {
    UUID tier;
    String purchaseDate;
}

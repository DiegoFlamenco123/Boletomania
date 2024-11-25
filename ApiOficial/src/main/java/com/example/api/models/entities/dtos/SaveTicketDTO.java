package com.example.api.models.entities.dtos;

import com.example.api.models.entities.Tier;
import com.example.api.models.entities.User;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.sql.Timestamp;

@Data
@AllArgsConstructor
public class SaveTicketDTO {
    User user;
    Tier tier;
    Timestamp purchaseDate;
}

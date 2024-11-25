package com.example.api.models.entities.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;

@Data
@AllArgsConstructor
public class GetEventDTO {
    String title;
    String siteName;
    List<GetTierForEventDTO> tiers;
    String date;
}

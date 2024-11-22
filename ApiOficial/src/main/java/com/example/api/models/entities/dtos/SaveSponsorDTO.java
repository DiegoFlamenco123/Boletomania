package com.example.api.models.entities.dtos;

import jakarta.validation.constraints.NotEmpty;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class SaveSponsorDTO {
    @NotEmpty(message = "Sponsor cannot be empty")
    String sponsor;
}

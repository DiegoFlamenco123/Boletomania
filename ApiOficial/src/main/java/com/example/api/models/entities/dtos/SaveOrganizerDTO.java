package com.example.api.models.entities.dtos;

import jakarta.validation.constraints.NotEmpty;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class SaveOrganizerDTO {
    @NotEmpty(message = "Organizer cannot be empty")
    String organizer;
}

package com.example.api.models.entities.dtos;

import jakarta.validation.constraints.NotEmpty;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class SaveSiteDTO {
    @NotEmpty(message = "Name cannot be empty")
    String name;

    @NotEmpty(message = "Address cannot be empty")
    String address;
}

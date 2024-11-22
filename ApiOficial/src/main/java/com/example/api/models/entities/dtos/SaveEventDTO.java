package com.example.api.models.entities.dtos;

import com.example.api.models.entities.Organizer;
import com.example.api.models.entities.Site;
import com.example.api.models.entities.Sponsor;
import jakarta.validation.constraints.NotEmpty;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.sql.Timestamp;
import java.util.UUID;

@Data
@AllArgsConstructor
public class SaveEventDTO {
    UUID organizer;

    UUID sponsor;

    UUID site;

    String title;

    Timestamp date;

    String duration;
}

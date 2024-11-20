package com.example.api.models.entities;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;

@Data
@NoArgsConstructor
public class QR {
    private String QR_id;
    private Timestamp creationDate;
    private Timestamp expirationDate;
    private Timestamp exchangeDate;
}

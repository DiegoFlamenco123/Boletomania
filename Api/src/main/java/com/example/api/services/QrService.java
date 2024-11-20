package com.example.api.services;

import com.example.api.models.entities.QR;

public interface QrService {
    void save(QR qr) throws Exception;
    void deleteById(String id) throws Exception;
    QR findOneById(String id);
    void updateExpirationDate(String id);
    void updateExchangeDate(String id);
}

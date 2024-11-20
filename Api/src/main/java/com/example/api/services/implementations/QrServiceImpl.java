package com.example.api.services.implementations;

import com.example.api.models.entities.QR;
import com.example.api.services.QrService;
import org.springframework.stereotype.Service;

@Service
public class QrServiceImpl implements QrService {
    @Override
    public void save(QR qr) throws Exception {

    }

    @Override
    public void deleteById(String id) throws Exception {

    }

    @Override
    public QR findOneById(String id) {
        return null;
    }

    @Override
    public void updateExpirationDate(String id) {

    }

    @Override
    public void updateExchangeDate(String id) {

    }
}

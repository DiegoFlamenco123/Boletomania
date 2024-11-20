package com.example.api.services;

import com.example.api.models.entities.Transfer;

import java.util.List;

public interface TransferService {
    void save(Transfer transfer) throws Exception;
    void deleteById(String id) throws Exception;
    Transfer findOneById(String id);
    List<Transfer> findAll();
    void updateTransfer(Transfer transfer);
    void deleteTransfer(Transfer transfer);
}

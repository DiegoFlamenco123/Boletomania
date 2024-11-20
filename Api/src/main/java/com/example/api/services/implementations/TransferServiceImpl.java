package com.example.api.services.implementations;

import com.example.api.models.entities.Transfer;
import com.example.api.services.TransferService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TransferServiceImpl implements TransferService {
    @Override
    public void save(Transfer transfer) throws Exception {

    }

    @Override
    public void deleteById(String id) throws Exception {

    }

    @Override
    public Transfer findOneById(String id) {
        return null;
    }

    @Override
    public List<Transfer> findAll() {
        return null;
    }

    @Override
    public void updateTransfer(Transfer transfer) {

    }

    @Override
    public void deleteTransfer(Transfer transfer) {

    }
}

package com.example.api.services.implementations;

import com.example.api.models.entities.Category;
import com.example.api.models.entities.Event;
import com.example.api.services.CategoryService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryServiceImpl implements CategoryService {
    @Override
    public void save(Category category) throws Exception {

    }

    @Override
    public void deleteById(String id) throws Exception {

    }

    @Override
    public Category findOneById(String id) {
        return null;
    }

    @Override
    public List<Category> findAll() {
        return null;
    }

    @Override
    public List<Category> findAllByEvent(Event event) {
        return null;
    }

    @Override
    public void updateCategory(String category) {

    }
}

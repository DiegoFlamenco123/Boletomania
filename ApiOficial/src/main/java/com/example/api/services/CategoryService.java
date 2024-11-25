package com.example.api.services;

import com.example.api.models.entities.Category;
import com.example.api.models.entities.Event;

import java.util.List;

public interface CategoryService {
    void save(Category category) throws Exception;
    void deleteById(String id) throws Exception;
    Category findOneById(String id);
    List<Category> findAll();
    List<Category> findAllByEvent(Event event);
    void updateCategory(String category);
}

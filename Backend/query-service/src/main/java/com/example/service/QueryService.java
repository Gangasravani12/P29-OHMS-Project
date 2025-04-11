package com.example.service;

import java.util.List;

import com.example.model.Quires;

public interface QueryService {
    Quires submitQuery(Quires query);
    List<Quires> getAllQueries();
    Quires getQueryById(int id);
    Quires updateSolution(int id, String solution);
}

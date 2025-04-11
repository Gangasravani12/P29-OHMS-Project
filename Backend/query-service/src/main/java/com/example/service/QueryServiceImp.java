package com.example.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.model.Quires;
import com.example.repo.QueryRepo;
@Service
public class QueryServiceImp implements QueryService {
	@Autowired QueryRepo repo;
	@Override
	public Quires submitQuery(Quires query) {
		// TODO Auto-generated method stub
		return repo.save(query);
	}

	@Override
	public List<Quires> getAllQueries() {
		// TODO Auto-generated method stub
		return (List<Quires>) repo.findAll();
	}

	@Override
	public Quires getQueryById(int id) {
		// TODO Auto-generated method stub
		return repo.findById(id).orElseThrow(() -> new RuntimeException("Query not found"));
	}


	@Override
	public Quires updateSolution(int id, String solution) {
		// TODO Auto-generated method stub
		Quires query = repo.findById(id)
                .orElseThrow(() -> new RuntimeException("Query not found"));
        query.setSolution(solution);
        return repo.save(query);
	}

}

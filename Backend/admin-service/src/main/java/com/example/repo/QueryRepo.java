package com.example.repo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.model.Quires;
@Repository
public interface QueryRepo extends CrudRepository<Quires, Integer> {

}

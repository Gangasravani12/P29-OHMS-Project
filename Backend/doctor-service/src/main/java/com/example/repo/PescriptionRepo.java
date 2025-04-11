package com.example.repo;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.model.Pescription;
@Repository
public interface PescriptionRepo extends CrudRepository<Pescription, Integer> {
	List<Pescription> findByemail(String email);
}

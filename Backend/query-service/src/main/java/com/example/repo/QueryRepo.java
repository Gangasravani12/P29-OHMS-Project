package com.example.repo;

import java.util.List;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.model.AdminResponse;
import com.example.model.Quires;

import jakarta.transaction.Transactional;
@Repository
public interface QueryRepo extends CrudRepository<Quires, Integer> {
	@Transactional
    @Modifying
    @Query("UPDATE Quires q SET q.solution = ?2 WHERE q.id = ?1")
    void updateSolution(int id, String solution);
}

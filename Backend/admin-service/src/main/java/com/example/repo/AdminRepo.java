package com.example.repo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.model.Admin;
@Repository
public interface AdminRepo extends CrudRepository<Admin, Integer> {
	Admin findByEmail(String email);
}

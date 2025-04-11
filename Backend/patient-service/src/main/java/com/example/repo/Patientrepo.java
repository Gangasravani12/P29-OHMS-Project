package com.example.repo;



import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.model.Patient;
@Repository
public interface Patientrepo extends CrudRepository<Patient, Integer> {
	Patient findByemail(String email);
}

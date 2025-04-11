package com.example.repo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.model.Doctor;
import com.example.model.Pescription;
@Repository
public interface DoctorRepo extends CrudRepository<Doctor, Integer> {


	Pescription save(Pescription pescription);

	Doctor findBydoctorEmail(String doctorEmail);
}

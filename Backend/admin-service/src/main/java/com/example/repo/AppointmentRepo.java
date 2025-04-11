package com.example.repo;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.model.Appointment;

import jakarta.transaction.Transactional;
@Repository
public interface AppointmentRepo extends CrudRepository<Appointment, Integer> {
	List<Appointment> findByemail(String email);
	Appointment findByDoctorName(String doctorName);
    @Transactional
	void deleteByemail(String email);
	List<Appointment> findByDoctorEmail(String doctorEmail);
}

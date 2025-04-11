package com.example.service;

import java.util.List;

import com.example.model.Admin;
import com.example.model.Appointment;
import com.example.model.Doctor;
import com.example.model.Patient;
import com.example.model.Quires;

public interface AdminService {
	Admin addAdmin(Admin admin);
	
	// Doctor management
    Doctor addDoctor(Doctor doctor);
    List<Doctor> getAllDoctors();

    // Appointments and patient management
    List<Appointment> getAllAppointments();
    List<Patient> getAllPatients();

    // Query management
    List<Quires> getAllQueries();

	Quires updateSolution(int id, String solution);
}

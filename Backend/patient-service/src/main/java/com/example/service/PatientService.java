package com.example.service;

import java.util.List;

import com.example.model.Patient;
import com.example.model.Pescription;

public interface PatientService {
	public Patient savepatients(Patient patient);
	Patient findByemail(String email);
	List<Patient> getAllpatients();
	public Patient updatePatients(Patient patient,String email);
}

package com.example.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.model.Patient;
import com.example.repo.Patientrepo;
@Service
public class PatientServiceImp implements PatientService {
	@Autowired private Patientrepo repo;
	@Override
	public Patient savepatients(Patient patient) {
		// TODO Auto-generated method stub
		return repo.save(patient);
	}

	@Override
    public Patient findByemail(String email) {
        return repo.findByemail(email);
    }

	@Override
	public List<Patient> getAllpatients() {
		// TODO Auto-generated method stub
		return (List<Patient>) repo.findAll();
	}

	@Override
	public Patient updatePatients(Patient patient, String email) {
		// TODO Auto-generated method stub
		Patient old=repo.findByemail(email);
		old.setEmail(patient.getEmail());
		old.setPassword(patient.getPassword());
		old.setAddress(patient.getAddress());
		return repo.save(old);
	}
	
	
}

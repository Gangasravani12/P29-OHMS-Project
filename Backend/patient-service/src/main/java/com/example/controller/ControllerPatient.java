package com.example.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.fiegn.DoctorFeignCLient;
import com.example.model.Patient;
import com.example.model.Pescription;
import com.example.service.PatientService;

@RestController
@RequestMapping("/patient")
public class ControllerPatient {
	@Autowired private PatientService service;
	@Autowired
    private DoctorFeignCLient doctorFeignClient;
	@PostMapping("/save")
	public String savestudentspage(@RequestBody Patient patient) {
		String message=null;
		Patient savedata=service.savepatients(patient);
		if(savedata!=null) {
			message="patient added successfully........";
		}
		else {
			message="failed to add...";
		}
		return message;
	}
	@GetMapping("/getone/{email}")
	public Patient getPatientpage(@PathVariable String email) {
		
		return service.findByemail(email);
	}
	@GetMapping("/getall")
	public List<Patient> getAllstudentspage() {
		List<Patient> listofpatients=service.getAllpatients();
		return listofpatients;
	}
	@PutMapping("/update/{email}")
	public Patient updatestudentspage(@RequestBody Patient patient,@PathVariable String email) {
		
		return service.updatePatients(patient, email);
	}
	// Patient views prescriptions
    @GetMapping("/prescriptions/{email}")
    public List<Pescription> getPrescriptions(@PathVariable String email) {
        return doctorFeignClient.getPrescriptionsByPatientEmail(email);
    }
}

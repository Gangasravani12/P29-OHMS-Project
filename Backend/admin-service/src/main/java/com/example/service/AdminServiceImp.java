package com.example.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.feign.QueryFeignClient;
import com.example.model.Admin;
import com.example.model.Appointment;
import com.example.model.Doctor;
import com.example.model.Patient;
import com.example.model.Quires;
import com.example.repo.AdminRepo;
import com.example.repo.AppointmentRepo;
import com.example.repo.DoctorRepo;
import com.example.repo.Patientrepo; // Fixed repository name
import com.example.repo.QueryRepo;

@Service
public class AdminServiceImp implements AdminService {
	@Autowired
    private QueryFeignClient queryFeignClient;
    @Autowired private AdminRepo repo;
    @Autowired private AppointmentRepo appointmentRepo;
    @Autowired private DoctorRepo doctorRepo;
    @Autowired private Patientrepo patientRepo;  // Fixed repository name
    @Autowired private QueryRepo queryRepo;

    @Override
    public Admin addAdmin(Admin admin) {
        return repo.save(admin);
    }

    @Override
    public Doctor addDoctor(Doctor doctor) {
        return doctorRepo.save(doctor);
    }

    @Override
    public List<Doctor> getAllDoctors() {
        return (List<Doctor>) doctorRepo.findAll();
    }

    @Override
    public List<Appointment> getAllAppointments() {
        return (List<Appointment>) appointmentRepo.findAll();
    }

    @Override
    public List<Patient> getAllPatients() {
        return (List<Patient>) patientRepo.findAll();
    }

    @Override
    public List<Quires> getAllQueries() {  // Fixed entity name
        return (List<Quires>) queryRepo.findAll();
    }

    @Override
    public Quires updateSolution(int id, String solution) {
        Map<String, String> request = new HashMap<>();
        request.put("solution", solution);
        return queryFeignClient.updateQuerySolution(id, request);
    }
}

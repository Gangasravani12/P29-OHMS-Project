package com.example.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.feign.QueryFeignClient;
import com.example.model.Admin;
import com.example.model.Appointment;
import com.example.model.Doctor;
import com.example.model.Patient;
import com.example.model.Quires;
import com.example.service.AdminService;

@RestController
@RequestMapping("/admin")
public class AdminController {

    @Autowired
    private AdminService service;

    @Autowired
    private QueryFeignClient queryFeignClient;

    @PostMapping("/add")
    public Admin addadmin(@RequestBody Admin admin) {
        return service.addAdmin(admin);
    }

    @PostMapping("/doctor/add")
    public Doctor addDoctor(@RequestBody Doctor doctor) {
        return service.addDoctor(doctor);
    }

    @GetMapping("/doctors")
    public List<Doctor> getAllDoctors() {
        return service.getAllDoctors();
    }

    @GetMapping("/appointments")
    public List<Appointment> getAllAppointments() {
        return service.getAllAppointments();
    }

    @GetMapping("/patients")
    public List<Patient> getAllPatients() {
        return service.getAllPatients();
    }

    @GetMapping("/queries")
    public List<Quires> getAllQueries() {
        return service.getAllQueries();
    }

    @PutMapping("/updateSolution/{id}")
    public ResponseEntity<Quires> updateQuerySolution(@PathVariable int id, @RequestBody Map<String, String> request) {
        Quires updatedQuery = queryFeignClient.updateQuerySolution(id, request);
        return ResponseEntity.ok(updatedQuery);
    }
}

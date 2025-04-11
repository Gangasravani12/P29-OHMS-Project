package com.example.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.feign.AppointmentFeignClient;
import com.example.model.Appointment;
import com.example.model.Doctor;
import com.example.model.Pescription;
import com.example.service.DoctorService;
import com.example.service.PescriptionService;

@RestController
@RequestMapping("/doctor")
public class DoctorController {
    @Autowired 
    private DoctorService service;

    @Autowired
    private AppointmentFeignClient appointmentFeignClient;

    @Autowired 
    private PescriptionService prescriptionService;

    // Doctor views appointments using doctorEmail
    @GetMapping("/appointments/{doctorEmail}")
    public List<Appointment> getAppointments(@PathVariable String doctorEmail) {
        return appointmentFeignClient.getAppointmentsByDoctorEmail(doctorEmail);
    }

    // Doctor updates appointment status
    @PutMapping("/appointments/update-status/{id}")
    public Appointment updateStatus(@PathVariable int id, @RequestParam String status) {
        return appointmentFeignClient.updateAppointmentStatus(id, status);
    }

    // Admin adds a new doctor
    @PostMapping("/add")
    public Doctor addDoctor(@RequestBody Doctor doctor) {
        return service.addDoctor(doctor);
    }

    // Doctor views their profile using doctorEmail
    @GetMapping("/profile/{doctorEmail}")
    public Doctor getDoctorByEmail(@PathVariable String doctorEmail) {
        return service.getDoctorByEmail(doctorEmail);
    }

    // Doctor updates their own details
    @PutMapping("/update/{doctorEmail}")
    public Doctor updateDoctorProfile(@PathVariable String doctorEmail, @RequestBody Doctor doctor) {
        return service.updateDoctorProfile(doctorEmail, doctor);
    }

    // Fetch prescriptions by patient email
    @GetMapping("/prescriptions/{email}")
    public ResponseEntity<List<Pescription>> getPrescriptionsByPatientEmail(@PathVariable String email) {
        System.out.println("Fetching prescriptions for email: " + email);
        List<Pescription> prescriptions = prescriptionService.findByemail(email);
        
        if (prescriptions == null || prescriptions.isEmpty()) {
            System.out.println("No prescriptions found for email: " + email);
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(prescriptions);
    }

    // Doctor adds a prescription
    @PostMapping("/prescriptions")
    public Pescription addPrescription(@RequestBody Pescription pescription) {
        return prescriptionService.saveprescriptions(pescription);
    }
}

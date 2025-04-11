package com.example.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.model.Appointment;
import com.example.service.AppointmentService;

@RestController
@RequestMapping("/appointment")
public class AppointmentController {

    @Autowired 
    private AppointmentService service;

    @PostMapping("/save")
    public String saveAppointment(@RequestBody Appointment appoint) {
        Appointment savedData = service.saveappointments(appoint);
        return (savedData != null) ? "Appointment added successfully!" : "Failed to add appointment.";
    }

    @GetMapping("/get/{email}")
    public List<Appointment> getAppointmentsByEmail(@PathVariable String email) {
        return service.findByemail(email);
    }

    @GetMapping("/getall")
    public List<Appointment> getAllAppointments() {
        return service.getallappointments();
    }

    @GetMapping("/doctor/{doctorEmail}")
    public List<Appointment> getAppointmentsByDoctorEmail(@PathVariable String doctorEmail) {
        return service.getAppointmentsByDoctorEmail(doctorEmail);
    }

    @PutMapping("/update/{email}")
    public Appointment updateAppointment(@RequestBody Appointment appoint, @PathVariable String email) {
        return service.updateappointments(appoint, email);
    }

    @DeleteMapping("/delete/{email}")
    public void deleteAppointment(@PathVariable String email) {
        service.deleteByemail(email);
    }

    @PutMapping("/update-status/{id}")
    public Appointment updateStatus(@PathVariable int id, @RequestParam String status) {
        return service.updateAppointmentStatus(id, status);
    }
}

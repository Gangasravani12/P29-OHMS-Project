package com.example.feign;

import java.util.List;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.*;

import com.example.model.Appointment;

@FeignClient(name = "patient-service")
public interface AppointmentFeignClient {
	@GetMapping("/appointment/get/{email}")  // Correcting the path
    List<Appointment> getAppointmentsByDoctorEmail(@PathVariable("email") String doctorEmail);

    @PutMapping("/appointments/update-status/{id}")
    Appointment updateAppointmentStatus(@PathVariable int id, @RequestParam String status);
}

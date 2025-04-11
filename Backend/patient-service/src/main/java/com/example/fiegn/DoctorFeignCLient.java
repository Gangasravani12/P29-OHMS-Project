package com.example.fiegn;

import java.util.List;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.example.model.Pescription;

@FeignClient(name = "doctor-service")
public interface DoctorFeignCLient {
	@GetMapping("/doctor/prescriptions/{email}")
    List<Pescription> getPrescriptionsByPatientEmail(@RequestParam String email);
}

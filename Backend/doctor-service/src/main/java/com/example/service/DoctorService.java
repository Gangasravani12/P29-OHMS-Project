package com.example.service;

import com.example.model.Doctor;

public interface DoctorService {
    Doctor addDoctor(Doctor doctor); // Admin adds doctor
    Doctor getDoctorByEmail(String doctorEmail); // Doctor views their profile
    Doctor updateDoctorProfile(String doctorEmail, Doctor doctor); // Doctor updates their details
}

package com.example.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.model.Doctor;
import com.example.repo.DoctorRepo;

@Service
public class DoctorServiceImp implements DoctorService {

    @Autowired
    private DoctorRepo doctorRepo;

    // Admin adds a new doctor to the system
    @Override
    public Doctor addDoctor(Doctor doctor) {
        return doctorRepo.save(doctor);
    }

    // Doctor views their profile using doctorEmail
    @Override
    public Doctor getDoctorByEmail(String doctorEmail) {
        return doctorRepo.findBydoctorEmail(doctorEmail);
    }

    // Doctor updates their profile
    @Override
    public Doctor updateDoctorProfile(String doctorEmail, Doctor doctor) {
        Optional<Doctor> existingDoctor = Optional.ofNullable(doctorRepo.findBydoctorEmail(doctorEmail));

        if (existingDoctor.isPresent()) {
            Doctor updatedDoctor = existingDoctor.get();
            updatedDoctor.setDoctorName(doctor.getDoctorName());
            updatedDoctor.setSpecialization(doctor.getSpecialization());
            updatedDoctor.setFee(doctor.getFee());
            return doctorRepo.save(updatedDoctor);
        } else {
            throw new RuntimeException("Doctor not found with email: " + doctorEmail);
        }
    }
}

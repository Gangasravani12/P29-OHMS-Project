package com.example.service;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.model.Appointment;
import com.example.repo.AppointmentRepo;
import jakarta.transaction.Transactional;

@Service
public class AppointmentServiceImp implements AppointmentService {

    @Autowired
    private AppointmentRepo repo;

    @Override
    public Appointment saveappointments(Appointment appoint) {
        appoint.setStatus("Not Checked");  // Default status
        return repo.save(appoint);
    }

    @Override
    public List<Appointment> findByemail(String email) {
        return repo.findByemail(email);
    }

    @Override
    public List<Appointment> getAppointmentsByDoctorEmail(String doctorEmail) {
        return repo.findByDoctorEmail(doctorEmail);  // Ensure repo method exists
    }

    @Override
    public Appointment findByDoctorName(String doctorName) {
        return repo.findByDoctorName(doctorName);
    }

    @Override
    public List<Appointment> getallappointments() {
        return (List<Appointment>) repo.findAll();
    }

    @Override
    public Appointment updateappointments(Appointment appoint, String email) {
        Optional<Appointment> existingAppointment = repo.findByemail(email).stream().findFirst();

        if (existingAppointment.isPresent()) {
            Appointment old = existingAppointment.get();
            old.setDate(appoint.getDate());
            old.setTime(appoint.getTime());
            old.setSpecialization(appoint.getSpecialization());
            old.setDoctorName(appoint.getDoctorName());
            return repo.save(old);
        } else {
            throw new RuntimeException("No appointment found for email: " + email);
        }
    }

    @Override
    public Appointment updateAppointmentStatus(int id, String status) {
        Optional<Appointment> appointment = repo.findById(id);
        if (appointment.isPresent()) {
            Appointment updatedAppointment = appointment.get();
            updatedAppointment.setStatus(status);
            return repo.save(updatedAppointment);
        }
        throw new RuntimeException("Appointment not found for ID: " + id);
    }

    @Transactional
    @Override
    public void deleteByemail(String email) {
        repo.deleteByemail(email);
    }
}

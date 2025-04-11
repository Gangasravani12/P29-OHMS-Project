package com.example.service;

import java.util.List;
import com.example.model.Appointment;

public interface AppointmentService {
    Appointment saveappointments(Appointment appoint);
    List<Appointment> findByemail(String email);
    List<Appointment> getAppointmentsByDoctorEmail(String doctorEmail);
    Appointment findByDoctorName(String doctorName);
    List<Appointment> getallappointments();
    Appointment updateappointments(Appointment appoint, String email);
    Appointment updateAppointmentStatus(int id, String status);
    void deleteByemail(String email);
}

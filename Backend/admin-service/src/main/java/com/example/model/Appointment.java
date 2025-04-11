package com.example.model;

import jakarta.persistence.*;

@Entity
public class Appointment {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private int id;
    
    @Column(nullable = false)
    private String name;
    
    @Column(nullable = false, unique = true)
    private String email;
    
    @Column(nullable = false)
    private String doctorName;
    
    @Column(nullable = false)
    private String specialization;
    
    @Column(nullable = false)
    private int fee;
    
    @Column(nullable = false)
    private String date;
    
    @Column(nullable = false)
    private String time;
    
    @Column(nullable = false, unique = true)
    private String doctorEmail;  // Renamed from 'Doctoremail' to 'doctorEmail' for consistency
    
    @Column(length = 40)
    private String status;

    public Appointment() {}

    public Appointment(int id, String name, String email, String doctorName, String specialization, int fee, String date, String time, String doctorEmail, String status) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.doctorName = doctorName;
        this.specialization = specialization;
        this.fee = fee;
        this.date = date;
        this.time = time;
        this.doctorEmail = doctorEmail;
        this.status = status;
    }

    @PrePersist
    public void setDefaultStatus() {
        if (this.status == null) {
            this.status = "ACTIVE";
        }
    }

    public int getId() { return id; }
    public void setId(int id) { this.id = id; }
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
    public String getDoctorName() { return doctorName; }
    public void setDoctorName(String doctorName) { this.doctorName = doctorName; }
    public String getSpecialization() { return specialization; }
    public void setSpecialization(String specialization) { this.specialization = specialization; }
    public int getFee() { return fee; }
    public void setFee(int fee) { this.fee = fee; }
    public String getDate() { return date; }
    public void setDate(String date) { this.date = date; }
    public String getTime() { return time; }
    public void setTime(String time) { this.time = time; }
    public String getDoctorEmail() { return doctorEmail; }
    public void setDoctorEmail(String doctorEmail) { this.doctorEmail = doctorEmail; }
    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }

    @Override
    public String toString() {
        return "Appointment [id=" + id + ", name=" + name + ", email=" + email + ", doctorName=" + doctorName + 
               ", specialization=" + specialization + ", fee=" + fee + ", date=" + date + ", time=" + time + 
               ", doctorEmail=" + doctorEmail + ", status=" + status + "]";
    }
}

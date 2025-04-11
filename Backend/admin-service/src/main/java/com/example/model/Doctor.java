package com.example.model;

import jakarta.persistence.*;

@Entity

public class Doctor {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private int id;

    @Column(nullable = false)
    private String doctorName;

    @Column(name = "doctor_email", unique = true, nullable = false)
    private String doctorEmail;

    @Column(nullable = false)
    private int fee;

    @Column(nullable = false)
    private String address;

    @Column(nullable = false)
    private String specialization; // Fixed spelling error

    @Column(nullable = false)
    private String mobileNumber; // Changed to camel case

    // Default Constructor
    public Doctor() {}

    // Parameterized Constructor
    public Doctor(int id, String doctorName, String doctorEmail, int fee, String address, String specialization, String mobileNumber) {
        this.id = id;
        this.doctorName = doctorName;
        this.doctorEmail = doctorEmail; // Fixed field name
        this.fee = fee;
        this.address = address;
        this.specialization = specialization; // Fixed spelling error
        this.mobileNumber = mobileNumber; // Changed to camel case
    }

    // Getters and Setters
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getDoctorName() {
        return doctorName;
    }

    public void setDoctorName(String doctorName) {
        this.doctorName = doctorName;
    }

    public String getDoctorEmail() { // Fixed method name
        return doctorEmail;
    }

    public void setDoctorEmail(String doctorEmail) { // Fixed method name
        this.doctorEmail = doctorEmail;
    }

    public int getFee() {
        return fee;
    }

    public void setFee(int fee) {
        this.fee = fee;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getSpecialization() { // Fixed method name
        return specialization;
    }

    public void setSpecialization(String specialization) { // Fixed method name
        this.specialization = specialization;
    }

    public String getMobileNumber() { // Changed to camel case
        return mobileNumber;
    }

    public void setMobileNumber(String mobileNumber) { // Changed to camel case
        this.mobileNumber = mobileNumber;
    }

    @Override
    public String toString() {
        return "Doctor [id=" + id + ", doctorName=" + doctorName + ", doctorEmail=" + doctorEmail + ", fee=" + fee +
                ", address=" + address + ", specialization=" + specialization + ", mobileNumber=" + mobileNumber + "]";
    }
}

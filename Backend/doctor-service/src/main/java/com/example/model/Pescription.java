package com.example.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Pescription {
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	private int id;
	@Column(nullable = false)
	private String name;
	@Column(nullable = false)
	private String email;
	@Column(nullable = false)
	private String date;
	@Column(nullable = false)
	private String cause;
	@Column(nullable = false)
	private String medicines;
	public Pescription() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Pescription(int id, String name, String email, String date, String cause, String medicines) {
		super();
		this.id = id;
		this.name = name;
		this.email = email;
		this.date = date;
		this.cause = cause;
		this.medicines = medicines;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	public String getCause() {
		return cause;
	}
	public void setCause(String cause) {
		this.cause = cause;
	}
	public String getMedicines() {
		return medicines;
	}
	public void setMedicines(String medicines) {
		this.medicines = medicines;
	}
	@Override
	public String toString() {
		return "Pescription [id=" + id + ", name=" + name + ", email=" + email + ", date=" + date + ", cause=" + cause
				+ ", medicines=" + medicines + "]";
	}
	
}

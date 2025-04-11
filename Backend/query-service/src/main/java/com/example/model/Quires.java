package com.example.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Quires {
	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE)
	private int id;
	@Column(nullable=false)
	private String name;
	@Column(name="email",nullable=false,unique=true)
	private String email;
	@Column(nullable=false)
	private String question;
	private String solution; // Admin will update this
	public Quires() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Quires(int id, String name, String email, String question, String solution) {
		super();
		this.id = id;
		this.name = name;
		this.email = email;
		this.question = question;
		this.solution = "pending"; //default value
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
	public String getQuestion() {
		return question;
	}
	public void setQuestion(String question) {
		this.question = question;
	}
	public String getSolution() {
		return solution;
	}
	public void setSolution(String solution) {
		this.solution = solution;
	}
	@Override
	public String toString() {
		return "Quires [id=" + id + ", name=" + name + ", email=" + email + ", question=" + question + ", solution="
				+ solution + "]";
	}

   
}

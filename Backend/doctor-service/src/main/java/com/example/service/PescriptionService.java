package com.example.service;

import java.util.List;

import com.example.model.Pescription;

public interface PescriptionService {
	List<Pescription> findByemail(String email);
	Pescription saveprescriptions(Pescription pescription);
}

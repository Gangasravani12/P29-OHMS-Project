package com.example.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.model.Pescription;
import com.example.repo.PescriptionRepo;
@Service
public class PescriptionServiceImp implements PescriptionService {
	@Autowired private PescriptionRepo repo;
	@Override
	public List<Pescription> findByemail(String email) {
		// TODO Auto-generated method stub
		return (List<Pescription>) repo.findByemail(email);
	}
	@Override
	public Pescription saveprescriptions(Pescription pescription) {
		// TODO Auto-generated method stub
		return repo.save(pescription);
	}

}

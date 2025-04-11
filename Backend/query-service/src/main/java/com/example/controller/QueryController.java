package com.example.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.model.Quires;
import com.example.service.QueryService;

@RestController
@RequestMapping("/query")
public class QueryController {

    @Autowired
    private QueryService service;

    @PostMapping("/submit")
    public Quires submitQuery(@RequestBody Quires query) {
        return service.submitQuery(query);
    }

    @GetMapping("/all")
    public List<Quires> getAllQueries() {
        return service.getAllQueries();
    }

    @GetMapping("/{id}")
    public Quires getQueryById(@PathVariable int id) {
        return service.getQueryById(id);
    }

    @PutMapping("/updateSolution/{id}")
    public ResponseEntity<Quires> updateSolution(@PathVariable("id") int id, @RequestBody Map<String, String> request) {
        String solution = request.get("solution");
        return ResponseEntity.ok(service.updateSolution(id, solution));
    }
}

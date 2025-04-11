package com.example.feign;

import java.util.Map;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.model.Quires;

@FeignClient(name = "query-service")
public interface QueryFeignClient {
    @PutMapping("/query/updateSolution/{id}")  // Corrected the path
    Quires updateQuerySolution(@PathVariable("id") int id, @RequestBody Map<String, String> request);
}

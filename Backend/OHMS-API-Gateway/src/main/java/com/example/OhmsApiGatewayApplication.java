package com.example;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
@EnableDiscoveryClient
@SpringBootApplication
public class OhmsApiGatewayApplication {

	public static void main(String[] args) {
		SpringApplication.run(OhmsApiGatewayApplication.class, args);
	}

}

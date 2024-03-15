package com.xaxis.disco.api;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;

@EnableFeignClients
@SpringBootApplication(scanBasePackages = "com.xaxis")
public class DiscoApplication {

    public static void main(String[] args) {
        SpringApplication.run(DiscoApplication.class, args);
    }


}

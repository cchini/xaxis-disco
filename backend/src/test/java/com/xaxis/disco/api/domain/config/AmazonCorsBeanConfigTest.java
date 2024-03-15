package com.xaxis.disco.api.domain.config;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

@SpringBootTest
class AmazonCorsBeanConfigTest {

    @Test
    void addCorsMappings_ok() {

        AmazonCorsBeanConfig beanConfiguration = new AmazonCorsBeanConfig();
        CorsRegistry registry = new CorsRegistry();

        //Then
        beanConfiguration.addCorsMappings(registry);

    }

}

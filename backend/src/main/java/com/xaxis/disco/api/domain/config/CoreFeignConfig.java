package com.xaxis.disco.api.domain.config;


import feign.form.FormEncoder;
import feign.form.spring.SpringFormEncoder;
import org.springframework.beans.factory.ObjectFactory;
import org.springframework.boot.autoconfigure.http.HttpMessageConverters;
import org.springframework.cloud.openfeign.support.FeignEncoderProperties;
import org.springframework.cloud.openfeign.support.SpringEncoder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;


@Configuration
public class CoreFeignConfig {

    @Bean
    FormEncoder feignFormEncoder(ObjectFactory<HttpMessageConverters> messageConverters, FeignEncoderProperties feignEncoderProperties) {
        return new FormEncoder(new SpringEncoder(new SpringFormEncoder(), messageConverters, feignEncoderProperties));
    }
}

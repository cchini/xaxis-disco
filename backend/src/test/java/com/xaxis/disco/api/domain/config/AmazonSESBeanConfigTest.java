package com.xaxis.disco.api.domain.config;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.util.ReflectionTestUtils;

import static org.assertj.core.api.BDDAssertions.then;

@SpringBootTest
class AmazonSESBeanConfigTest {

    @Test
    void amazonSimpleEmailService_ok() {

        // given
        AmazonSESBeanConfig beanConfiguration = new AmazonSESBeanConfig();
        ReflectionTestUtils.setField(beanConfiguration, "accessKey", "access-key");
        ReflectionTestUtils.setField(beanConfiguration, "secretKey", "secret-key");

        // when
        var result = beanConfiguration.amazonSimpleEmailService();

        // then
        then(result).isNotNull();
    }

}

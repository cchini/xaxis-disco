package com.xaxis.disco.api.domain.service;

import com.xaxis.disco.api.domain.repository.CreativeMatrixRepository;
import com.xaxis.disco.api.util.Mocks;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.assertj.core.api.BDDAssertions.then;
import static org.mockito.BDDMockito.given;

@ExtendWith(MockitoExtension.class)
class CreativeMatrixServiceTest {

    @InjectMocks
    CreativeMatrixService creativeMatrixService;

    @Mock
    private CreativeMatrixRepository creativeMatrixRepository;

    @Test
    void get_ok() {

        // given
        given(creativeMatrixRepository.get()).willReturn(Mocks.getCreativeMatrix());

        // when
        var result = creativeMatrixService.get();

        // then
        then(result).isNotEmpty();
        then(result.get(0).getName()).isEqualTo("name");

    }
}

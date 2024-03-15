package com.xaxis.disco.api.adapters.outbound.repository;

import com.xaxis.disco.api.util.Mocks;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.assertj.core.api.BDDAssertions.then;
import static org.mockito.BDDMockito.given;

@ExtendWith(MockitoExtension.class)
class CreativeMatrixRepositoryImplTest {

    @Mock
    private CreativeMatrixRepositoryMyBatis creativeMatrixRepositoryMyBatis;

    @InjectMocks
    private CreativeMatrixRepositoryImpl creativeMatrixRepository;

    @Test
    void get_ok() {

        // given
        given(creativeMatrixRepositoryMyBatis.get()).willReturn(Mocks.getCreativeMatrix());

        // when
        var result = creativeMatrixRepository.get();

        // then
        then(result).isNotEmpty();
        then(result.get(0).getName()).isEqualTo("name");
        then(result.get(0).getTypeDescription()).isEqualTo("typeDescription");
    }
}
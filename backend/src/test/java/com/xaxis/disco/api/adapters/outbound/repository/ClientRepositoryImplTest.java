package com.xaxis.disco.api.adapters.outbound.repository;

import com.xaxis.disco.api.util.Mocks;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.Optional;
import java.util.UUID;

import static org.assertj.core.api.BDDAssertions.then;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.BDDMockito.given;

@ExtendWith(MockitoExtension.class)
class ClientRepositoryImplTest {

    @Mock
    private ClientRepositoryMyBatis clientRepositoryMyBatis;

    @InjectMocks
    private ClientRepositoryImpl clientRepository;

    @Test
    void getBy_ok() {

        // given
        given(clientRepositoryMyBatis.getBy(any(UUID.class))).willReturn(Optional.of(Mocks.getClient()));

        // when
        var result = clientRepository.getBy(UUID.randomUUID());

        // then
        then(result).isNotEmpty();
        then(result.get().getTradeName()).isEqualTo("tradeName");
    }
}
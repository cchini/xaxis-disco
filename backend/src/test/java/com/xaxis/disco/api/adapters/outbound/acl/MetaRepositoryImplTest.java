package com.xaxis.disco.api.adapters.outbound.acl;

import com.xaxis.disco.api.util.Mocks;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.assertj.core.api.BDDAssertions.then;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.BDDMockito.given;

@ExtendWith(MockitoExtension.class)
class MetaRepositoryImplTest {

    @Mock
    private MetaApi metaApi;

    @InjectMocks
    private MetaRepositoryImpl metaRepository;

    @Test
    void getBusinessManagerBy_ok() {

        // given
        given(metaApi.getBusinessManagerBy(anyString(), anyString())).willReturn(Mocks.getWrapperMetaBusinessManagers());

        // when
        var result = metaRepository.getBusinessManagerBy("ACCOUNT_ID", "ACCESS_TOKEN");

        // then
        then(result).isNotEmpty();
        then(result.get(0).getId()).isEqualTo("businessManagerMock id 1");
        then(result.get(0).getName()).isEqualTo("businessManagerMock name 1");

    }

    @Test
    void getPageBy_ok() {

        // given
        given(metaApi.getPagesBy(anyString(), anyString())).willReturn(Mocks.getWrapperMetaPages());

        // when
        var result = metaRepository.getPageBy("ACCOUNT_ID", "ACCESS_TOKEN");

        // then
        then(result).isNotEmpty();
        then(result.get(0).getId()).isEqualTo("page id 1");
        then(result.get(0).getName()).isEqualTo("page name 1");
    }
}

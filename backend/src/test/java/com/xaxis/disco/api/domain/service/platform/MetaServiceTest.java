package com.xaxis.disco.api.domain.service.platform;


import com.xaxis.disco.api.domain.repository.MetaRepository;
import com.xaxis.disco.api.util.Mocks;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.test.util.ReflectionTestUtils;

import static org.assertj.core.api.BDDAssertions.then;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.BDDMockito.given;

@ExtendWith(MockitoExtension.class)
class MetaServiceTest {

    @InjectMocks
    private MetaService metaService;

    @Mock
    private MetaRepository metaRepository;

    @BeforeEach
    void setUp() {
        ReflectionTestUtils.setField(metaService, "appSecret", "app-secret");
        ReflectionTestUtils.setField(metaService, "accessToken", "access-token");
        ReflectionTestUtils.setField(metaService, "accountId", "account-id");
    }

    @Test
    void getPages_ok() {

        // given
        given(metaRepository.getPageBy(anyString(), anyString())).willReturn(Mocks.getPages());

        // when
        var result = metaService.getPages();

        // then
        then(result).isNotEmpty();
        then(result.get(0).getId()).isEqualTo("page id 1");
        then(result.get(0).getName()).isEqualTo("page name 1");
    }

    @Test
    void getBusiness_ok() {

        // given
        given(metaRepository.getBusinessManagerBy(anyString(), anyString())).willReturn(Mocks.getBusinessManagers());

        // when
        var result = metaService.getBusiness();

        // then
        then(result).isNotEmpty();
        then(result.get(0).getId()).isEqualTo("businessManagerMock id 1");
        then(result.get(0).getName()).isEqualTo("businessManagerMock name 1");
    }
    /*

      public List<Page> getPages() {
        return metaRepository.getPageBy(accountId, accessToken);
    }

    public List<BusinessManager> getBusiness() {
        return metaRepository.getBusinessManagerBy(accountId, accessToken);
    }


     */
}

package com.xaxis.disco.api.domain.service;

import com.xaxis.disco.api.domain.repository.CampaignRepository;
import com.xaxis.disco.api.util.Mocks;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.assertj.core.api.BDDAssertions.then;
import static org.mockito.BDDMockito.given;

@ExtendWith(MockitoExtension.class)
class CampaignServiceTest {

    @InjectMocks
    CampaignService campaignService;

    @Mock
    private CampaignRepository campaignRepository;

    @Test
    void get_ok() {

        // given
        given(campaignRepository.get()).willReturn(Mocks.getCampaign());

        // when
        var result = campaignService.get();

        // then
        then(result).isNotEmpty();
        then(result.get(0).getName()).isEqualTo("name campaign");

    }
}

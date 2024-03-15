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
class CampaignRepositoryImplTest {

    @Mock
    private CampaignRepositoryMyBatis campaignRepositoryMyBatis;

    @InjectMocks
    private CampaignRepositoryImpl campaignRepository;

    @Test
    void get_ok() {

        // given
        given(campaignRepositoryMyBatis.get()).willReturn(Mocks.getCampaign());

        // when
        var result = campaignRepository.get();

        // then
        then(result.get(0).getName()).isEqualTo("name campaign");
        then(result.get(0).getTypeDescription()).isEqualTo("type description");
        then(result.get(0).getKpi()).isEqualTo("kpi");


    }

}
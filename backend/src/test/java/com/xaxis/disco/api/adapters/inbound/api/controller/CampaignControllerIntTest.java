package com.xaxis.disco.api.adapters.inbound.api.controller;

import com.xaxis.disco.api.domain.service.CampaignService;
import com.xaxis.disco.api.util.Mocks;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.transaction.annotation.Transactional;

import static org.mockito.BDDMockito.given;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;


@Transactional
@SpringBootTest
@AutoConfigureMockMvc
class CampaignControllerIntTest {

    private static final String PATH = "/campaign/";

    @InjectMocks
    private CampaignController campaignController;

    @Mock
    private CampaignService campaignService;

    @Autowired
    private MockMvc mockMvc;


    @BeforeEach
    void setUp() {
        mockMvc = MockMvcBuilders
                .standaloneSetup(campaignController)
                .alwaysDo(print())
                .build();
    }

    @Test
    void get_oK() throws Exception {

        //Given
        given(campaignService.get()).willReturn(Mocks.getCampaign());

        //when
        var result = mockMvc.perform(get(PATH));

        //Then
        result.andExpect(status().isOk());
        result.andExpect(jsonPath("$.campaigns[0].accountId").exists());
        result.andExpect(jsonPath("$.campaigns[0].name").exists());
        result.andExpect(jsonPath("$.campaigns[0].startDate").exists());
        result.andExpect(jsonPath("$.campaigns[0].endDate").exists());
        result.andExpect(jsonPath("$.campaigns[0].typeDescription").exists());
        result.andExpect(jsonPath("$.campaigns[0].budget").exists());
        result.andExpect(jsonPath("$.campaigns[0].kpi").exists());
        result.andExpect(jsonPath("$.campaigns[0].goal").exists());
        result.andExpect(jsonPath("$.campaigns[0].statusId").exists());

    }
}

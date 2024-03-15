package com.xaxis.disco.api.adapters.inbound.api.controller;

import com.xaxis.disco.api.domain.service.CreativeMatrixService;
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
class CreativeMatrixControllerIntTest {

    private static final String PATH = "/creative-matrix/";

    @Mock
    private CreativeMatrixService creativeMatrixService;

    @InjectMocks
    private CreativeMatrixController creativeMatrixController;

    @Autowired
    private MockMvc mockMvc;

    @BeforeEach
    void setUp() {
        mockMvc = MockMvcBuilders
                .standaloneSetup(creativeMatrixController)
                .alwaysDo(print())
                .build();
    }

    @Test
    void get_oK() throws Exception {

        //Given
        given(creativeMatrixService.get()).willReturn(Mocks.getCreativeMatrix());

        //when
        var result = mockMvc.perform(get(PATH));

        //Then
        result.andExpect(status().isOk());
        result.andExpect(jsonPath("$.creativeMatrixList[0].id").exists());
        result.andExpect(jsonPath("$.creativeMatrixList[0].name").exists());
        result.andExpect(jsonPath("$.creativeMatrixList[0].statusId").exists());
        result.andExpect(jsonPath("$.creativeMatrixList[0].typeDescription").exists());
        result.andExpect(jsonPath("$.creativeMatrixList[0].accountId").exists());
        result.andExpect(jsonPath("$.creativeMatrixList[0].deleted").exists());

    }
}

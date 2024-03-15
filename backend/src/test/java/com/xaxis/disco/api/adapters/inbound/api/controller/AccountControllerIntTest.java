package com.xaxis.disco.api.adapters.inbound.api.controller;

import com.amazonaws.services.simpleemail.model.SendEmailResult;
import com.xaxis.disco.api.domain.service.AccountService;
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

import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.BDDMockito.given;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;


@Transactional
@SpringBootTest
@AutoConfigureMockMvc
class AccountControllerIntTest {

    private static final String PATH = "/account/";

    @InjectMocks
    protected AccountController accountController;

    @Mock
    private AccountService accountService;

    @Autowired
    private MockMvc mockMvc;

    @BeforeEach
    void setUp() {
        mockMvc = MockMvcBuilders
                .standaloneSetup(accountController)
                .alwaysDo(print())
                .build();
    }

    @Test
    void get_oK() throws Exception {

        //Given
        given(accountService.get()).willReturn(Mocks.getAccount());

        //when
        var result = mockMvc.perform(get(PATH));

        //Then
        result.andExpect(status().isOk());
        result.andExpect(jsonPath("$.id").exists());
        result.andExpect(jsonPath("$.countryName").exists());
        result.andExpect(jsonPath("$.name").exists());
        result.andExpect(jsonPath("$.clientId").exists());
    }

    @Test
    void sendMail_oK() throws Exception {

        //Given
        var resultMail = new SendEmailResult();
        resultMail.setMessageId("message id");
        given(accountService.sendMail(anyString())).willReturn(resultMail);

        //when
        var result = mockMvc.perform(post(PATH + "sendMail/")
                .param("to", "mail@mail.com"));

        //Then
        result.andExpect(status().isOk());
        result.andExpect(jsonPath("$.messageId").exists());
    }
}

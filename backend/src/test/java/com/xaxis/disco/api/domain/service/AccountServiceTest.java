package com.xaxis.disco.api.domain.service;

import com.amazonaws.services.simpleemail.AmazonSimpleEmailService;
import com.amazonaws.services.simpleemail.model.SendEmailRequest;
import com.amazonaws.services.simpleemail.model.SendEmailResult;
import com.xaxis.disco.api.domain.repository.AccountRepository;
import com.xaxis.disco.api.domain.service.platform.MetaService;
import com.xaxis.disco.api.domain.service.platform.TikTokService;
import com.xaxis.disco.api.util.Mocks;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.ArgumentCaptor;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.assertj.core.api.BDDAssertions.then;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.BDDMockito.given;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;

@ExtendWith(MockitoExtension.class)
class AccountServiceTest {

    @InjectMocks
    AccountService accountService;

    @Mock
    private AccountRepository accountRepository;

    @Mock
    private MetaService metaService;

    @Mock
    private TikTokService tikTokService;

    @Mock
    private AmazonSimpleEmailService simpleEmailService;

    @Test
    void sendEmail_ok() {

        // given
        var emailResult = new SendEmailResult();
        emailResult.setMessageId("messageId");
        given(simpleEmailService.sendEmail(any(SendEmailRequest.class))).willReturn(emailResult);

        // when
        var result = accountService.sendMail("mail@mail.com");

        // then
        then(result.getMessageId()).isEqualTo("messageId");

        var argumentCaptor = ArgumentCaptor.forClass(SendEmailRequest.class);
        verify(simpleEmailService, times(1)).sendEmail(argumentCaptor.capture());

        then(argumentCaptor.getValue().getDestination().getToAddresses().get(0)).isEqualTo("mail@mail.com");
        then(argumentCaptor.getValue().getMessage().getBody().getText().getCharset()).isEqualTo("UTF-8");
        then(argumentCaptor.getValue().getMessage().getBody().getText().getData()).isEqualTo("Hello world!");
        then(argumentCaptor.getValue().getSource()).isEqualTo("giannecchini.a@gmail.com");
        then(argumentCaptor.getValue().getSdkRequestTimeout()).isEqualTo(3000);

    }

    @Test
    void get_ok() {

        // given
        given(metaService.getPages()).willReturn(Mocks.getPages());
        given(metaService.getBusiness()).willReturn(Mocks.getBusinessManagers());

        given(tikTokService.getPages(anyString())).willReturn(Mocks.getPages());
        given(tikTokService.getBusiness()).willReturn(Mocks.getBusinessManagers());

        // when
        var result = accountService.get();

        // then
        then(result).isNotNull();
        then(result.getOwnerPlatforms().get(0).getBusinessManagerName()).isEqualTo("businessManagerMock name 1");
        then(result.getOwnerPlatforms().get(0).getBusinessManagerId()).isEqualTo("businessManagerMock id 1");
        then(result.getOwnerPlatforms().get(0).getPages().get(0).getPageId()).isEqualTo("page id 1");
        then(result.getOwnerPlatforms().get(0).getPages().get(0).getPageName()).isEqualTo("page name 1");
        then(result.getOwnerPlatforms().get(1).getBusinessManagerName()).isEqualTo("businessManagerMock name 1");
        then(result.getOwnerPlatforms().get(1).getBusinessManagerId()).isEqualTo("businessManagerMock id 1");
        then(result.getOwnerPlatforms().get(1).getPages().get(0).getPageId()).isEqualTo("page id 1");
        then(result.getOwnerPlatforms().get(1).getPages().get(0).getPageName()).isEqualTo("page name 1");
        then(result.getCountryName()).isEqualTo("UK");

    }
}

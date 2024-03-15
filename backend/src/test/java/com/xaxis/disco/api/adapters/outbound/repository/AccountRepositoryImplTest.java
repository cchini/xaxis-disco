package com.xaxis.disco.api.adapters.outbound.repository;

import com.xaxis.disco.api.domain.model.Account;
import com.xaxis.disco.api.domain.model.AccountPage;
import com.xaxis.disco.api.domain.model.AccountPlatform;
import com.xaxis.disco.api.util.Mocks;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.List;
import java.util.UUID;

import static org.assertj.core.api.BDDAssertions.then;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.BDDMockito.given;

@ExtendWith(MockitoExtension.class)
class AccountRepositoryImplTest {

    @Mock
    private AccountRepositoryMyBatis accountRepositoryMyBatis;

    @InjectMocks
    private AccountRepositoryImpl accountRepository;

    @Test
    void getBy_ok() {

        var das = List.of(Account.builder()
                .id(1L)
                .name("name account")
                .clientId(1)
                .countryName("countryName")
                .build());

        // given
        given(accountRepositoryMyBatis.getBy(any(UUID.class))).willReturn(das);

        // when
        var result = accountRepository.getBy(UUID.randomUUID());

        // then
        then(result.get(0).getName()).isEqualTo("name account");
        then(result.get(0).getClientId()).isEqualTo(1L);
        then(result.get(0).getCountryName()).isEqualTo("countryName");
    }

    @Test
    void getAllPlatform_ok() {

        // given
        given(accountRepositoryMyBatis.getAllPlatform()).willReturn(Mocks.getPlatforms());

        // when
        var result = accountRepository.getAllPlatform();

        // then
        then(result.get(0).getName()).isEqualTo("name");
        then(result.get(0).getId()).isEqualTo(1);
        then(result.get(0).getCode()).isEqualTo("CODE");
    }

    @Test
    void createAccount_ok() {

        // given
        given(accountRepositoryMyBatis.create(any(Account.class))).willReturn(Mocks.getAccount());

        // when
        var result = accountRepository.create(Mocks.getAccount());

        // then
        then(result.getName()).isEqualTo("name");
        then(result.getId()).isEqualTo(1L);
        then(result.getClientId()).isEqualTo(1);
        then(result.getCountryName()).isEqualTo("countryName");
    }


    @Test
    void createAccountPage_ok() {

        // given
        given(accountRepositoryMyBatis.createAccountPage(any(AccountPage.class))).willReturn(Mocks.getAccountPage());

        // when
        var result = accountRepository.create(Mocks.getAccountPage());

        // then

        then(result.getId()).isEqualTo(1L);
        then(result.getPageId()).isEqualTo("pageId");
        then(result.getPageName()).isEqualTo("pageName");

    }

    @Test
    void createAccountPlatform_ok() {

        // given
        given(accountRepositoryMyBatis.createAccountPlatform(any(AccountPlatform.class))).willReturn(Mocks.getAccountPlatform());

        // when
        var result = accountRepository.create(Mocks.getAccountPlatform());

        // then
        then(result.getId()).isEqualTo(1L);
        then(result.getBusinessManagerId()).isEqualTo("businessManager id");
        then(result.getBusinessManagerName()).isEqualTo("businessManager name");
        then(result.getStatusId()).isEqualTo((short) 1);
        then(result.getPlatformOwnerId()).isEqualTo((short) 1);

    }

}
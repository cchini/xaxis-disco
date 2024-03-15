package com.xaxis.disco.api.adapters.outbound.repository;

import com.xaxis.disco.api.domain.model.Account;
import com.xaxis.disco.api.domain.model.AccountPage;
import com.xaxis.disco.api.domain.model.AccountPlatform;
import com.xaxis.disco.api.domain.model.Platform;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.UUID;

@Mapper
public interface AccountRepositoryMyBatis {

    List<Account> getBy(UUID uuid);

    Account create(Account account);

    AccountPlatform createAccountPlatform(AccountPlatform accountPlatform);

    AccountPage createAccountPage(AccountPage accountPage);

    List<Platform> getAllPlatform();
}

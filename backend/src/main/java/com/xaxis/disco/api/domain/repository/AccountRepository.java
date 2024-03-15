package com.xaxis.disco.api.domain.repository;

import com.xaxis.disco.api.domain.model.Account;
import com.xaxis.disco.api.domain.model.AccountPage;
import com.xaxis.disco.api.domain.model.AccountPlatform;
import com.xaxis.disco.api.domain.model.Platform;

import java.util.List;
import java.util.UUID;


public interface AccountRepository {

    List<Account> getBy(UUID clientId);

    Account create(Account account);

    AccountPlatform create(AccountPlatform accountPlatform);

    AccountPage create(AccountPage accountPage);

    List<Platform> getAllPlatform();
}

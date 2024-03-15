package com.xaxis.disco.api.adapters.outbound.repository;

import com.xaxis.disco.api.domain.model.Account;
import com.xaxis.disco.api.domain.model.AccountPage;
import com.xaxis.disco.api.domain.model.AccountPlatform;
import com.xaxis.disco.api.domain.model.Platform;
import com.xaxis.disco.api.domain.repository.AccountRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
@AllArgsConstructor
public class AccountRepositoryImpl implements AccountRepository {

    @Autowired
    private final AccountRepositoryMyBatis accountRepositoryMyBatis;

    @Override
    public List<Account> getBy(UUID clientId) {
        return accountRepositoryMyBatis.getBy(clientId);
    }

    @Override
    public Account create(Account account) {
        return accountRepositoryMyBatis.create(account);
    }

    @Override
    public AccountPlatform create(AccountPlatform accountPlatform) {
        return accountRepositoryMyBatis.createAccountPlatform(accountPlatform);
    }

    @Override
    public AccountPage create(AccountPage accountPage) {
        return accountRepositoryMyBatis.createAccountPage(accountPage);
    }

    @Override
    public List<Platform> getAllPlatform() {
        return accountRepositoryMyBatis.getAllPlatform();
    }


}

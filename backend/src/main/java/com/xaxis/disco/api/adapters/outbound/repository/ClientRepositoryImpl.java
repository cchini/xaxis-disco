package com.xaxis.disco.api.adapters.outbound.repository;

import com.xaxis.disco.api.domain.model.Client;
import com.xaxis.disco.api.domain.repository.ClientRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
@AllArgsConstructor
public class ClientRepositoryImpl implements ClientRepository {

    @Autowired
    private final ClientRepositoryMyBatis clientRepositoryMyBatis;

    @Override
    public Optional<Client> getBy(UUID clientId) {

        return clientRepositoryMyBatis.getBy(clientId);
    }


}

package com.xaxis.disco.api.domain.repository;

import com.xaxis.disco.api.domain.model.Client;

import java.util.Optional;
import java.util.UUID;

public interface ClientRepository {

    Optional<Client> getBy(UUID uuid);
}

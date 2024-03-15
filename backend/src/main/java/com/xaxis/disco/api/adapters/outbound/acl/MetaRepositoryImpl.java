package com.xaxis.disco.api.adapters.outbound.acl;

import com.xaxis.disco.api.domain.model.BusinessManager;
import com.xaxis.disco.api.domain.model.Page;
import com.xaxis.disco.api.domain.repository.MetaRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@AllArgsConstructor
public class MetaRepositoryImpl implements MetaRepository {

    private final MetaApi metaApi;

    public List<Page> getPageBy(String accountId, String token) {
        return metaApi.getPagesBy(accountId, token).getData();
    }

    public List<BusinessManager> getBusinessManagerBy(String accountId, String token) {
        return metaApi.getBusinessManagerBy(accountId, token).getData();
    }
}

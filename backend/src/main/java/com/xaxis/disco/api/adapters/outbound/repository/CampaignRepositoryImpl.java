package com.xaxis.disco.api.adapters.outbound.repository;

import com.xaxis.disco.api.domain.model.Campaign;
import com.xaxis.disco.api.domain.repository.CampaignRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@AllArgsConstructor
public class CampaignRepositoryImpl implements CampaignRepository {

    @Autowired
    private final CampaignRepositoryMyBatis repositoryMyBatis;

    @Override
    public List<Campaign> get() {
        return repositoryMyBatis.get();
    }
}

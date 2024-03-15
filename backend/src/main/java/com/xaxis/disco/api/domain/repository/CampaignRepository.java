package com.xaxis.disco.api.domain.repository;

import com.xaxis.disco.api.domain.model.Campaign;

import java.util.List;

public interface CampaignRepository {

    List<Campaign> get();
}

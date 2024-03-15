package com.xaxis.disco.api.domain.service;

import com.xaxis.disco.api.domain.model.Campaign;
import com.xaxis.disco.api.domain.repository.CampaignRepository;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;


@Slf4j
@Service
@AllArgsConstructor
public class CampaignService {

    private final CampaignRepository campaignRepository;

    public List<Campaign> get() {
        return campaignRepository.get();

    }
}

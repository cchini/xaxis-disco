package com.xaxis.disco.api.adapters.inbound.api.controller;

import com.xaxis.disco.api.adapters.inbound.api.response.CampaignResponse;
import com.xaxis.disco.api.domain.service.CampaignService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("campaign/")
@AllArgsConstructor
public class CampaignController implements CampaignControllerDoc {

    private CampaignService campaignService;

    @GetMapping
    public CampaignResponse get() {
        return CampaignResponse.builder().campaigns(campaignService.get()).build();
    }
}

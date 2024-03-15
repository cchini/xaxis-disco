package com.xaxis.disco.api.domain.service.platform;

import com.xaxis.disco.api.domain.model.BusinessManager;
import com.xaxis.disco.api.domain.model.Page;
import com.xaxis.disco.api.domain.model.tiktok.AdvertiserManager;
import com.xaxis.disco.api.domain.repository.TikTokRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@Slf4j
public class TikTokService {

    @Value("${tiktok.appSecret}")
    private String appSecret;
    @Value("${tiktok.accessToken}")
    private String accessToken;
    @Value("${tiktok.appId}")
    private String appId;
    @Autowired
    private TikTokRepository tikTokRepository;

    public List<BusinessManager> getBusiness() {
        return tikTokRepository.getBusinessManagerBy(appId, appSecret, accessToken).stream()
                .map(AdvertiserManager::toBusinessManager)
                .collect(Collectors.toList());
    }

    public List<Page> getPages(String advertiserId) {
        return tikTokRepository.getPageBy(appId, advertiserId, accessToken).getList();
    }

}

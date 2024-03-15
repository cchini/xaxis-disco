package com.xaxis.disco.api.adapters.outbound.acl;

import com.xaxis.disco.api.domain.model.tiktok.AdvertiserManager;
import com.xaxis.disco.api.domain.model.tiktok.PageResponse;
import com.xaxis.disco.api.domain.repository.TikTokRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@AllArgsConstructor
public class TikTokRepositoryImpl implements TikTokRepository {

    private final TikTokApi tikTokApi;

    public PageResponse getPageBy(String appId, String advertiserId, String token) {
        return tikTokApi.getPagesBy("6996025616369778690", "{\"start\": \"2019-06-02 15:06:33\", \"end\": \"2022-06-02 15:06:33\"}", token).getData();
    }

    public List<AdvertiserManager> getBusinessManagerBy(String appId, String secret, String accessToken) {
        return tikTokApi.getBusinessManagerBy(appId, secret, accessToken).getData().getList();
    }
}

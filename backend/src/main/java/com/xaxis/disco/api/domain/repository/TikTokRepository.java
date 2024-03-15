package com.xaxis.disco.api.domain.repository;

import com.xaxis.disco.api.domain.model.tiktok.AdvertiserManager;
import com.xaxis.disco.api.domain.model.tiktok.PageResponse;

import java.util.List;

public interface TikTokRepository {

    List<AdvertiserManager> getBusinessManagerBy(String appId, String token, String accessToken);

    PageResponse getPageBy(String appId, String advertiserId, String accessToken);
}

package com.xaxis.disco.api.adapters.outbound.acl;

import com.xaxis.disco.api.domain.model.tiktok.AdvertiserManagerResponse;
import com.xaxis.disco.api.domain.model.tiktok.WrapperTikTok;
import com.xaxis.disco.api.domain.model.tiktok.WrapperTikTokPage;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.*;

import static org.springframework.http.MediaType.APPLICATION_FORM_URLENCODED_VALUE;


@FeignClient(name = "tiktok-api", url = "${api.tiktok}")

public interface TikTokApi {

    @RequestMapping(method = {RequestMethod.GET}, consumes = APPLICATION_FORM_URLENCODED_VALUE,
            value = "/page/get/?advertiser_id={advertiserId}&update_time_range={updateTimeRange}")
    WrapperTikTokPage getPagesBy(@RequestParam String advertiserId, @RequestParam String updateTimeRange,
                                 @RequestHeader("Access-Token") String accessToken);


    @GetMapping("/oauth2/advertiser/get/?app_id={appId}&secret={appSecret}")
    WrapperTikTok<AdvertiserManagerResponse> getBusinessManagerBy(@RequestParam String appId, @RequestParam String appSecret,
                                                                  @RequestHeader("Access-Token") String accessToken);

}


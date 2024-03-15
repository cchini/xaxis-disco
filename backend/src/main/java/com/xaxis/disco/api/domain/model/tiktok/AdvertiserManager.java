package com.xaxis.disco.api.domain.model.tiktok;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.xaxis.disco.api.domain.model.BusinessManager;
import lombok.*;

@AllArgsConstructor
@Getter
@Setter
@Builder
@NoArgsConstructor
public class AdvertiserManager {

    @JsonProperty("advertiser_id")
    private String advertiserId;

    @JsonProperty("advertiser_name")
    private String advertiserName;

    public BusinessManager toBusinessManager() {
        return BusinessManager.builder()
                .name(advertiserName)
                .id(advertiserId)
                .build();
    }
}

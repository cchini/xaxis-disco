package com.xaxis.disco.api.domain.model.tiktok;

import lombok.*;

import java.util.List;

@AllArgsConstructor
@Getter
@Setter
@Builder
@NoArgsConstructor
public class AdvertiserManagerResponse {

    private List<AdvertiserManager> list;

}

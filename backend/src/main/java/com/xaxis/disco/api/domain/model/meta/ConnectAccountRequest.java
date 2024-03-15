package com.xaxis.disco.api.domain.model.meta;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
@Builder
public class ConnectAccountRequest {

    private String advertiserId;
    private String advertiserName;
}

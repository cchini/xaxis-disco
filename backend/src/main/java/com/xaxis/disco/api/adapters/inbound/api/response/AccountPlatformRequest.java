package com.xaxis.disco.api.adapters.inbound.api.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@AllArgsConstructor
@Setter
@Getter
public class AccountPlatformRequest {

    private String businessManagerId;
    private String businessManagerName;
    private String platformOwnerCode;
    private List<AccountPageRequest> pages;

}

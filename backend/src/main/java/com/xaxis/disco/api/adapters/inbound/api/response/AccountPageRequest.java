package com.xaxis.disco.api.adapters.inbound.api.response;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@AllArgsConstructor
@Setter
@Getter
public class AccountPageRequest {

    private String platformCode;
    private String pageId;
    private String pageName;

}
